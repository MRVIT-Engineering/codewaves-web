import { makeAutoObservable, runInAction } from 'mobx';
import autoBind from 'auto-bind';
import io from 'socket.io-client';

import { SubmissionOutput } from '../models/SubmissionOutput';

import { PlaygroundStore } from './PlaygroundStore';
import { CompilerApi } from '../api/CompilerApi';

export class CompilerStore {
  api: CompilerApi;
  playgroundStore: PlaygroundStore;

  // Web & Sphere engine compilers
  currentSumbmissionId: number = -1;
  currentSubmissionOutput: string = '';
  currentSubmissionError: string = '';
  outputs: SubmissionOutput[] = [];
  webOutput: string = '';
  compilerLoading: boolean = false;

  socket: any;

  constructor(playgroundStore: PlaygroundStore, api: CompilerApi) {
    this.playgroundStore = playgroundStore;
    makeAutoObservable(this);
    autoBind(this);
    this.compileWeb();
    this.configSocketIO();
    this.api = api;
  }

  configSocketIO() {
    this.socket = io(`${process.env.REACT_APP_CODEWAVES_API}`);
    this.socket.on('connection', () => {
      this.socket.on('submissionStatusChanged', async ({ origin, submission }: any) => {
        if (origin === 'sec' && !submission.executing && submission.id === this.currentSumbmissionId) {
          runInAction(() => {
            this.compilerLoading = false;
          });
          const submissionData = await this.getSubmissionInfo(submission.id);
          await this.getSubmissionOutput(submissionData);
        }
      });
    });
  }

  async getSubmissionOutput(submission: any) {
    if (submission.result.status.code === 15) {
      const response = await this.api.getSubmissionStream(submission.id, 'output');
      if (response.status === 200) {
        runInAction(() => {
          this.outputs = [...this.outputs, { output: response.data, type: 'output' }];
          this.currentSubmissionOutput = response.data;
        });
        return response.data;
      } else {
        return false;
      }
    } else {
      const response = await this.api.getSubmissionStream(submission.id, 'cmpinfo');
      runInAction(() => {
        console.log('Adding errror to array');
        this.outputs = [...this.outputs, { output: response.data, type: 'error' }];
      });
    }
  }

  async getSubmissionInfo(id: number) {
    const { data } = await this.api.getSubmissionInfo(id);
    return data;
  }

  compileWeb() {
    this.webOutput = `<html><head><style>${this.playgroundStore.getCodeByLanguage(
      'css'
    )}</style></head><body>${this.playgroundStore.getCodeByLanguage(
      'html'
    )}<script>${this.playgroundStore.getCodeByLanguage('js')}</script></body>`;
  }

  async runCodeWithCompiler(compilerId: number) {
    this.compilerLoading = true;
    const { data } = await this.api.createCodeSubmission(
      this.playgroundStore.getActiveTabCode(),
      compilerId,
      this.playgroundStore.inputData.replace(/^.*#.*$/gm, '').replace(/\s/g, '')
    );
    runInAction(() => {
      this.currentSumbmissionId = data.id;
    });
    return data;
  }
}

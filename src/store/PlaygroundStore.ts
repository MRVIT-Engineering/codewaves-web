import { makeAutoObservable, runInAction } from 'mobx';
import autoBind from 'auto-bind';

import { Playground } from '../models/Playground';
import { Compiler } from '../constants/languages/Languages';

import { PlaygroundApi } from '../api/PlaygroundApi';
import { STATUS_CODES } from '../constants/statusCodes/StatusCodes';

export class PlaygroundStore {
  api: PlaygroundApi;

  // tabs and editor actions
  activeTabIndex: number = 0;
  inputData: string = `#\n# This is the input data file.\n# Enter your input data bellow before compiling.\n# Also remvoe this comment \n`;

  // current playground settiings
  compilers: Compiler[] = [];
  playgroundProgrammingLanguage: string = '';
  mode: string = ''; // storing this separately for the future problems palyground.

  // playground data from DB
  playgrounds: Playground[] = [];
  currentPlayground: Playground = {
    mode: '',
    title: '',
    tabs: [{ name: '', language: '', code: '' }],
    compilers: [{ name: '', id: 0 }],
  };

  constructor(api: PlaygroundApi) {
    makeAutoObservable(this);
    autoBind(this);
    this.api = api;
  }

  setInputData(data: string) {
    this.inputData = data;
  }

  async updatePlayground() {
    const { data, status } = await this.api.updatePlayground(
      this.currentPlayground._id!,
      this.currentPlayground.tabs
    );

    if (status === STATUS_CODES.success) return { data, status };
    else throw new Error('Could not update playground');
  }

  async getPlaygroundByUser() {
    try {
      const { status, data } = await this.api.listPlaygroundsByUser();
      runInAction(() => {
        this.playgrounds = data;
      });
      return { status, data };
    } catch (error) {
      console.log(error);
    }
  }

  async getPlaygroundById(id: string) {
    const { data, status } = await this.api.getPlayground(id);
    if (status === STATUS_CODES.success)
      runInAction(() => {
        this.currentPlayground = data;
      });
    else throw new Error('Playground not found!.');
    return { data, status };
  }

  async createPlayground(playground: Playground) {
    const { data, status } = await this.api.addPlayground(playground);
    if (status === STATUS_CODES.success) {
      runInAction(() => {
        this.playgrounds = [...this.playgrounds, data];
      });
    } else throw new Error('Something went wrong!');
  }

  setPlaygroundProgrammingLanguage(lang: string) {
    this.playgroundProgrammingLanguage = lang;
  }

  setCompilers(compilers: Compiler[]) {
    this.compilers = compilers;
  }

  setMode(mode: string) {
    this.mode = mode;
  }

  setActiveTabIndex(newActiveTabIndex: number) {
    this.activeTabIndex = newActiveTabIndex;
  }

  editTabCode(newCode: string) {
    this.currentPlayground.tabs[this.activeTabIndex].code = newCode;
  }

  getCodeByLanguage(language: string) {
    const tab = this.currentPlayground.tabs.find(t => t.language === language);
    if (tab) return tab.code;
    return '';
  }

  getActiveTabCode() {
    return this.currentPlayground.tabs[this.activeTabIndex].code;
  }
}

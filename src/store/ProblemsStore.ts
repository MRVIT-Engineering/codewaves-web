import autoBind from 'auto-bind';
import { makeAutoObservable, runInAction } from 'mobx';

import { SPProblem } from '../models/Problems/SPProblem';
import { Problem } from '../models/Problems/CodewavesProblem';
import { TestCase } from '../models/Problems/TestCase';

import { INITIAL_PROBLEM } from '../constants/initial/InitialValues';
import { STATUS_CODES } from '../constants/statusCodes/StatusCodes';

import { ProblemsApi } from '../api/ProblemsApi';

export class ProblemsStore {
  api: ProblemsApi;

  currentProblem: Problem = INITIAL_PROBLEM;
  testCases: TestCase[] = [];

  loading: boolean = false;

  constructor(api: ProblemsApi) {
    makeAutoObservable(this);
    autoBind(this);
    this.api = api;
  }

  async createSphereEngineProblem(spProblem: SPProblem) {
    this.loading = true;
    const { data } = await this.api.createSphereEngineProblem(spProblem);

    runInAction(() => {
      this.loading = false;
    });

    return data;
  }

  async addSPTestCase(spTestCase: TestCase) {
    this.testCases = [...this.testCases, spTestCase];
    this.loading = true;

    const { status } = await this.api.createSPProblemTestCase({
      ...spTestCase,
      problemId: this.currentProblem.sphereEngineId,
    });

    runInAction(() => {
      this.loading = false;
    });
    return status;
  }

  async createCodewavesProblem(problem: Problem) {
    const { data, status } = await this.api.createCodewavesProblem(problem);

    if (status === STATUS_CODES.success)
      runInAction(() => {
        this.currentProblem = data;
      });

    return { data, status };
  }

  async getProblemById(id: string) {
    const { data, status } = await this.api.getProblemById(id);

    if (status === STATUS_CODES.success)
      runInAction(() => {
        this.currentProblem = data;
      });

    return { data, status };
  }

  async addProblemTestCase(testcase: TestCase, id: string) {
    const { status } = await this.api.addProblemTestCase(testcase, id);

    if (status === STATUS_CODES.success) {
      runInAction(() => {
        this.currentProblem = {
          ...this.currentProblem,
          testCases: [...this.currentProblem.testCases!, testcase],
        };
      });
    }

    return status;
  }
}

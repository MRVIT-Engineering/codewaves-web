import autoBind from 'auto-bind';
import { makeAutoObservable, runInAction } from 'mobx';

import { Algo } from '../models/Algo';

import { AlgoApi } from '../api/AlgoApi';
import { STATUS_CODES } from '../constants/statusCodes/StatusCodes';

export class AlgoStore {
  api: AlgoApi;
  algos: Algo[] = [];
  currentAlgo: Algo | undefined;

  constructor(api: AlgoApi) {
    makeAutoObservable(this);
    autoBind(this);
    this.api = api;
  }

  setCurrentAlgo(algo: Algo) {
    runInAction(() => {
      this.currentAlgo = algo;
    });
  }

  async getAlgo(id: string) {
    const { status, data } = await this.api.getAlgo(id);
    if (status === STATUS_CODES.success) {
      this.setCurrentAlgo(data);
      return { status, data };
    } else throw new Error('Something went wrong. Please try again later');
  }

  async getAlgos() {
    const { status, data } = await this.api.getAlgos();
    if (status === STATUS_CODES.success)
      runInAction(() => {
        this.algos = data;
      });
    else throw new Error('Something went wrong. Please try again later');
  }

  async addAlgo(algoData: Algo) {
    const { status, data } = await this.api.addAlgo(algoData);
    if (status === STATUS_CODES.success) {
      runInAction(() => {
        this.algos = [...this.algos, data];
      });
      return { status, data };
    } else throw new Error('Something went wrong. Please try again later');
  }
}

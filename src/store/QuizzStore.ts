import { makeAutoObservable } from 'mobx';
import autoBind from 'auto-bind';

import { QuizzApi } from '../api/QuizzApi';

export class QuizzStore {
  api: QuizzApi;

  constructor(api: QuizzApi) {
    this.api = api;
    makeAutoObservable(this);
    autoBind(this);
  }

  async addQuizz(quizzData: any) {
    const response = await this.api.addQuizz(quizzData);
    return response;
  }

  async getQuizzes() {
    const response = await this.api.getQuizzes();
    return response;
  }
}

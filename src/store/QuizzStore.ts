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
    return this.api.addQuizz(quizzData);
  }

  async getQuizzes() {
    return this.api.getQuizzes();
  }

  async getQuizzById(id: string) {
    return this.api.getQuizzById(id);
  }
}

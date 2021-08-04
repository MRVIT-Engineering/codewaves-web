import autoBind from 'auto-bind';

import { ApiConfig } from './ApiConfig';

export class QuizzApi {
  apiConfig: ApiConfig;

  constructor(apiConfig: any) {
    this.apiConfig = apiConfig;
    autoBind(this);
  }

  addQuizz(data: any) {
    return this.apiConfig.sendRequest('POST', '/quizz', data);
  }

  getQuizzById(id: string) {
    return this.apiConfig.sendRequest('GET', `/quizz/${id}`, null);
  }

  getQuizzes() {
    return this.apiConfig.sendRequest('GET', '/quizz', null);
  }
}

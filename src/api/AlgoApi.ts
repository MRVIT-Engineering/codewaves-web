import { ApiConfig } from './ApiConfig';

import { Algo } from '../models/Algo';

export class AlgoApi {
  apiConfig: ApiConfig;

  constructor(apiConfig: any) {
    this.apiConfig = apiConfig;
  }

  getAlgos() {
    return this.apiConfig.sendRequest('GET', '/algo', null);
  }

  getAlgo(id: string) {
    return this.apiConfig.sendRequest('GET', `/algo/${id}`, null);
  }

  addAlgo(data: Algo) {
    return this.apiConfig.sendRequest('POST', '/algo', data);
  }
}

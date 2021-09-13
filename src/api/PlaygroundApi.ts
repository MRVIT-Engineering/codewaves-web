import autoBind from 'auto-bind';
import { Tab } from '../constants/types/Tab';

import { Playground } from '../models/Playground';

import { ApiConfig } from './ApiConfig';

export class PlaygroundApi {
  apiConfig: ApiConfig;
  socket: any;

  constructor(apiConfig: any) {
    this.apiConfig = apiConfig;
    autoBind(this);
  }

  addPlayground(playground: Playground) {
    return this.apiConfig.sendRequest('POST', '/playground', playground);
  }

  listPlaygroundsByUser() {
    return this.apiConfig.sendRequest('GET', `/playground/by_user`, null);
  }

  getPlayground(id: string) {
    return this.apiConfig.sendRequest('GET', `/playground/${id}`, null);
  }

  deletePlayground(id: string) {
    return this.apiConfig.sendRequest('DELETE', `/playground/${id}`, null);
  }

  updatePlayground(id: string, data: Tab[]) {
    return this.apiConfig.sendRequest('PUT', `/playground/${id}`, { tabs: data });
  }
}

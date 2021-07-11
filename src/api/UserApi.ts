import { ApiConfig } from './ApiConfig';

export class UserApi {
  apiConfig: ApiConfig;

  constructor(apiConfig: any) {
    this.apiConfig = apiConfig;
  }

  checkIfLoggedIn() {
    return this.apiConfig.sendRequest('POST', '/auth/check', null);
  }
}

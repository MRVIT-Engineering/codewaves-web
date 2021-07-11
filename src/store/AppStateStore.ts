import { makeAutoObservable } from 'mobx';

import { ApiConfig } from '../api/ApiConfig';
import { UserApi } from '../api/UserApi';
export class AppStateStore {
  isDrawerOpened: boolean;
  apiConfig: any;
  userApi: UserApi;

  constructor(codewavesApi: string = process.env.REACT_APP_CODEWAVES_API || 'http://localhost:8081') {
    this.isDrawerOpened = false;
    this.apiConfig = new ApiConfig(codewavesApi);
    this.userApi = new UserApi(this.apiConfig);
    makeAutoObservable(this);
  }

  toggleDrawer = () => {
    this.isDrawerOpened = !this.isDrawerOpened;
  };
}

export default new AppStateStore();

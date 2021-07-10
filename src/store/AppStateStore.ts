import { makeAutoObservable } from 'mobx';
import ApiConfig from '../config/axios';

export class AppStateStore {
  isDrawerOpened: boolean;

  api: any;

  constructor() {
    this.isDrawerOpened = false;
    this.api = ApiConfig;
    makeAutoObservable(this);
  }

  toggleDrawer = () => {
    this.isDrawerOpened = !this.isDrawerOpened;
  };
}

export default new AppStateStore();

import { makeAutoObservable } from "mobx";
import API from "../config/axios/index";

export class AppStateStore {
  isDrawerOpened: boolean;
  api: any;

  constructor() {
    this.isDrawerOpened = false;
    this.api = API;
    makeAutoObservable(this);
  }

  toggleDrawer = () => {
    this.isDrawerOpened = !this.isDrawerOpened;
    console.log(this.isDrawerOpened);
  };
}

export default new AppStateStore();

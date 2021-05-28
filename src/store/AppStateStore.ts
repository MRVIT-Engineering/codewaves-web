import { makeAutoObservable } from "mobx";

export class AppStateStore {
  isDrawerOpened: boolean;

  constructor() {
    this.isDrawerOpened = false;
    makeAutoObservable(this);
  }

  toggleDrawer = () => {
    this.isDrawerOpened = !this.isDrawerOpened;
    console.log(this.isDrawerOpened);
  };
}

export default new AppStateStore();

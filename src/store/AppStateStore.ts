import { makeAutoObservable } from "mobx";

export class AppStateStore {
  isOpened: boolean;

  constructor() {
    this.isOpened = false;
    makeAutoObservable(this);
  }

  toggleDrawer() {
    this.isOpened = !this.isOpened;
  }
}

export default new AppStateStore();

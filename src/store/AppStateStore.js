import { makeAutoObservable } from "mobx";

class AppStateStore {
  isOpened;

  constructor() {
    makeAutoObservable(this);
  }

  toggleDrawer() {
    this.isOpened = false;
    this.isOpened = !this.isOpened;
  }
}

export default new NavigationDrawerStore();

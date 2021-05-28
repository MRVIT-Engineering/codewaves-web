import { AppStateStore } from "./AppStateStore";

export default class RootStore {
  appStateStore: AppStateStore;

  constructor() {
    this.appStateStore = new AppStateStore();
  }
}

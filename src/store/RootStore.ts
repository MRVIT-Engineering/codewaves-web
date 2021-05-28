import { configure } from "mobx";
import { AppStateStore } from "./AppStateStore";

configure({ enforceActions: "observed" });

export default class RootStore {
  appStateStore: AppStateStore;

  constructor() {
    this.appStateStore = new AppStateStore();
  }
}

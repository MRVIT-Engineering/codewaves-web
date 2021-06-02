import { configure } from "mobx";
import { AppStateStore } from "./AppStateStore";
import { AuthStore } from "./AuthStore";

configure({ enforceActions: "observed" });

export default class RootStore {
  appStateStore: AppStateStore;
  authStore: AuthStore;

  constructor() {
    this.appStateStore = new AppStateStore();
    this.authStore = new AuthStore();
  }
}

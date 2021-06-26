import { configure } from "mobx";
import { AppStateStore } from "./AppStateStore";
import { AuthStore } from "./AuthStore";
import { PlaygroundStore } from "./PlaygroundStore";

configure({ enforceActions: "observed" });

export default class RootStore {
  appStateStore: AppStateStore;
  authStore: AuthStore;
  playgroundStore: PlaygroundStore;

  constructor() {
    this.appStateStore = new AppStateStore();
    this.authStore = new AuthStore();
    this.playgroundStore = new PlaygroundStore();
  }
}

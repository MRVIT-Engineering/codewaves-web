import { configure } from "mobx";
import { AppStateStore } from "./AppStateStore";
import { AuthStore } from "./AuthStore";
import { PlaygroundStore } from "./PlaygroundStore";
import { CompilerStore } from "./CompilerStore";

configure({ enforceActions: "observed" });

export default class RootStore {
  appStateStore: AppStateStore;
  authStore: AuthStore;
  playgroundStore: PlaygroundStore;
  compilerStore: CompilerStore;

  constructor() {
    this.appStateStore = new AppStateStore();
    this.authStore = new AuthStore();
    this.playgroundStore = new PlaygroundStore();
    this.compilerStore = new CompilerStore(this.playgroundStore);
  }
}

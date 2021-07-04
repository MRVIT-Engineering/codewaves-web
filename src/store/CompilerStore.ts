import { makeAutoObservable } from "mobx";
import autoBind from "auto-bind";

import { PlaygroundStore } from "./PlaygroundStore";

export class CompilerStore {
  playgroundStore: PlaygroundStore;
  webOutput: string = "";

  constructor(playgroundStore: PlaygroundStore) {
    this.playgroundStore = playgroundStore;
    makeAutoObservable(this);
    autoBind(this);
    this.compileWeb();
  }

  compileWeb() {
    this.webOutput = `<html><head><style>${this.playgroundStore.getCodeByLanguage(
      "css"
    )}</style></head><body>${this.playgroundStore.getCodeByLanguage(
      "html"
    )}<script>${this.playgroundStore.getCodeByLanguage("js")}</script></body>`;
  }
}

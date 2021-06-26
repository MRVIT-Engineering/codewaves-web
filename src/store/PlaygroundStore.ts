import { makeAutoObservable } from "mobx";
import autoBind from "auto-bind";

import { Tab } from "../constants/types/Tab";

export class PlaygroundStore {
  activeTabIndex: number = 0;
  code: string = "";
  tabs: Tab[] = [];

  constructor() {
    makeAutoObservable(this);
    autoBind(this);
    this._getTabs();
  }

  setCode(newCode: string) {
    this.code = newCode;
  }

  setActiveTabIndex(newActiveTabIndex: number) {
    this.activeTabIndex = newActiveTabIndex;
  }

  editTabCode(newCode: string) {
    this.tabs[this.activeTabIndex].code = newCode;
  }

  _getTabs(playgroundId?: string) {
    const tabs: Tab[] = [
      { name: "index.html", code: `<h1>This is html</h1>`, language: "html" },
      { code: `* {color: red;}`, language: "css", name: "main.css" },
    ];
    this.tabs = tabs;
  }
}

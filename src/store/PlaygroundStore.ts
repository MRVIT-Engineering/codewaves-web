import { makeAutoObservable } from 'mobx';
import autoBind from 'auto-bind';

import { Tab } from '../constants/types/Tab';

export class PlaygroundStore {
  activeTabIndex: number = 0;
  code: string = '';
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

  getCodeByLanguage(language: string) {
    const tab = this.tabs.find(t => t.language === language);
    if (tab) return tab.code;
    return '';
  }

  getActiveTabCode() {
    return this.tabs[this.activeTabIndex].code;
  }

  _getTabs(playgroundId?: string) {
    const tabs: Tab[] = [
      {
        name: 'main.cpp',
        code: ``,
        language: 'cpp',
      },
    ];
    this.tabs = tabs;
  }
}

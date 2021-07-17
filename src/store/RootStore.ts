import { configure } from 'mobx';
import { AppStateStore } from './AppStateStore';
import { AuthStore } from './AuthStore';
import { PlaygroundStore } from './PlaygroundStore';
import { CompilerStore } from './CompilerStore';
import { CourseStore } from './CourseStore';

configure({ enforceActions: 'observed' });

export default class RootStore {
  appStateStore: AppStateStore;
  authStore: AuthStore;
  playgroundStore: PlaygroundStore;
  compilerStore: CompilerStore;
  courseStore: CourseStore;

  constructor() {
    this.appStateStore = new AppStateStore();
    this.authStore = new AuthStore();
    this.playgroundStore = new PlaygroundStore();
    this.compilerStore = new CompilerStore(this.playgroundStore);
    this.courseStore = new CourseStore(this.appStateStore.courseApi);
  }
}

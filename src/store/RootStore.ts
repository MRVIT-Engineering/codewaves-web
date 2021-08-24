import { configure } from 'mobx';
import { AppStateStore } from './AppStateStore';
import { AuthStore } from './AuthStore';
import { PlaygroundStore } from './PlaygroundStore';
import { CompilerStore } from './CompilerStore';
import { CourseStore } from './CourseStore';
import { QuizzStore } from './QuizzStore';
import { AlgoStore } from './AlgoStore';

configure({ enforceActions: 'observed' });

export default class RootStore {
  appStateStore: AppStateStore;
  authStore: AuthStore;
  playgroundStore: PlaygroundStore;
  compilerStore: CompilerStore;
  courseStore: CourseStore;
  quizzStore: QuizzStore;
  algoStore: AlgoStore;

  constructor() {
    this.appStateStore = new AppStateStore();
    this.authStore = new AuthStore();
    this.playgroundStore = new PlaygroundStore();
    this.compilerStore = new CompilerStore(this.playgroundStore);
    this.courseStore = new CourseStore(this.appStateStore.courseApi);
    this.quizzStore = new QuizzStore(this.appStateStore.quizzApi);
    this.algoStore = new AlgoStore(this.appStateStore.algoApi);
  }
}

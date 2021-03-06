import { configure } from 'mobx';
import { AppStateStore } from './AppStateStore';
import { AuthStore } from './AuthStore';
import { PlaygroundStore } from './PlaygroundStore';
import { CompilerStore } from './CompilerStore';
import { CourseStore } from './CourseStore';
import { QuizzStore } from './QuizzStore';
import { AlgoStore } from './AlgoStore';
import { ProblemsStore } from './ProblemsStore';

configure({ enforceActions: 'observed' });

export default class RootStore {
  appStateStore: AppStateStore;
  authStore: AuthStore;
  playgroundStore: PlaygroundStore;
  compilerStore: CompilerStore;
  courseStore: CourseStore;
  quizzStore: QuizzStore;
  algoStore: AlgoStore;
  problemsStore: ProblemsStore;

  constructor() {
    this.appStateStore = new AppStateStore();
    this.authStore = new AuthStore();
    this.playgroundStore = new PlaygroundStore(this.appStateStore.playgroundApi);
    this.compilerStore = new CompilerStore(this.playgroundStore, this.appStateStore.compilerApi);
    this.courseStore = new CourseStore(this.appStateStore.courseApi);
    this.quizzStore = new QuizzStore(this.appStateStore.quizzApi);
    this.algoStore = new AlgoStore(this.appStateStore.algoApi);
    this.problemsStore = new ProblemsStore(this.appStateStore.problemsApi);
  }
}

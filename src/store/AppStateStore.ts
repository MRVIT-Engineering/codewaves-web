import { makeAutoObservable } from 'mobx';

import { ApiConfig } from '../api/ApiConfig';
import { UserApi } from '../api/UserApi';
import { CourseApi } from '../api/CourseApi';
import { QuizzApi } from '../api/QuizzApi';
import { AlgoApi } from '../api/AlgoApi';
import { CompilerApi } from '../api/CompilerApi';
import { PlaygroundApi } from '../api/PlaygroundApi';
export class AppStateStore {
  isDrawerOpened: boolean;
  apiConfig: any;
  userApi: UserApi;
  courseApi: CourseApi;
  quizzApi: QuizzApi;
  algoApi: AlgoApi;
  compilerApi: CompilerApi;
  playgroundApi: PlaygroundApi;

  constructor(codewavesApi: string = process.env.REACT_APP_CODEWAVES_API || 'http://localhost:8081') {
    this.isDrawerOpened = false;
    this.apiConfig = new ApiConfig(codewavesApi);
    this.userApi = new UserApi(this.apiConfig);
    this.courseApi = new CourseApi(this.apiConfig);
    this.quizzApi = new QuizzApi(this.apiConfig);
    this.algoApi = new AlgoApi(this.apiConfig);
    this.compilerApi = new CompilerApi(this.apiConfig);
    this.playgroundApi = new PlaygroundApi(this.apiConfig);
    makeAutoObservable(this);
  }

  toggleDrawer = () => {
    this.isDrawerOpened = !this.isDrawerOpened;
  };
}

export default new AppStateStore();

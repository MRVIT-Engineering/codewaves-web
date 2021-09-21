import autoBind from 'auto-bind';

import { SPProblem } from '../models/Problems/SPProblem';

import { ApiConfig } from './ApiConfig';

export class ProblemsApi {
  apiConfig: ApiConfig;

  constructor(apiConfig: any) {
    this.apiConfig = apiConfig;
    autoBind(this);
  }

  createSphereEngineProblem(data: SPProblem) {
    return this.apiConfig.sendRequest('POST', '/sphere_engine/problem', data);
  }

  createSPProblemTestCase(data: any) {
    return this.apiConfig.sendRequest('POST', '/sphere_engine/problem/test_case', data);
  }

  createCodewavesProblem(data: any) {
    return this.apiConfig.sendRequest('POST', '/problem', data);
  }

  getProblemById(id: string) {
    return this.apiConfig.sendRequest('GET', `/problem/${id}`);
  }
}

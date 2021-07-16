import autoBind from 'auto-bind';

import { ApiConfig } from './ApiConfig';

export class CourseApi {
  apiConfig: ApiConfig;

  constructor(apiConfig: any) {
    this.apiConfig = apiConfig;
    autoBind(this);
  }

  addCourse(data: any) {
    return this.apiConfig.sendRequest('POST', '/course', data);
  }

  listCourses() {
    return this.apiConfig.sendRequest('GET', '/course', null);
  }
}

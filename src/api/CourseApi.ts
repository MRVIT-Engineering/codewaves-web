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

  updateCourse(id: string, data: any) {
    return this.apiConfig.sendRequest('PUT', `/course/${id}`, data);
  }

  listCourses() {
    return this.apiConfig.sendRequest('GET', '/course', null);
  }

  deleteCourse(id: string) {
    return this.apiConfig.sendRequest('DELETE', `/course/${id}`, null);
  }
}

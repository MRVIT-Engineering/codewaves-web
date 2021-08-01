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

  getCourseById(id: string) {
    return this.apiConfig.sendRequest('GET', `/course/${id}`, null);
  }

  listCourses() {
    return this.apiConfig.sendRequest('GET', '/course', null);
  }

  deleteCourse(id: string) {
    return this.apiConfig.sendRequest('DELETE', `/course/${id}`, null);
  }

  addSection(data: any) {
    return this.apiConfig.sendRequest('POST', '/section', data);
  }

  updateSection(id: string, data: any) {
    return this.apiConfig.sendRequest('PUT', '/section/add_lecture', { id, data });
  }
}

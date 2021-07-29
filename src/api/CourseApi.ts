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

  addSection(data: any) {
    return this.apiConfig.sendRequest('POST', '/course/new_section', data);
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
}

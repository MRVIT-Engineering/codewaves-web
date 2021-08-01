import autoBind from 'auto-bind';
import { makeAutoObservable, runInAction } from 'mobx';
import { CourseApi } from '../api/CourseApi';

import { STATUS_CODES } from '../constants/statusCodes/StatusCodes';
import { Sublecture } from '../constants/types/Sublecture';
import { Lecture } from '../models/Lecture';

export class CourseStore {
  course: any = {};
  courses: any[] = [];
  courseApi: CourseApi;
  sublectures: Sublecture[] = [];

  constructor(courseApi: CourseApi) {
    makeAutoObservable(this);
    this.courseApi = courseApi;
    this.getCourses();
    autoBind(this);
  }

  addSublecture(data: Sublecture) {
    this.sublectures = [...this.sublectures, data];
  }

  async addLecture(sectionId: string, lectureData: Lecture) {
    const { status, data } = await this.courseApi.updateSection(sectionId, {
      ...lectureData,
      sublectures: this.sublectures,
    });
    if (status === STATUS_CODES.success) return data;
    else return false;
  }

  async addSection(sectionData: any) {
    const { status, data } = await this.courseApi.addSection(sectionData);
    if (status === 200) this.course = data;
    else alert('Could not add section');
    return { status, data };
  }

  async getCourse(id: string) {
    const { status, data } = await this.courseApi.getCourseById(id);

    if (status === 200)
      runInAction(() => {
        this.course = data;
      });
    return { status, data };
  }

  async getCourses() {
    const { data, status } = await this.courseApi.listCourses();

    runInAction(() => {
      if (status === 200) this.course = data;
      else alert('Something went wrong');
    });
  }

  async updateCourse(id: string, updateData: any) {
    const { status, data } = await this.courseApi.updateCourse(id, updateData);
    if (status === 200) this.course = data;
    return { status, data };
  }

  async deleteCourse(id: string) {
    const { status, data } = await this.courseApi.deleteCourse(id);
    if (status === 200) console.log('Deleting', data);
    return { status, data };
  }
}

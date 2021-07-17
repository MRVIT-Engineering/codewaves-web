import { makeAutoObservable, runInAction } from 'mobx';
import { CourseApi } from '../api/CourseApi';

export class CourseStore {
  course: any = {};
  courses: any[] = [];
  courseApi: CourseApi;

  constructor(courseApi: CourseApi) {
    makeAutoObservable(this);
    this.courseApi = courseApi;
    this.getCourses();
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

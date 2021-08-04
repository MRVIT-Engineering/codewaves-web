import { makeAutoObservable, runInAction } from 'mobx';
import API from '../config/axios';

export class AuthStore {
  isLogInLoading: boolean = false;
  isRegistrationLoading: boolean = false;
  loginError: boolean = false;
  loginErrorMessage: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    this.isLogInLoading = true;
    const response = await API.post('/auth/login', { email, password });

    if (response.data.wrongAuthCredentials) {
      runInAction(() => {
        this.loginError = true;
        this.loginErrorMessage = response.data.message;
      });
    }

    runInAction(() => {
      this.isLogInLoading = false;
    });
    return response;
  }

  setEmptyFieldsError() {
    this.loginError = true;
    this.loginErrorMessage = 'Please fill in all the fields bellow.';
  }

  async register(firstName: string, lastName: string, email: string, password: string) {
    this.isRegistrationLoading = true;
    const response = await API.post('/auth/register', {
      firstName,
      lastName,
      email,
      password,
    });

    runInAction(() => {
      this.isRegistrationLoading = false;
    });
    return response;
  }
}

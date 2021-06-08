import { makeAutoObservable, runInAction } from "mobx";
import API from "../config/axios";

export class AuthStore {
  isLogInLoading: boolean = false;
  isRegistrationLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    this.isLogInLoading = true;
    let response = await API.post("/auth/login", { email, password });
    runInAction(() => {
      this.isLogInLoading = false;
    });
    return response;
  }

  async register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.isRegistrationLoading = true;
    let response = await API.post("/auth/register", {
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

import { makeAutoObservable, runInAction } from "mobx";
import axios from "../config/axios";

export class AuthStore {
  isLogInLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    this.isLogInLoading = true;
    let response = await axios.post("/auth/login", { email, password });
    runInAction(() => {
      this.isLogInLoading = false;
    });
    return response;
  }
}

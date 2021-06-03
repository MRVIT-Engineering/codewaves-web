import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

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

  async loginWithGoogle() {
    console.log("trying to log in with google");
    let response = await axios.get("/auth/login_google");
    console.log(response);
  }
}

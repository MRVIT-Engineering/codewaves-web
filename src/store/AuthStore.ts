import { makeAutoObservable } from "mobx";
import axios from "axios";

export class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string) {
    let response = await axios.post("/users/login", { email, password });
    console.log("Response from the authStore", response);
  }
}

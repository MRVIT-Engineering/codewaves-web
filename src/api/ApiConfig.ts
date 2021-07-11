import axios, { Method, AxiosRequestConfig } from 'axios';

export class ApiConfig {
  api: string;

  constructor(codewavesApi: string) {
    this.api = codewavesApi;
  }

  async sendRequest(method: Method, endpoint: string, data?: any) {
    const url = `${this.api}${endpoint}`;

    const config: AxiosRequestConfig = {
      method,
      url,
      data,
      withCredentials: true,
    };

    const response = await axios(config);
    return response.data;
  }
}

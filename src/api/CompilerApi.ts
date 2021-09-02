import autoBind from 'auto-bind';

import { ApiConfig } from './ApiConfig';

export class CompilerApi {
  apiConfig: ApiConfig;
  socket: any;

  constructor(apiConfig: any) {
    this.apiConfig = apiConfig;
    autoBind(this);
  }

  createCodeSubmission(source: string, compilerId: number) {
    return this.apiConfig.sendRequest('POST', '/sphere_engine/submission', { source, compilerId });
  }

  getSubmissionInfo(id: number) {
    return this.apiConfig.sendRequest('GET', `/sphere_engine/submission/${id}`, null);
  }

  getSubmissionStream(submissionId: number, stream: string) {
    return this.apiConfig.sendRequest(
      'GET',
      `/sphere_engine/submission/stream/${submissionId}/${stream}`,
      null
    );
  }
}

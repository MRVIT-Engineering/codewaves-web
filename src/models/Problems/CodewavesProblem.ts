import { TestCase } from './TestCase';

export interface Problem {
  _id?: string;
  name: string;
  sphereEngineId: number;
  content: string;
  testCases?: TestCase[];
}

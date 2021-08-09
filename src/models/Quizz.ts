import { QuizzOption } from '../constants/types/QuizzOption';
export interface Quizz {
  _id?: string;
  title: string;
  question: string;
  options: QuizzOption[];
}

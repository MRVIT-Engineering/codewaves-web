export enum QuizzOptionType {
  Text = 1,
  Code = 2,
}

export type QuizzOption = {
  text?: string;
  code?: string;
  language?: string;
  correct: boolean;
  type: QuizzOptionType;
};

export interface Quizz {
  title: string;
  questions: string;
  options: QuizzOption[];
}

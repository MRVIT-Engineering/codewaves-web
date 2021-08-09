import { QuizzOptionType } from '../enums/QuizzOptionType';

export type QuizzOption = {
  text?: string;
  code?: string;
  language?: string;
  correct: boolean;
  type: QuizzOptionType;
};

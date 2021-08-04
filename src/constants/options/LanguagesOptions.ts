import { LANGUAGES } from '../languages/Languages';

export const ProgrammingLanguages = [
  ...Object.keys(LANGUAGES).map(l => {
    return {
      value: l,
      label: l,
    };
  }),
];

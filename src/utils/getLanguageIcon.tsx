import { PROGRAMING_LANGUAGES } from '../constants/languages/Languages';

export const getLanguageIcon = (language: string) => {
  for (let i = 0; i < PROGRAMING_LANGUAGES.length; i++)
    if (PROGRAMING_LANGUAGES[i].name.toLowerCase() === language.toLowerCase()) return i;
  return 0;
};

// this should represenst all the supported languages by codewaves.io
type Languages = 'html' | 'javascript' | 'css' | 'scss' | 'sass' | 'xml' | string;

export type CodeAnswer = {
  code: string;
  language: Languages;
};

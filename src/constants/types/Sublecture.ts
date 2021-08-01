interface CodeSublecture {
  language: string;
  code: string;
  type?: number;
}

interface TextSublecture {
  text: string;
  type?: number;
}

export type Sublecture = CodeSublecture | TextSublecture;

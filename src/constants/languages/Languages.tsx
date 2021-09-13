import {
  Cplusplus,
  Python,
  Java,
  Javascript,
  Csharp,
  ObjectiveC,
  Node,
  PHP,
} from '../../components/devicons/Devicon';

export const LANGUAGES = {
  javascript: 'javascript',
  html: 'html',
  css: 'css',
};

export type Compiler = {
  id: number;
  name: string;
};

export type ProgrammingLanguage = {
  name: string;
  compilers: Compiler[];
  extension: string;
  mode: string;
  icon?: any;
};

export const PROGRAMING_LANGUAGES = [
  {
    name: 'Javascript',
    icon: <Javascript />,
    extension: '.js',
    bgColor: '#9c033a',
    mode: 'javascript',
    compilers: [{ name: 'Javascript [Rhino]', id: 31 }],
  },
  {
    name: 'Node.js',
    extension: '.js',
    mode: 'javascript',
    bgColor: '#9c033a',
    icon: <Node />,
    compilers: [{ id: 56, name: 'Node.js' }],
  },
  {
    name: 'Python',
    icon: <Python />,
    extension: '.py',
    bgColor: '#9c033a',
    mode: 'python',
    compilers: [
      { id: 99, name: 'Python (Pypy)' },
      { id: 4, name: 'Python 2.x [Pypy]' },
      { id: 116, name: 'Python 3.x' },
    ],
  },
  {
    name: 'C++',
    bgColor: '#9c033a',
    extension: '.cpp',
    icon: <Cplusplus />,
    mode: 'c++',
    compilers: [
      { id: 41, name: 'C++ 4.3.2' },
      { id: 44, name: 'C++14 [GCC]' },
      { id: 1, name: 'C++ [GCC]' },
    ],
  },
  {
    name: 'Java',
    icon: <Java />,
    bgColor: '#9c033a',
    extension: '.java',
    mode: 'java',
    compilers: [
      { id: 10, name: 'Java' },
      { id: 55, name: 'Java - legacy' },
      { id: 35, name: 'JavaScript [Rhino]' },
      { id: 112, name: 'JavaScript [SpiderMonkey]' },
    ],
  },
  {
    name: 'C#',
    icon: <Csharp />,
    bgColor: '#9c033a',
    extension: '.cs',
    mode: 'c#',
    compilers: [{ id: 27, name: 'C# [Mono]' }],
  },
  {
    name: 'Objective-C',
    bgColor: '#9c033a',
    extension: '.h',
    icon: <ObjectiveC />,
    mode: 'objective-c',
    compilers: [{ id: 43, name: 'Objective-C' }],
  },
  { name: 'PHP', mode: 'php', extension: '.php', icon: <PHP />, compilers: [{ id: 29, name: 'PHP' }] },
];

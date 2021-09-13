import { Tab } from '../constants/types/Tab';
import { Compiler } from '../constants/languages/Languages';

export interface Playground {
  title: string;
  description?: string;
  tabs: Tab[];
  compilers: Compiler[];
  activeCompilerIndex?: number;
  createdAt?: Date;
  mode: string;
  _id?: string;
}

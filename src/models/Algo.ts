import { LanguageAlgorithm } from '../constants/types/LanguageAlgo';
import { AlgoComplexities } from '../constants/enums/AlgoComplexities';
import { AlgorithmTypes } from '../constants/enums/AlgoTypes';

export interface Algo {
  _id?: string;
  title: string;
  complexity: AlgoComplexities;
  type: AlgorithmTypes;
  algorithm: LanguageAlgorithm[];
}

export type Difficulty =
  | 'easy'
  | 'medium'
  | 'hard'
  | 'neetcode'
  | 'article-practice';

export interface Problem {
  title: string;
  slug: string;
  difficulty: Difficulty;
  topic: string;
  lcNumber: number | null;
  pattern: string;
  timeComplexity: string;
  spaceComplexity: string;
  hasContent: boolean;
}

export interface Topic {
  name: string;
  slug: string;
  problems: Problem[];
}

export interface Section {
  name: string;
  slug: Difficulty;
  topics: Topic[];
}

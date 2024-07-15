export interface Question {
  id: number;
  problemNumber: number;
  title: string;
  content: string;
  code: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  content: string;
  author: string;
}

export type questionDataType = {
  id: number;
  done: boolean;
  num: number;
  title: string;
  desc: string;
  language: string;
  writer: string;
  time: string;
};

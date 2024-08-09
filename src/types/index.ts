export interface Question {
  id: string;
  p_num: number;
  title: string;
  content: string;
  codeLanguage: string;
  codespace: string | null;
  author: string;
  writer: string;
  solved: boolean;
  createdAt: Date;
}
export interface QuestionListType{
  id: string;
  p_num: number;
  title: string;
  codeLanguage: string;
  solved: boolean;
  createdAt: Date;
  writer: string;
}
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  pageSize: number;
}
export interface Comment {
  id: string;
  writer: string;
  questionId: string;
  author: string;
  content: string;
  createdAt: Date;
}

export interface problemType {
  p_num: number;
  title: string;
  content: string;
  codeLanguage: string;
  codespace: string | null;
}

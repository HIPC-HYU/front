import React from 'react';
import QuestionForm from './QuestionForm';
// import QuestionList from './QuestionList';
// import QuestionDetail from './QuestionDetail';

const QuestionBoard: React.FC = () => {
  return (
    <div>
      <h1>백준 질문 게시판</h1>
      <QuestionForm />
      {/* <QuestionList />
      <QuestionDetail /> */}
    </div>
  );
};

export default QuestionBoard;
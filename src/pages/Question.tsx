import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import QuestionForm from '../components/board/QuestionForm';
// import QuestionList from './QuestionList';
// import QuestionDetail from './QuestionDetail';

const Question: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          백준 질문 게시판
        </Typography>
        <QuestionForm />
        {/* <Box my={4}>
          <QuestionList />
        </Box>
        <QuestionDetail /> */}
      </Box>
    </Container>
  );
};

export default Question;
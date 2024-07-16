import React, { useState } from 'react';
import { Box, TextField, Button, Paper } from '@mui/material';
import { Question } from '../../types';
import CodeSpace from './CodeSpace';

const QuestionForm: React.FC = () => {
  const [question, setQuestion] = useState<Partial<Question>>({
    code: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 질문 제출 로직
    console.log(question);
  };

  return (
    <Paper elevation={3}>
      <Box component="form" onSubmit={handleSubmit} p={3}>
        <TextField
          fullWidth
          type="number"
          label="문제 번호"
          margin="normal"
          onChange={(e) => setQuestion({...question, problemNumber: Number(e.target.value)})}
        />
        <TextField
          fullWidth
          label="질문 제목"
          margin="normal"
          onChange={(e) => setQuestion({...question, title: e.target.value})}
        />
        <TextField
          fullWidth
          label="질문 본문"
          multiline
          rows={4}
          margin="normal"
          onChange={(e) => setQuestion({...question, content: e.target.value})}
        />
        <CodeSpace code={question.code || ''} />
        <TextField
          fullWidth
          label="코드 입력"
          multiline
          rows={6}
          margin="normal"
          onChange={(e) => setQuestion({...question, code: e.target.value})}
        />
        <Button variant="contained" color="primary" type="submit">
          질문 등록
        </Button>
      </Box>
    </Paper>
  );
};

export default QuestionForm;
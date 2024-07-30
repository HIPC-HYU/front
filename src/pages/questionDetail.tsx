import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Badgesm } from '../components/ui/badge';

interface Answer {
  id: number;
  writer: string;
  content: string;
  time: string;
}

interface QuestionDetailType {
  id: number;
  done: boolean;
  num: number;
  title: string;
  desc: string;
  language: string;
  writer: string;
  time: string;
  answers: Answer[];
}

// 임시 데이터
const questionDetail: QuestionDetailType = {
  id: 1,
  done: false,
  num: 1234,
  title: "모르겠어요ㅠㅠ",
  desc: "이 문제에서 재귀 함수를 어떻게 사용해야 할지 모르겠습니다. 누군가 도와주실 수 있나요?",
  language: "C++17",
  writer: "ys_10",
  time: "2023년 7월 20일 14:30",
  answers: [
    {
      id: 1,
      writer: "helper1",
      content: "재귀 함수는 자기 자신을 호출하는 함수입니다. 이 문제에서는...",
      time: "2023년 7월 20일 15:00"
    },
    {
      id: 2,
      writer: "coder2",
      content: "제가 비슷한 문제를 풀어본 적이 있는데, 이렇게 접근하면 됩니다...",
      time: "2023년 7월 20일 16:45"
    }
  ]
};

const QuestionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [newAnswer, setNewAnswer] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 여기에 새 답변을 제출하는 로직을 추가합니다.
    console.log("New answer submitted:", newAnswer);
    setNewAnswer('');
  };

  return (
    <div className="pt-40 min-h-screen p-4 bg-gray-50">
      <div className="max-w-[800px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md rounded-lg p-6 mb-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">{questionDetail.title}</h1>
            {questionDetail.done 
              ? <Badgesm color="#00c471" text="해결" /> 
              : <Badgesm color="#ced4da" text="미해결" />
            }
          </div>
          <p className="text-gray-600 mb-4">{questionDetail.desc}</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>작성자: {questionDetail.writer}</span>
            <span>{questionDetail.time}</span>
          </div>
          <div className="mt-2">
            <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded text-sm">{questionDetail.language}</span>
          </div>
        </motion.div>

        <h2 className="text-xl font-semibold mb-4">답변</h2>
        {questionDetail.answers.map((answer, index) => (
          <motion.div 
            key={answer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-sm rounded-lg p-4 mb-4"
          >
            <div className="flex items-center mb-2">
              <Avatar className="mr-2">{answer.writer[0].toUpperCase()}</Avatar>
              <span className="font-semibold">{answer.writer}</span>
            </div>
            <p className="text-gray-700 mb-2">{answer.content}</p>
            <span className="text-sm text-gray-500">{answer.time}</span>
          </motion.div>
        ))}

        <form onSubmit={handleSubmit} className="mt-6">
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            label="답변 작성"
            value={newAnswer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewAnswer(e.target.value)}
            className="mb-4"
          />
          <Button type="submit" variant="contained" color="primary">
            답변 제출
          </Button>
        </form>
      </div>
    </div>
  );
}

export default QuestionDetail;
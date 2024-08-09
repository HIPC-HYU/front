import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FormControl, Input, InputAdornment, InputLabel, Button, Pagination as MUIPagination, Chip } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import { getQuestionList } from '../../services/questionService';
import { QuestionListType, PaginationInfo } from '../../types';
import { Badgesm } from '../badge';

const QuestionList: React.FC = () => {

  const [questions, setQuestions] = useState<QuestionListType[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo | null>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const page = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const { questions, paginationInfo } = await getQuestionList(page);
        setQuestions(questions as QuestionListType[]);
        setPaginationInfo(paginationInfo);
        console.log(questions);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    navigate(`/board?page=${value}`);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="pt-[64px] min-h-screen p-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 mb-6">
          <h2 className="text-4xl font-pretendard font-semibold mb-4 md:mb-0">질문 게시판</h2>
          <div className="w-full md:w-auto flex items-center space-x-4">
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="search-input">질문 내에서 검색</InputLabel>
              <Input
                id="search-input"
                startAdornment={<InputAdornment position="start"><CiSearch className="text-gray-400" /></InputAdornment>}
                endAdornment={<Button variant="contained" color="primary">검색</Button>}
              />
            </FormControl>
            <Link to="/ask" className="bg-blue-500 text-white px-4 py-2 rounded whitespace-nowrap">질문하기</Link>
          </div>
        </div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {questions.map((question, index) => (
            <motion.li
              key={question.id}
              className="w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 mb-1.5 border font-pretendard flex flex-col md:flex-row items-center border-gray-200 p-4 rounded-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex items-center mb-2 md:mb-0">
                {question.solved ? <Badgesm color="#00c471" text="해결" />
                  : <Badgesm color="#ced4da" text="미해결" />}
                <Link to={`https://www.acmicpc.net/problem/${question.p_num}`} className="text-gray-500 ml-4 w-16">
                  {question.p_num}
                </Link>
              </div>
              <Link to={`/board/${question.id}`} className='md:ml-4 font-semibold flex-1 hover:text-blue-600 transition-colors duration-300'>
                {question.title}
              </Link>
              <div className='flex flex-wrap text-sm items-center gap-2 md:gap-5 mt-2 md:mt-0'>
                <p className='bg-gray-200 px-2 py-1 rounded-lg'>{question.codeLanguage}</p>
                <Link to={`https://solved.ac/profile/${question.writer}`} className='text-blue-500 hover:underline'>{question.writer}</Link>
                <p className='text-gray-500'>{new Date(question.createdAt).toLocaleDateString()}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
        {paginationInfo && (
          <div className="flex justify-center mt-6">
            <MUIPagination
              count={paginationInfo.totalPages}
              page={paginationInfo.currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionList;
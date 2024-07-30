
import React, { useState } from "react";
import { FormControl, Input, InputAdornment, InputLabel, Button, Pagination } from "@mui/material";
import QuestionList from "../../components/board/Question";
import { questionDataType } from '../../types/index';
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";

const questionData: questionDataType[] = [
    { id: 0, done: false, num: 1234, title: "모르겠어요ㅠㅠ", desc: "이게이게 안돼요", language: "C++17", writer: "ys_10", time: "몇월 몇시 뭐시기" },
    { id: 1, done: true, num: 1234, title: "모르겠어요ㅠㅠ", desc: "이게이게 안돼요", language: "C++17", writer: "ys_10", time: "몇월 몇시 뭐시기" },
    { id: 2, done: false, num: 1234, title: "모르겠어요ㅠㅠ", desc: "이게이게 안돼요", language: "C++17", writer: "ys_10", time: "몇월 몇시 뭐시기" },
    { id: 3, done: true, num: 1234, title: "모르겠어요ㅠㅠ", desc: "이게이게 안돼요", language: "C++17", writer: "ys_10", time: "몇월 몇시 뭐시기" }, 
    { id: 4, done: true, num: 1234, title: "모르겠어요ㅠㅠ", desc: "이게이게 안돼요", language: "C++17", writer: "ys_10", time: "몇월 몇시 뭐시기" }, 
    { id: 5, done: true, num: 1234, title: "모르겠어요ㅠㅠ", desc: "이게이게 안돼요", language: "C++17", writer: "ys_10", time: "몇월 몇시 뭐시기" }, 
    { id: 6, done: true, num: 1234, title: "모르겠어요ㅠㅠ", desc: "이게이게 안돼요", language: "C++17", writer: "ys_10", time: "몇월 몇시 뭐시기" }, 
    { id: 7, done: true, num: 1234, title: "모르겠어요ㅠㅠ", desc: "이게이게 안돼요", language: "C++17", writer: "ys_10", time: "몇월 몇시 뭐시기" }, 
    { id: 8, done: true, num: 1234, title: "모르겠어요ㅠㅠ", desc: "이게이게 안돼요", language: "C++17", writer: "ys_10", time: "몇월 몇시 뭐시기" }, 
    { id: 9, done: true, num: 1234, title: "모르겠어요ㅠㅠ", desc: "이게이게 안돼요", language: "C++17", writer: "ys_10", time: "몇월 몇시 뭐시기" }, 
    { id: 10, done: true, num: 1234, title: "모르겠어요ㅠㅠ", desc: "이게이게 안돼요", language: "C++17", writer: "ys_10", time: "몇월 몇시 뭐시기" }, 
    { id: 11, done: true, num: 1234, title: "모르겠어요ㅠㅠ", desc: "이게이게 안돼요", language: "C++17", writer: "ys_10", time: "몇월 몇시 뭐시기" },
]
export default function BoardList() {
    const [page, setPage] = useState(1);
    const questionsPerPage = 10;

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const indexOfLastQuestion = page * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questionData.slice(indexOfFirstQuestion, indexOfLastQuestion);

    return (
        <div className="pt-[64px] min-h-screen p-4 bg-gray-50">
            <div className="max-w-[1000px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mt-10 mb-6">
                    <h2 className="text-4xl font-pretendard font-semibold mb-4 md:mb-0">질문 게시판</h2>
                    <div className="w-full md:w-auto">
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="search-input">질문 내에서 검색</InputLabel>
                            <Input
                                id="search-input"
                                startAdornment={<InputAdornment position="start"><CiSearch className="text-gray-400" /></InputAdornment>}
                                endAdornment={<Button variant="contained" color="primary">검색</Button>}
                            />
                        </FormControl>
                    </div>
                </div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {currentQuestions.map((v, i) => (
                        <motion.div 
                            key={v.id}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <QuestionList props={v} />
                        </motion.div>
                    ))}
                </motion.div>
                <div className="flex justify-center mt-6">
                    <Pagination 
                        count={Math.ceil(questionData.length / questionsPerPage)} 
                        page={page} 
                        onChange={handleChangePage}
                        color="primary"
                    />
                </div>
            </div>
        </div>
    );
}
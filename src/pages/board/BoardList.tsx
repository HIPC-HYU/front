import {FormControl, Input, InputAdornment, InputLabel } from "@mui/material"
import QuestionList from "../../components/board/Question"
import { questionDataType } from '../../types/index'
import { CiSearch } from "react-icons/ci";

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


    return (<div className="pt-[64px] min-h-screen p-4">
        <div className="max-w-[1000px] mx-auto">
            <div className="flex justify-between mt-10 mb-2">
                <h2 className="text-4xl font-pretendard font-semibold">질문 게시판</h2>
                <div className="flex items-center">
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">질문내에서 검색</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            startAdornment={<InputAdornment position="start"><CiSearch/></InputAdornment>}
                        />
                    </FormControl>
                </div>
            </div>{questionData.map((v, i) => (
                <div key={i}>
                    <QuestionList props={v}></QuestionList>
                </div>))}
            <div className=""></div>
        </div>

    </div>)
}
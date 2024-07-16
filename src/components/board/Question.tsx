// import { questionDataType } from '../../types/index'
import { Link } from 'react-router-dom';
import {Badgesm} from '../ui/badge'
type questionDataType = {
    id: number,
    done: boolean,
    num: number;
    title: string;
    desc: string;
    language: string;
    writer: string;
    time: string;
};

export default function QuestionList({ props }: { props: questionDataType }) {
    return (
        <div className="w-full h-12 border font-pretendard flex items-center border-gray-300 px-10 rounded-lg">
            {props.done ? <Badgesm color="#00c471" text="해결" /> : <Badgesm color="#ced4da" text="미해결" />}
            <p className='text-gray-500 ml-4'>{props.num}</p>
            <Link to={`/board:${props.id}`} className='ml-4 font-semibold flex-1'>
                {props.title}
            </Link>
            <div className='flex text-sm items-center gap-5'>
                <p className='bg-gray-200 px-2 py-1 rounded-lg'>{props.language}</p>
                <Link to='#' className='text-blue-500'>{props.writer}</Link>
                <p className='mr-4'>{props.time}</p>
            </div>

        </div>)
}
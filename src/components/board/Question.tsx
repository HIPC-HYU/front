import { questionDataType } from '../../types/index'
import { Link } from 'react-router-dom';
import {Badgesm} from '../ui/badge'
import { motion } from "framer-motion";

export default function QuestionList({ props }: { props: questionDataType }) {
    return (
        <motion.div 
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 mb-4 border font-pretendard flex flex-col md:flex-row items-center border-gray-200 p-4 rounded-lg"
        >
            <div className="flex items-center mb-2 md:mb-0">
                {props.done 
                    ? <Badgesm color="#00c471" text="해결" /> 
                    : <Badgesm color="#ced4da" text="미해결" />
                }
                <p className='text-gray-500 ml-4 w-16'>{props.num}</p>
            </div>
            <Link to={`/board/question/:${props.id}`} className='md:ml-4 font-semibold flex-1 hover:text-blue-600 transition-colors duration-300'>
                {props.title}
            </Link>
            <div className='flex flex-wrap text-sm items-center gap-2 md:gap-5 mt-2 md:mt-0'>
                <p className='bg-gray-200 px-2 py-1 rounded-lg'>{props.language}</p>
                <Link to='#' className='text-blue-500 hover:underline'>{props.writer}</Link>
                <p className='text-gray-500'>{props.time}</p>
            </div>
        </motion.div>
    );
}
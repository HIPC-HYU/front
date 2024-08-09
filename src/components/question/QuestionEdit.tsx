import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Question } from '../../types';
import { getQuestionById, updateQuestion } from '../../services/questionService';
import { useAuth } from '../../services/authProvider';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const QuestionEdit: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [question, setQuestion] = useState<Question | null>(null);
    const [input, setInput] = useState({
        p_num: 0,
        title: '',
        content: '',
        codeLanguage: '',
        codespace: ''
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuestion = async () => {
            if (id) {
                try {
                    const fetchedQuestion = await getQuestionById(id);
                    setQuestion(fetchedQuestion);
                    if (fetchedQuestion) {
                        setInput({
                            p_num: fetchedQuestion.p_num,
                            title: fetchedQuestion.title,
                            content: fetchedQuestion.content,
                            codeLanguage: fetchedQuestion.codeLanguage,
                            codespace: fetchedQuestion.codespace || ''
                        })
                    };
                } catch (err) {
                    console.error('Failed to fetch question:', err);
                    setError('질문을 불러오는 데 실패했습니다.');
                }
            }
        };
        fetchQuestion();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !question) return;

        if (user.uid !== question.author) {
            setError('자신의 글만 수정할 수 있습니다.');
            return;
        }

        try {
            await updateQuestion(id!, input);
            navigate(`/board/${id}`);
        } catch (err) {
            console.error('Failed to update question:', err);
            setError('질문 수정에 실패했습니다.');
        }
    };

    const languages = [
        "C++17", "Python 3", "PyPy3",
        "C99", "Java 11", "Ruby", "Kotlin (JVM)", "Swift", "Text", "C#",
        "node.js", "Go", "D", "Rust 2018", "C++17 (Clang)"
    ];

    if (error) {
        return <div className="text-red-500 text-center text-xl mt-10">{error}</div>;
    }

    if (!question) {
        return <div className="text-center text-xl mt-10">질문을 불러오는 중...</div>;
    }

    return (
        <div className="container mx-auto px-4 mt-20">
            <h1 className="text-3xl font-bold mb-6">질문 수정</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="p_num" className="block text-sm font-medium text-gray-700">문제 번호</label>
                    <input
                        type="number"
                        id="p_num"
                        name="p_num"
                        value={input.p_num}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">제목</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={input.title}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">내용</label>
                    <textarea
                        id="content"
                        name="content"
                        value={input.content}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        rows={5}
                        required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="codeLanguage" className="block text-sm font-medium text-gray-700">프로그래밍 언어</label>
                    <select
                        id="codeLanguage"
                        name="codeLanguage"
                        value={input.codeLanguage}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    >
                        <option value="">언어를 선택하세요</option>
                        {languages.map((lang, index) => (
                            <option key={index} value={lang}>{lang}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="codespace" className="block text-sm font-medium text-gray-700">코드</label>
                    <textarea
                        id="codespace"
                        name="codespace"
                        value={input.codespace}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 font-mono"
                        rows={10}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">코드 미리보기</h3>
                    <SyntaxHighlighter
                        language={input.codeLanguage.toLowerCase().startsWith("c") ? "cpp" : input.codeLanguage.toLowerCase().startsWith("node") ? "javascript" : "python"}
                        style={docco}
                    >
                        {input.codespace}
                    </SyntaxHighlighter>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                    수정 완료
                </button>
            </form>
        </div>
    );
};

export default QuestionEdit;
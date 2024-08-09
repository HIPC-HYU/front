import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addQuestion } from '../../services/questionService.ts';
import { getUserBojId } from '../../services/userService.ts';
import { useAuth } from '../../services/authProvider.tsx';
import { problemType } from '../../types'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
const QuestionForm: React.FC = () => {
  const [input, setInput] = useState<problemType>({
    p_num: 1000,
    title: '',
    content: '',
    codeLanguage: '',
    codespace: null
  });
  const [userBojId, setUserBojId] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {

    const fetchUserBojId = async () => {
      if (user) {
        try {
          const bojId = await getUserBojId(user.uid);
          if (bojId)
            setUserBojId(bojId);
        } catch (err) {
          console.error('Failed to fetch user BOJ ID:', err);
        }
      }
    };
    fetchUserBojId();
  },

    []
  )
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('로그인이 필요합니다.');
      return;
    }
    try {
      if (!user.uid) {
        setError('사용자 정보를 찾을 수 없습니다.');
        return;
      }
      await addQuestion({ ...input, writer: userBojId, author: user.uid });
      navigate(`/board`);

    } catch (err) {
      setError('질문 등록에 실패했습니다.');
      console.error('Error adding question:', err);
    }
  };

  const languages = [
    "C++17", "Python 3", "PyPy3",
    "C99", "Java 11", "Ruby", "Kotlin (JVM)", "Swift", "Text", "C#",
    "node.js", "Go", "D", "Rust 2018", "C++17 (Clang)"
  ];

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-3xl font-bold mb-6">질문하기</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
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
          <label htmlFor="codespace" className="block text-sm font-medium text-gray-700">코드 (선택사항)</label>
          <textarea
            id="codespace"
            name="codespace"
            value={input.codespace || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 font-mono"
            rows={10}
          ></textarea>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">코드 미리보기</h3>
          <SyntaxHighlighter language={input.codeLanguage.toLowerCase().startsWith("c") ? "cpp" : input.codeLanguage.toLowerCase().startsWith("node") ? "javascript" : "python"} style={docco}>
            {input.codespace}
          </SyntaxHighlighter>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
          질문 등록
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
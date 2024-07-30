import { FaHistory, FaDatabase, FaMoneyBill, FaPiggyBank } from 'react-icons/fa';

export default function About() {
    return (
        <div className="flex-1 pt-20 px-4 md:px-8 w-full mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
            <div className='max-w-5xl mx-auto w-full'>
                <h1 className="text-4xl font-bold text-center mb-10 text-indigo-800">백준 스터디 소개</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    <Section icon={<FaHistory className="text-indigo-600" />} title="📜 역사">
                        <ul className="space-y-2 text-gray-700">
                            <li>• 2022년 1학기 5명으로 시작, 2023년 1학기 25명으로 성장</li>
                            <li>• 알고리즘 강의 학습 및 취업 코딩테스트 대비</li>
                            <li>• 23-여름학기: 45일간 22명이 1800개 문제 해결</li>
                            <li>• 대부분 회원 브론즈에서 실버로, 2명은 골드에서 플래티넘으로 성장</li>
                            <li>• 2023-2학기 정식 동아리 인준 예정</li>
                        
                        </ul>
                    </Section>

                    <Section icon={<FaDatabase className="text-indigo-600" />} title="✏️ 데이터베이스">
                        <ul className="space-y-2 text-gray-700">
                            <li>• 매일 오전 자동 업데이트</li>
                            <li>• 저장 정보: <span className="bg-indigo-100 px-2 py-1 rounded">이름</span> <span className="bg-indigo-100 px-2 py-1 rounded">백준 ID</span> <span className="bg-indigo-100 px-2 py-1 rounded">문제 번호</span> <span className="bg-indigo-100 px-2 py-1 rounded">해결 시각</span></li>
                            <li>• MEMBERS DB에서 벌금 현황 확인 가능</li>
                        </ul>
                    </Section>

                    <Section icon={<FaMoneyBill className="text-indigo-600" />} title="💸 벌금 제도">
                        <ul className="space-y-2 text-gray-700">
                            <li>• 1일 1제 미해결 시 <strong className="text-red-500 text-lg">1000원</strong> 벌금</li>
                            <li>• 매일 한 문제씩 풀지 않으면 벌금 부과</li>
                            <li>• 마감: 익일 06:00 (예: 24일 문제 → 25일 06:00까지)</li>
                        </ul>
                    </Section>

                    <Section icon={<FaPiggyBank className="text-indigo-600" />} title="🤑 벌금 사용처">
                        <ul className="space-y-2 text-gray-700">
                            <li>• 스터디 종료 후 회식비로 사용</li>
                            <li>• 다른 용도 제안 시 톡방에서 투표 진행</li>
                            <li>• 과반수 동의 시 새로운 방안으로 변경 가능</li>
                        </ul>
                    </Section>
                </div>
            </div></div>
    )
}

function Section({ icon, title, children }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-indigo-100">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-indigo-800">
                <span className="mr-3 text-3xl">{icon}</span>
                {title}
            </h2>
            {children}
        </div>
    )
}
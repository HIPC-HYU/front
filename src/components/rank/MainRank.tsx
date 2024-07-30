import { useState, useEffect } from "react";
import BarRank from "./BarRank";
import { motion } from "framer-motion";

interface dataType { boj_id: string, name: string, cnt: number };

const RankData: dataType[] = [
    { boj_id: 'user3', name: '사용자3', cnt: 15 },
    { boj_id: 'user7', name: '사용자7', cnt: 10 },
    { boj_id: 'ys_10', name: '신윤수', cnt: 8 },
    { boj_id: 'user9', name: '사용자9', cnt: 5 },
    { boj_id: 'user5', name: '사용자5', cnt: 4 },
    { boj_id: 'user6', name: '사용자6', cnt: 3 },
    { boj_id: 'user2', name: '사용자2', cnt: 2 },
    { boj_id: 'user8', name: '사용자8', cnt: 2 },
    { boj_id: 'user4', name: '사용자4', cnt: 2 },
];

const RankData2: dataType[] = [
    { boj_id: 'user3', name: '사용자3', cnt: 1 },
    { boj_id: 'user7', name: '사용자7', cnt: 2 },
    { boj_id: 'ys_10', name: '신윤수', cnt: 8 },
    { boj_id: 'user9', name: '사용자9', cnt: 5 },
    { boj_id: 'user5', name: '사용자5', cnt: 4 },
    { boj_id: 'user6', name: '사용자6', cnt: 3 },
    { boj_id: 'user2', name: '사용자2', cnt: 4 },
    { boj_id: 'user8', name: '사용자8', cnt: 2 },
    { boj_id: 'user4', name: '사용자4', cnt: 2 },
];

const RankData3: dataType[] = [
    { boj_id: 'user3', name: '사용자3', cnt: 9 },
    { boj_id: 'user7', name: '사용자7', cnt: 10 },
    { boj_id: 'ys_10', name: '신윤수', cnt: 8 },
    { boj_id: 'user9', name: '사용자9', cnt: 5 },
    { boj_id: 'user5', name: '사용자5', cnt: 4 },
    { boj_id: 'user6', name: '사용자6', cnt: 3 },
    { boj_id: 'user2', name: '사용자2', cnt: 2 },
    { boj_id: 'user8', name: '사용자8', cnt: 2 },
    { boj_id: 'user4', name: '사용자4', cnt: 2 },
];
export default function MainRank() {
    const [rankSelect, setRankSelect] = useState([true, false, false]);
    const [sortedData, setSortedData] = useState<dataType[]>([]);
    useEffect(() => {
        let selectedData;
        if (rankSelect[0]) selectedData = RankData;
        else if (rankSelect[1]) selectedData = RankData2;
        else selectedData = RankData3;

        setSortedData([...selectedData].sort((a, b) => b.cnt - a.cnt));
    }, [rankSelect]);

    return (
        <div className="max-w-7xl w-full mx-auto font-pretendard lg:px-4">
            <div className="flex items-center">
                <p className="text-2xl lg:text-4xl pl-4 font-semibold">Ranking</p>
                <img src="/assets/images/solvedlogo.svg" width={60} className="ml-4 mt-2" alt="Solved Logo" />
            </div>

            <div className="flex gap-4 justify-center text-sm lg:text-base my-4">
                {['일별 랭킹', '분기별 랭킹', '누적 랭킹'].map((text, index) => (
                    <div
                        key={text}
                        className={`cursor-pointer transition-colors duration-300 ${rankSelect[index] ? 'text-gray-400' : 'text-black hover:text-gray-600'}`}
                        onClick={() => setRankSelect(rankSelect.map((_, i) => i === index))}
                    >
                        {text}
                    </div>
                ))}
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <BarRank RankData={sortedData} rankSelect={rankSelect} />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:max-w-[33%] w-[90%] mx-auto mt-10 h-fit bg-white shadow-lg rounded-lg overflow-hidden"
                >
                    <table className="w-full">
                        <thead>
                            <tr className="bg-blue-600 text-white">
                                <th className="py-3 px-4">No</th>
                                <th className="py-3 px-4">id</th>
                                <th className="py-3 px-4">이름</th>
                                <th className="py-3 px-4">푼 문제수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((v, i) => (
                                <tr
                                    key={`rank-${i}`}
                                    className={`text-center ${i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
                                >
                                    <td className="py-3 px-4 text-base lg:text-xl font-semibold">
                                        {i < 3 ? (
                                            <span className={`text-2xl ${i === 0 ? "text-yellow-500" : i === 1 ? "text-gray-400" : "text-yellow-700"}`}>
                                                #{i + 1}
                                            </span>
                                        ) : (
                                            `#${i + 1}`
                                        )}
                                    </td>
                                    <td className="py-3 px-4 flex items-center justify-center gap-1">
                                        {v.boj_id}
                                        <img src="/assets/images/gold2.svg" width={16} alt="Gold 2" />
                                    </td>
                                    <td className="py-3 px-4">{v.name}</td>
                                    <td className="py-3 px-4 font-semibold">{v.cnt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </div>
    )
}
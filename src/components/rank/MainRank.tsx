import { useState, useEffect } from "react";
import BarRank from "./BarRank";
import axios from "axios";

interface dataType { boj_id: string, name: string, cnt: number };

export default function MainRank() {
    const [rankSelect, setRankSelect] = useState([true, false, false]);
    const [rankData,setRankData] = useState<dataType[]|null>(null)
    useEffect(() => {

    }, [rankSelect]);
    async function getRank() {
        try {
            const res = await axios.get('https://localhost:3001/api/rank');
        } catch (error) {
            console.log(error);
        }

    } 
    return (
        <div className="max-w-6xl w-full mx-auto font-pretendard lg:px-4 mb-20">
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
                <div
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
                </div>
            </div>
        </div>
    )
}
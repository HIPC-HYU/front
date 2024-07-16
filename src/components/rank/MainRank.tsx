import { useState } from "react";
import BarRank from "../BarRank";
interface dataType { boj_id: string, name: string, cnt: number };
const RankData: dataType[] = [{ boj_id: 'user3', name: '사용자3', cnt: 15 },
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
    return (
        <div className="max-w-[1280px] mx-auto font-pretendard px-4">
            <div className="flex items-center">
                <p className="text-2xl md:text-4xl font-semibold">Ranking</p><img src="/assets/images/solvedlogo.svg" width={60} className="ml-4 mt-2" />
            </div>

            <div className="flex gap-4 justify-center">
                <div className="cursor-pointer" style={{ color: `${rankSelect[0] ? "rgb(156 163 175" : "black"}` }} onClick={() => setRankSelect([true, false, false])}>일별 랭킹</div>
                <div className="cursor-pointer" style={{ color: `${rankSelect[1] ? "rgb(156 163 175" : "black"}` }} onClick={() => setRankSelect([false, true, false])}>분기별 랭킹</div>
                <div className="cursor-pointer" style={{ color: `${rankSelect[2] ? "rgb(156 163 175" : "black"}` }} onClick={() => setRankSelect([false, false, true])}>누적 랭킹</div>
            </div>
            <div className="flex justify-between">
                <BarRank RankData={RankData} />
                <table className="max-w-[33%] w-full h-[600px] ml-4">
                    <thead>
                        <tr className="bg-gray-300 h-12">
                            <th className="">No</th>
                            <th>id</th>
                            <th>이름</th>
                            <th>푼 문제수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RankData.map((v, i) => (
                            <tr key={`rank-${i}`} className="text-center" style={{ backgroundColor: `${i % 2 === 1 ? 'rgb(243 244 246)' : 'white'}` }}>
                                <td className="text-xl">#{i+1}</td>
                                <td className="flex items-center justify-center h-full gap-1">{v.boj_id}<img src="/assets/images/gold2.svg" width={16}/></td>
                                <td>{v.name}</td>
                                <td>{v.cnt}</td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
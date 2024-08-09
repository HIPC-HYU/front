import { useEffect, useState } from "react";
import { FaArrowDown, FaTrophy } from "react-icons/fa";
import { fetchUserStatesSortedByProblemsSolved, fetchUserStatesSortedByRating } from "../../services/problem";

interface UserState {
    boj_id: string;
    full_solved: number;
    rating: number;
    tier: string;
}

export default function RankMain() {
    const [ratingRank, setRatingRank] = useState<UserState[] | null>(null)
    const [problemRank, setProblemRank] = useState<UserState[] | null>(null)

    useEffect(() => {
        async function fetchRank() {
            try {
                const ratingSort = await fetchUserStatesSortedByRating();
                const problemSort = await fetchUserStatesSortedByProblemsSolved();
                setProblemRank(problemSort);
                setRatingRank(ratingSort);
            } catch (error) {
                console.log(error);
            }
        }
        fetchRank()
    }, [])

    const RankingTable = ({ title, data, valueKey }: { title: string, data: UserState[] | null, valueKey: 'rating' | 'full_solved' }) => (
        <div  className="bg-white rounded-lg shadow-md p-4 mb-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <table className="w-full">
                <thead>
                    <tr className="border-b-2 border-gray-200">
                        <th className="py-2">Rank</th>
                        <th className="py-2">BOJ ID</th>
                        <th className="py-2">Tier</th>
                        <th className="py-2">{valueKey === 'rating' ? 'Rating' : 'Solved'}</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.slice(0, 10).map((user, index) => (
                        <tr key={user.boj_id} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="py-2 text-center">
                                {index < 3 ? (
                                    <FaTrophy className={`inline ${index === 0 ? 'text-yellow-400' : index === 1 ? 'text-gray-400' : 'text-yellow-600'}`} />
                                ) : (
                                    index + 1
                                )}
                            </td>
                            <td className="py-2 text-center">{user.boj_id}</td>
                            <td className="py-2 text-center">{user.tier}</td>
                            <td className="py-2 text-center">{user[valueKey]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

    return (
        <div id="1" className="min-h-screen w-full bg-gradient-to-b from-[#0B182A] to-blue-200 py-12">
            <div className="max-w-6xl w-full mx-auto px-4">
                <h1 className="text-4xl mt-20 mb-12 text-white font-pretendard font-bold text-center">Ranking</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    <RankingTable title="Rating Ranking" data={ratingRank} valueKey="rating" />
                    <RankingTable title="Problem Solving Ranking" data={problemRank} valueKey="full_solved" />
                </div>
            </div>
        </div>
    )
}
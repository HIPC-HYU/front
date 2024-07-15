import './Rank.css'


export default function Rank() {

    const RankData = [
        {
            boj_id: 'ys_10',
            name: '신윤수',
            cnt: 12,
        }, {
            boj_id: 'ys_10', name: '신윤수',

            cnt: 12,
        }, {
            boj_id: 'ys_10', name: '신윤수',

            cnt: 12,
        }, {
            boj_id: 'ys_10', name: '신윤수',

            cnt: 12,
        }, {
            boj_id: 'ys_10', name: '신윤수',

            cnt: 12,
        }, {
            boj_id: 'ys_10', name: '신윤수',

            cnt: 12,
        }, {
            boj_id: 'ys_10', name: '신윤수',

            cnt: 12,
        }, {
            boj_id: 'ys_10', name: '신윤수',

            cnt: 12,
        }, {
            boj_id: 'ys_10', name: '신윤수',

            cnt: 12,
        },
    ]

    return (
        <table className="max-w-[1280px] w-full mx-auto mt-5">
            <thead className='bg-gray-200 h-12 md:text-base text-sm'>
                <tr><th>No</th><th>백준 ID</th><th>이름</th><th>티어</th><th>레이팅</th><th>푼 문제수</th></tr></thead>
            <tbody>
                {RankData.map((v, i) => (
                    <tr key={`rank-${i}`} className="h-16 text-center md:text-base text-sm" style={{ backgroundColor: `${i % 2 === 1 ? 'rgb(243 244 246)' : 'white'}` }}>
                        <td>#{i + 1}</td>
                        <td>{v.boj_id}</td>
                        <td>{v.name}</td>
                        <td className='flex items-center h-16 justify-center'>
                            <img width={28} src='/assets/images/gold2.svg' />
                        </td>
                        <td>대충 레이팅</td>
                        <td>대충 푼 문제</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
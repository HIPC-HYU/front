import { easeOut, motion } from 'framer-motion';

interface dataType { boj_id: string, name: string, cnt: number };

const VerticalBarChart = ({ data, rankSelect }: { data: dataType[], rankSelect: boolean[] }) => {
    const maxCount = Math.max(...data.map(item => item.cnt));

    return (
        <div key={rankSelect.indexOf(true)} // 이 key를 추가하여 데이터가 변경될 때 애니메이션이 재실행되도록 합니다.
            className="flex font-pretendard w-full justify-around items-end h-[320px] md:h-[500px]">
            {data.map((item: dataType, idx: number) => (
                <motion.div initial={{ height: '0%' }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 0.5, ease: easeOut }}
                    viewport={{ margin: "200px" }}
                    key={idx + 100} className="flex flex-col h-full items-center justify-end">
                    <div className="mt-2 text-sm font-semibold">{item.cnt}</div>
                    <div
                        className="w-[32px] md:w-[56px] rounded-sm md:rounded-t-lg"
                        style={{
                            height: `${(item.cnt / maxCount) * 100}%`,
                            backgroundColor: `${idx === 0 ? "#0479C7" : idx <= 3 ? "#3197D3" : idx <= 6 ? "#5FB4DE" : "#8CD2EA"}`
                        }}
                    ></div>
                    <div className="mt-1 font-semibold text-xs md:text-sm">{item.name}</div>
                </motion.div>
            ))}
        </div>
    );
};


export default function BarRank({ RankData, rankSelect }: { RankData: dataType[], rankSelect: boolean[] }) {

    return (
        <div className="max-w-[800px] w-full py-2 px-2 md:px-10">
            <VerticalBarChart data={RankData} rankSelect={rankSelect} />
        </div>
    );
}
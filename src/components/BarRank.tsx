import { easeOut, motion } from 'framer-motion';

interface dataType { boj_id: string, name: string, cnt: number };

const VerticalBarChart = ({ data }:{data:dataType[]}) => {
    const maxCount = Math.max(...data.map(item => item.cnt));

    return (
        <div className="flex font-pretendard max-w-[800px] w-full ml-10 justify-around items-end h-[600px]">
            {data.map((item:dataType, idx:number) => (
                <motion.div initial={{height:'0%'}} whileInView={{height:'100%'}} transition={{duration:0.5, ease:easeOut}} key={idx+100} className="flex flex-col h-full items-center justify-end">
                    <div className="mt-2 text-sm font-semibold">{item.cnt}</div>
                    <div
                        className="w-[56px] rounded-t-lg"
                        style={{
                            height: `${(item.cnt / maxCount) * 100}%`,
                            backgroundColor: `${idx===0?"#0479C7":idx<=3?"#3197D3":idx<=6?"#5FB4DE":"#8CD2EA"}`    
                        }}
                    ></div>
                    <div className="mt-1 font-semibold text-sm">{item.name}</div>
                </motion.div>
            ))}
        </div>
    );
};


export default function BarRank({ RankData }: {RankData:dataType[]}) {

    return (
        <div className="min-h-screen flex-1 pt-2 px-10">
            <VerticalBarChart data={RankData} />
        </div>
    );
}
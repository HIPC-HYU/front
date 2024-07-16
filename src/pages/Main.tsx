import DoughnutChart from "../components/Doughnut";
import Banner from "../components/Banner";
import CountUp from 'react-countup';
import { useEffect } from "react";
import axios from "axios";
import MainRank from "../components/rank/MainRank";



export default function Main() {
    const square = Array.from({ length: 120 }).map((_, idx) => { return idx; })


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/');
                console.log(response.data)
            } catch (error) {
                console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="overflow-hidden">
            <Banner />
            <section className="w-full min-h-80 mt-24 flex">
                <div className="flex md:flex-row justify-between flex-col max-w-[1280px] w-full mx-auto px-4">
                    <h1 className="font-pretendard text-2xl md:text-4xl font-bold">오늘까지 HIPE는 총 <CountUp end={5400} duration={2} />문제 <br />이번 분기에 <CountUp end={9} duration={2} />문제를 풀었습니다.<br /><br />이번 분기 문제 수 1위: ys10, <br />이번 분기 랭크 상승 1위: zcem8929입니다</h1>
                    <div className="w-40 md:w-64 h-64">
                        <DoughnutChart />
                    </div>
                    <div>
                    </div>
                </div>
            </section>
            <div className="my-20  mx-auto w-[1024px] h-fit flex flex-wrap">
                {square.map((v) => (<div key={`box-${v}`} className={`w-10 h-10 rounded-md md:m-[1px] m-[0.5px]`} style={{ backgroundColor: `${v <= 28 ? "#8CD2EA" : v <= 56 ? "#5FB4DE" : v <= 84 ? "#3197D3" : "#0479C7"}` }}></div>))}
            </div>
           <MainRank/>
            {/* <div className="max-w-[1280px] mx-auto px-4 mt-40">
                <p className="font-pretendard text-3xl md:text-5xl font-semibold">벌금 현황</p>
                <Rank />
            </div> */}
        </div>
    )
}

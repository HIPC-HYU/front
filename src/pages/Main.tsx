import DoughnutChart from "../components/Doughnut";
import Banner from "../components/Banner";
import Rank from "../components/Rank";
import CountUp from 'react-countup';
export default function Main() {
    const square = Array.from({ length: 120 }).map((_, idx) => { return idx; })
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
                {square.map((v) => (<div className={`w-10 h-10 rounded-md md:m-[1px] m-[0.5px]`} style={{ backgroundColor: `${v <= 28 ? "#8CD2EA" : v <= 56 ? "#5FB4DE" : v <= 84 ? "#3197D3" : "#0479C7"}` }}></div>))}
            </div>
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="flex items-center">
                    <p className="font-pretendard text-3xl md:text-5xl font-semibold">7/14 Ranking</p><img src="/assets/images/solvedlogo.svg" width={80} className="ml-4 mt-2" />
                </div>
                <Rank />
            </div>
            <div className="max-w-[1280px] mx-auto px-4 mt-40">
                <p className="font-pretendard text-3xl md:text-5xl font-semibold">벌금 현황</p>
                <Rank />
            </div>
        </div>
    )
}

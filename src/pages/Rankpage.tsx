import Rank from "../components/Rank"

export default function RankPage() {
    return (<div className="max-w-[1280px] h-screen mx-auto px-4 mt-40">
        <p className="font-pretendard text-3xl md:text-5xl font-semibold">이번분기 랭크</p>
        <Rank />
    </div>)
}
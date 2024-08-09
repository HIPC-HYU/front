import { FaArrowDown } from "react-icons/fa";

export default function BgMain() {
    return (
        <div style={{ backgroundImage: "url(./assets/images/hipc_bgmain.png)" }} className="overflow-hidden relative w-full h-screen bg-no-repeat bg-transparent bg-left bg-cover">
            <div className="relative max-w-5xl w-full mx-auto h-full">
                <div className="font-pretendard absolute -top-5 md:-top-36 -left-6 md:-left-16 text-white text-[160px] md:text-[400px] font-extrabold opacity-10">HIPC</div>
                <div className="font-pretendard text-6xl text-white opacity-60 font-bold absolute top-80 left-16">HIPC</div>
                <div className="font-pretendard text-white text-6xl font-bold opacity-70 absolute bottom-24 left-16">
                    Hanyang<br />
                    Information System<br />
                    Programming<br />
                    Club
                </div>
            </div>
            <div className="flex items-center justify-center -mt-8">
                <a href='#1'><FaArrowDown className="animate-bounce text-5xl -mt-8 text-gray-400 " /></a>
            </div>
        </div>
    )
}
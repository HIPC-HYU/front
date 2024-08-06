export default function Banner() {
    return (
        <div className="relative w-full h-[75vh] bg-[#78D4FC] flex items-center">
            <div className="flex max-w-5xl w-full mx-auto justify-between">
                <img src="/assets/images/banner.svg" className="hidden md:block -mt-4 w-[320px]" />
                <div className="text-4xl md:text-6xl -mt-20 whitespace-nowrap md:mt-2 text-white font-serif pl-4">
                    <p>Hanyang</p>
                    <p>Information system</p>
                    <p>Progamming</p>
                    <p>Club</p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-40" style={{ backgroundImage: 'linear-gradient(to bottom, #78D4FC 0%, #FFFFFF 100%)' }}></div>
        </div>
    )
}
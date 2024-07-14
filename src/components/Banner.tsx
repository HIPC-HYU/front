export default function Banner() {
    return (
        <div className="relative w-full h-[75vh] bg-[#78D4FC] flex items-center">
            <div className="flex max-w-[1280px] w-full mx-auto justify-between">
                <img src="/assets/images/Logo_blue.png" className="hidden md:block -mt-4 w-[500px] h-80" />
                <div className="text-5xl md:text-7xl -mt-24 md:-mt-4 text-white font-serif pl-4">
                    <p>Hanyang</p>
                    <p>Information system</p>
                    <p>Progamming</p>
                    <p>Engagement</p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-40" style={{ backgroundImage: 'linear-gradient(to bottom, #78D4FC 0%, #FFFFFF 100%)' }}></div>
        </div>
    )
}
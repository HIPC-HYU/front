

export default function Banner({ text }: { text: string }) {
    return (
        <>
            <div style={{ backgroundImage: "url(/assets/images/bg_main.png)" }} className="relative bg-gray-500 bg-cover bg-no-repeat bg-center w-full h-72 flex justify-center items-center">
                <h1 className="text-4xl font-semibold text-white">{text}</h1>
            </div>

        </>
    )
}

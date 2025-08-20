// this code is for quote section

function Hero() {
    return (
        <>
            <div className="w-full h-full flex flex-col items-center mt-20 scroll-mt-[80px]">
                <img src="png/sloth.jpg" alt="Sloth Image" className="w-32 h-32 object-cover rounded-full" />{" "}
                {/* quote */}{" "}
                <div className="flex flex-col items-end gap-5 mb-10 max-w-xl text-center p-2 playfair">
                    {" "}
                    <div className="flex flex-col items-center">
                        {" "}
                        <p className="text-2xl md:text-2xl font-medium leading-relaxed text-gray-800">
                            {" "}
                            All the problems are stuck between <br />{" "}
                            <span className="text-purple-600 font-bold underline decoration-wavy decoration-purple-400">
                                {" "}
                                Mind{" "}
                            </span>{" "}
                            and{" "}
                            <span className="text-pink-600 font-bold underline decoration-wavy decoration-pink-400">
                                {" "}
                                Matter{" "}
                            </span>{" "}
                            .{" "}
                        </p>{" "}
                        <p className="mt-4 text-xl text-gray-700 italic">
                            {" "}
                            If you don't <span className="text-purple-600 font-bold">Mind</span>, it doesn't{" "}
                            <span className="text-pink-600 font-bold">Matter</span>.{" "}
                        </p>{" "}
                    </div>{" "}
                    <p className="font-['Open Sans']">~ Unknown</p>{" "}
                </div>{" "}
                {/* Heading Section + Subheading Section */}
                <div className="flex flex-col items-center justify-center gap-5 text-center">
                    <div className="font-[Comfortaa] text-3xl font-bold">🍁 Journey towards a calmer mind</div>
                    <div className="font-[Nunito] text-xl">
                        Discover mindful practices, uplifting activities, and tools to help you recharge, refocus, and
                        reconnect with yourself.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;

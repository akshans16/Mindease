function Tips() {
    return (
        <div className="flex flex-col items-center gap-4 bg-[#F0F8FF] mt-10 px-6 pt-20 ">
            <h1 className="font-[Nunito] text-3xl font-bold ">📜 Quick Tips for Mental Wellness</h1>

            {/* Help Others */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-6  px-6 ">
                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img src="png/help.png" alt="Help Others" className="w-3/4 rounded-lg" />
                </div>
                {/* Text */}
                <div className="md:w-1/2 flex flex-col text-center md:text-left gap-3">
                    <h2 className="text-3xl font-[Permanent_Marker]">Help Others</h2>
                    <p className="text-gray-700 leading-relaxed font-[Caveat] text-2xl font-bold">
                        Help Others but don't expect anything in return. Acts of kindness, whether big or small, create
                        a sense of fulfillment and connection. They reduce stress, shift focus away from personal
                        worries, and build empathy. Supporting others ultimately strengthens emotional resilience and
                        inner peace.
                    </p>
                </div>
            </div>

            {/* Do something */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-6  p-6">
                {/* Text */}
                <div className="md:w-1/2 flex flex-col text-center md:text-left gap-3">
                    <h2 className="text-3xl font-[Permanent_Marker]">Do Something</h2>
                    <p className="text-gray-700 leading-relaxed font-[Caveat] text-2xl font-bold">
                        When feeling low or unmotivated, doing something—no matter how small—can help. Simple actions
                        like cleaning your desk, going for a walk, or starting a hobby provide momentum. These
                        activities distract from negativity, foster productivity, and enhance self-worth. Taking
                        initiative, even in tiny steps, breaks cycles of overthinking and uplifts mental well-being.
                    </p>
                </div>

                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img src="png/work.png" alt="Help Others" className="w-3/4 rounded-lg" />
                </div>
            </div>

            {/* Reading */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-6  p-6">
                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img src="png/reading.png" alt="Help Others" className="w-3/4 rounded-lg" />
                </div>

                {/* Text */}
                <div className="md:w-1/2 flex flex-col text-center md:text-left gap-3">
                    <h2 className="text-3xl font-[Permanent_Marker]">Read something good</h2>
                    <p className="text-gray-700 leading-relaxed font-[Caveat] text-2xl font-bold">
                        Start your day by reading something good, maybe an inspirational book or an uplifting article.
                        You can also watch a positive show or a motivational video. Good content sets the tone for your
                        mood, inspires hope, and helps you see things with a fresh perspective, boosting creativity and
                        happiness.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tips;

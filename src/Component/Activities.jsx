import Card from "../templates/Card";
import React, {useState} from "react";
import Wheel from "./Wheel";

export default function Dashboard() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [showWheel, setShowWheel] = useState(false);
    const cards = [
        {
            image: "png/wheel.png",
            title: "Wheel",
            message: "Spin the wheel to do something fun.",
            buttonText: "Spin",
            category: "fun",
            action: () => {setShowWheel(true);
                console.log("Wheel clicked");
            }
        },
        {
            image: "png/meditation.png",
            title: "Meditation",
            message: "Find your inner peace with guided meditation.",
            buttonText: "Meditate",
            category: "relax",
        },
        {
            image: "png/lungs.png",
            title: "Breathe",
            message: "Breathe deeply and relax your mind.",
            buttonText: "Breathe",
            category: "relax",
        },
        {
            image: "png/thought_dump.png",
            title: "Brain Dump",
            message: "Clear your mind and organize your thoughts.",
            buttonText: "Dump",
            category: "relax",
        },
        {
            image: "png/movie.png",
            title: "Movies",
            message: "Enjoy a selection of calming movies.",
            buttonText: "Watch",
            category: "media",
        },
        {
            image: "png/stories.png",
            title: "Stories",
            message: "Read inspiring and motivational stories.",
            buttonText: "Read",
            category: "media",
        },
        {
            image: "png/music.png",
            title: "Music",
            message: "Relax and unwind with music of nature.",
            buttonText: "Listen",
            category: "nature",
        },
        {
            image: "png/drawing.png",
            title: "Drawing",
            message: "Unleash your creativity with drawing.",
            buttonText: "Draw",
            category: "fun",
        },
    ];

    const filteredCards = activeFilter === "all" ? cards : cards.filter((c) => c.category === activeFilter);

    return (
        <>
            <div className="flex flex-col gap-5">
                {/* Buttons Group */}
                <div className="button-group flex flex-wrap justify-center items-center gap-4 mt-18 ">
                    <button
                        onClick={() => setActiveFilter("all")}
                        className="rounded-full border border-gray-700 bg-transparent text-black py-2 px-4 font-[Nunito] hover:bg-gray-100 transition cursor-pointer"
                    >
                        Show All
                    </button>
                    <button
                        onClick={() => setActiveFilter("fun")}
                        className="rounded-full border border-gray-700 bg-transparent text-black py-2 px-4 font-[Nunito] hover:bg-gray-100 transition cursor-pointer"
                    >
                        🎡 Spin The Wheel
                    </button>
                    <button
                        onClick={() => setActiveFilter("relax")}
                        className="rounded-full border border-gray-700 bg-transparent text-black py-2 px-4 font-[Nunito] hover:bg-gray-100 transition cursor-pointer"
                    >
                        🧘‍♀️ Relaxation
                    </button>
                    <button
                        onClick={() => setActiveFilter("media")}
                        className="rounded-full border border-gray-700 bg-transparent text-black py-2 px-4 font-[Nunito] hover:bg-gray-100 transition cursor-pointer"
                    >
                        🎬 Movies and Stories
                    </button>
                    <button
                        onClick={() => setActiveFilter("nature")}
                        className="rounded-full border border-gray-700 bg-transparent text-black py-2 px-4 font-[Nunito] hover:bg-gray-100 transition cursor-pointer"
                    >
                        🌳 Nature & Mindfulness
                    </button>
                </div>

                {/* Cards */}
                <div className="px-10 cards-group p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                    {filteredCards.map((card, idx) => (
                        <Card key={idx} {...card} />
                    ))}
                </div>
            {/* Show Wheel if triggered */}
              {showWheel && <Wheel onClose={() => setShowWheel(false)} />}
            </div>
        </>
    );
}

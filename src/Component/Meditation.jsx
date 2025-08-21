import MusicPlayer from "./MusicPlayer";
import {createPortal} from "react-dom";
export default function Meditation({onClose}) {
    return createPortal(
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative rounded-full max-w-sm fade-in">
                {/* Background */}
                <img src="png/sky-bg.gif" alt="player-background" className="w-full rounded-2xl" />
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 p-2 bg-white/40 rounded-md shadow-md font-bold font-[Nunito] hover:cursor-pointer"
                    onClick={onClose}
                >
                    X
                </button>
                {/* Music Player */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                    <MusicPlayer />
                </div>
            </div>
        </div>,
        document.body
    );
}

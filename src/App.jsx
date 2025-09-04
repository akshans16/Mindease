import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Activities from "./Component/Activities.jsx";
import Tips from "./Component/Tips.jsx";
import Draw from "./Component/Draw.jsx"
import Tracker from "./Component/Tracker";
import Footer from "./Component/Footer.jsx";
import ScrollToTop from "./Component/ScrollToTop.jsx";
import {useIsVisible} from "./hooks/useIsVisible.jsx";
import {useRef} from "react";
import StoriesPage from "./pages/StoriesPage.jsx";
import StoryDetailPage from "./pages/StoryDetailPage.jsx";
import MovieRecommender from "./pages/MovieRecommender.jsx";
import MovieGenreList from "./pages/MovieGenreList.jsx";
import ChatBot from "./Component/ChatBot.jsx";
import Tetris from "./games/Tetris/components/Tetris.jsx";

function SectionWrapper({children}) {
    const ref = useRef();
    const isVisible = useIsVisible(ref);

    return (
        <div className="w-full overflow-hidden flex flex-col justify-center items-center">
            <div
                ref={ref}
                // Prevent flexbox overflow
                style={{minWidth: 0}}
                className={`w-full flex flex-col justify-center transition-all ease-in duration-700 transform-gpu ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                }`}
            >
                {children}
            </div>
        </div>
    );
}
function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Main site layout */}
                <Route
                    path="/"
                    element={
                        <div className="flex flex-col items-center">
                            <Navbar />
                            <SectionWrapper>
                                <Hero />
                            </SectionWrapper>
                            <SectionWrapper>
                                <Activities />
                            </SectionWrapper>
                            <SectionWrapper>
                                <Tips />
                            </SectionWrapper>
                            <SectionWrapper>
                                <Tracker />
                            </SectionWrapper>
                            
                        </div>
                    }
                />

                {/* Stories Page */}
                <Route path="/stories" element={<StoriesPage />} />
                <Route path="/stories/:id" element={<StoryDetailPage />} />
                <Route path="/movies" element={<MovieRecommender />} />
                <Route path="/movies/genre/:genreId" element={<MovieGenreList />} />
            </Routes>
        </Router>
    );
}

export default App;

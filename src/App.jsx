import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Activities from "./Component/Activities.jsx";
import Tips from "./Component/Tips.jsx";
import Tracker from "./Component/Tracker";
import Footer from "./Component/Footer.jsx";
import {useIsVisible} from "./hooks/useIsVisible.jsx"; // You put your hook in src/hooks/useIsVisible.js
import {useRef} from "react";
import StoriesPage from "./pages/StoriesPage.jsx";
import StoryDetailPage from "./pages/StoryDetailPage.jsx";

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
            <Navbar />
            <Routes>
                {/* Home Page */}
                <Route
                    path="/"
                    element={
                        <div className="flex flex-col items-center">
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
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

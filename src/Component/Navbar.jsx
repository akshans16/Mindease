import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faInfoCircle, faEnvelope, faCog, faBars, faTimes} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full h-auto bg-white border-b border-[#FAF9F6] shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="png/diamonds.png" alt="Diamond PNG" className="w-6 h-6" />
                        <div className="flex-shrink-0 text-xl font-bold font-['Open Sans']">MindEase</div>
                    </div>

                    {/* Desktop Menu (no icons) */}
                    <div className="hidden font-bold font-['Open Sans'] md:flex space-x-6 ">
                        <a href="#home" className="hover:text-blue-500">
                            Home
                        </a>
                        <a href="#about" className="hover:text-blue-500">
                            About
                        </a>
                        <a href="#contact" className="hover:text-blue-500">
                            Contact
                        </a>
                        <a href="#services" className="hover:text-blue-500">
                            Services
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className=" focus:outline-none">
                            {isOpen ? (
                                <FontAwesomeIcon icon={faTimes} size="lg" />
                            ) : (
                                <FontAwesomeIcon icon={faBars} size="lg" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown with Icons */}
            {isOpen && (
                <div
                    className={` font-['Open Sans'] flex justify-around md:hidden 
              bg-white/50 backdrop-blur-sm text-md p-2
              transform transition-all duration-300 ease-in-out overflow-hidden
              ${isOpen ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"}`}
                >
                    <a href="#home" className="block hover:text-blue-500 flex items-center gap-1">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </a>
                    <a href="#about" className="block hover:text-blue-500 flex items-center gap-1">
                        <FontAwesomeIcon icon={faInfoCircle} /> About
                    </a>
                    <a href="#contact" className="block hover:text-blue-500 flex items-center gap-1">
                        <FontAwesomeIcon icon={faEnvelope} /> Contact
                    </a>
                    <a href="#services" className="block hover:text-blue-500 flex items-center gap-1">
                        <FontAwesomeIcon icon={faCog} /> Services
                    </a>
                </div>
            )}
        </nav>
    );
}

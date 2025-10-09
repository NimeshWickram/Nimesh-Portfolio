import React from "react";

const Navbar = ({ darkMode, setDarkMode, activeSection, scrollToSection }) => {
    return (
        <nav className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nimesh</h1>
            <div className="flex items-center space-x-6">
                <div className="hidden md:flex space-x-6">
                    {["Home", "Tech", "Projects", "Contact"].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className={`font-medium transition-colors duration-300 ${activeSection === item.toLowerCase()
                                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                >
                    {darkMode ? "☀️ Light" : "🌙 Dark"}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode, activeSection, scrollToSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nimesh.Dev</h1>
            
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
                {["Home", "Tech", "Projects", "Milestones", "Contact"].map((item) => (
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
                {/* Theme toggle button - visible on desktop screens after Contact */}
                <motion.button
                    onClick={() => setDarkMode(!darkMode)}
                    className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center text-sm"
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {darkMode ? (
                        <>
                            <FaSun className="mr-1" />
                            Light
                        </>
                    ) : (
                        <>
                            <FaMoon className="mr-1" />
                            Dark
                        </>
                    )}
                </motion.button>
            </div>
            
            {/* Mobile menu button with glass modern look */}
            <motion.button 
                className="md:hidden z-50 text-gray-800 dark:text-white bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-xl p-2 shadow-lg"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                whileTap={{ scale: 0.9 }}
            >
                <motion.div
                    animate={{ rotate: menuOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </motion.div>
            </motion.button>
            
            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu}></div>
            )}
            
            {/* Mobile menu panel from right side with glass modern look */}
            <div 
                className={`fixed top-0 right-0 h-full w-64 bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close button inside the menu panel */}
                <div className="flex justify-end p-4">
                    <motion.button 
                        onClick={closeMenu}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        aria-label="Close menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FiX size={24} />
                    </motion.button>
                </div>
                
                <div className="flex flex-col p-6 space-y-6 pt-0">
                    {["Home", "Tech", "Projects", "Milestones", "Contact"].map((item) => (
                        <motion.button
                            key={item}
                            onClick={() => {
                                scrollToSection(item.toLowerCase());
                                closeMenu();
                            }}
                            className={`text-left py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
                                activeSection === item.toLowerCase()
                                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {item}
                        </motion.button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
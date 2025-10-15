import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/1000176670.jpg";

const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-0 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center md:text-left mb-8 md:mb-0 md:pr-8"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Hi, I'm Nimesh. <span className="block mt-3">A Software Engineering</span>
                    <span className="block mt-3" style={{ color: 'rgb(168, 173, 178)' }}>
                        Undergraduate & Full Stack Developer.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300"
                >
                    Open to Work | React • Java  • Node.js • Spring Boot
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center md:items-start gap-6 mb-8"
                >
                    <div className="flex items-center text-base">
                        <span className="mr-2">📍</span>
                        <span>Colombo, Sri Lanka</span>
                    </div>

                    {/* Download Resume Button replacing LinkedIn and GitHub icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <a
                            href="/assets/Nimesh_Wickramasinghe_Resume.pdf"
                            download="Nimesh_Wickramasinghe_Resume.pdf"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
            >
                <div className="w-50 h-50 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl m-4 z-0">
                    <img
                        src={profileImage}
                        alt="Nimesh Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
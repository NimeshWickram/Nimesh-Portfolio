import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
    // Define colors for different technologies
    const techColors = {
        "React": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
        "NestJS": "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200",
        "MongoDB": "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200",
        "Node.js": "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200",
        "Flutter": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
        "Dart": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
        "Firebase": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200",
        "QR Code": "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200",
        "Java": "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200",
        "PHP": "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200",
        "HTML": "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200",
        "CSS": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
        "SCSS": "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200",
        "JavaScript": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200",
        "TypeScript": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
        "Tailwind CSS": "bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200",
        "Next.js": "bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-200",
        "default": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
        >
            <div className="p-4">
                <div className="flex items-center mb-3">
                    <div className="text-3xl mr-3">{project.image}</div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className={`px-2 py-1 text-xs rounded-full ${techColors[tech] || techColors.default}`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-2">
                    <motion.a
                        href={project.liveDemo}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 text-center px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-medium text-sm"
                    >
                        Live Demo
                    </motion.a>
                    <motion.a
                        href={project.sourceCode}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 text-center px-3 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md font-medium text-sm"
                    >
                        Source Code
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
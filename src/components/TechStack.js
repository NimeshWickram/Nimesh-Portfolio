import React from "react";
import { motion } from "framer-motion";

const TechStack = ({ techStack }) => {
  return (
    <section id="tech" className="py-16 px-4 bg-gray-100 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {techStack.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: `0 20px 25px -5px ${tech.color}40, 0 10px 10px -5px ${tech.color}20`
                }}
                className="bg-white dark:bg-gray-900 rounded-lg p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div 
                  className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: tech.color }}
                >
                  <IconComponent />
                </div>
                <h3 className="text-sm font-semibold text-center">{tech.name}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
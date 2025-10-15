import React from "react";
import { motion } from "framer-motion";

const Milestones = () => {
  // Dummy milestone data
  const milestones = [
    {
      id: 1,
      year: "2024",
      title: "Started Freelance Development",
      description: "Began taking on freelance projects to build real-world applications for clients."
    },
    {
      id: 2,
      year: "2023",
      title: "Graduated Computer Science",
      description: "Completed Bachelor's degree in Computer Science with honors."
    },
    {
      id: 3,
      year: "2022",
      title: "First Internship",
      description: "Landed first internship at a tech startup, working with React and Node.js."
    },
    {
      id: 4,
      year: "2021",
      title: "Learned Web Development",
      description: "Started learning web development technologies including HTML, CSS, and JavaScript."
    }
  ];

  return (
    <section id="milestones" className="py-16 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Milestones
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Key moments in my journey as a developer
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line on the left with increased stroke width */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div className="space-y-20 pl-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Point on the timeline with better spacing */}
                <div className="absolute -left-16 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-white dark:border-gray-900 z-10"></div>
                
                {/* Glass-like card on the right with year centered at top */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 relative">
                  {/* Year badge centered at top */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    {milestone.year}
                  </div>
                  
                  <div className="p-6 pt-8">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
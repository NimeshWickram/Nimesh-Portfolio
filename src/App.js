import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiTailwindcss, SiHtml5, SiCss3, SiSass,
  SiNodedotjs, SiMongodb, SiFlutter, SiPhp,
  SiLinkedin, SiGithub
} from "react-icons/si";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Tech stack data with official logos
  const techStack = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "SCSS", icon: SiSass, color: "#CC6699" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Java", icon: SiJavascript, color: "#007396" }, // Using JavaScript icon as placeholder
    { name: "PHP", icon: SiPhp, color: "#777BB4" }
  ];

  // Projects data
  const projects = [
    {
      title: "Event Check-In System",
      description: "QR code based event management system with real-time check-ins and analytics dashboard.",
      technologies: ["React", "NestJS", "MongoDB", "QR Code"],
      image: "📊",
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      title: "eShop Website",
      description: "Full-featured e-commerce platform with product management, cart, and payment processing.",
      technologies: ["React", "MongoDB", "Node.js"],
      image: "🛒",
      liveDemo: "#",
      sourceCode: "#"
    },
    {
      title: "Future Flutter Mobile App",
      description: "Upcoming mobile application with modern UI and seamless user experience.",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: "📱",
      liveDemo: "#",
      sourceCode: "#"
    }
  ];

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "tech", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-50 dark:bg-black text-gray-800 dark:text-white min-h-screen transition-colors duration-300">

        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nimesh</h1>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              {["Home", "Tech", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors duration-300 ${activeSection === item.toLowerCase()
                    ? "text-blue-600 dark:text-blue-400"
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

        {/* Hero Section */}
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
              className="text-3xl md:text-5xl font-bold mb-6"
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
              Open to Work | React • Java • MongoDB • Node.js • Flutter
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

              <div className="flex gap-3">
                <motion.a
                  href="https://linkedin.com/in/nimesh-wickramasinghe"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow text-sm"
                >
                  <SiLinkedin className="mr-1.5" />
                  LinkedIn
                </motion.a>

                <motion.a
                  href="https://github.com/NimeshWickram"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-5 py-2.5 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow dark:from-gray-700 dark:to-gray-900 text-sm"
                >
                  <SiGithub className="mr-1.5" />
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img
                src={require("./assets/profile.jpg")}
                alt="Nimesh Profile"
                className="w-full h-full object-cover"
              />
            </div>

          </motion.div>
        </section>

        {/* Tech Stack Section */}
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
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
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
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent />
                    </div>
                    <h3 className="text-sm font-semibold text-center">{tech.name}</h3>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
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
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full"
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
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-black dark:to-black">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contact
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Let's Connect and Build Something Great 🚀
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6"
            >
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                  <motion.a
                    href="https://linkedin.com/in/nimesh-wickramasinghe"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <SiLinkedin className="text-3xl mb-2" />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center px-6 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow dark:from-gray-700 dark:to-gray-900"
                  >
                    <SiGithub className="text-3xl mb-2" />
                    <span>GitHub</span>
                  </motion.a>

                  <motion.a
                    href="mailto:nimeshwickramasinghelk@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>Email</span>
                  </motion.a>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    Or email me directly at:
                    <a href="mailto:nimeshwickramasinghelk@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline ml-2">
                      nimeshwickramasinfghelk@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-8 border-t border-gray-700 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex justify-center space-x-4 mb-6">
              {[
                { icon: SiLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/nimesh-wickramasinghe", className: "text-blue-600" },
                { icon: SiGithub, label: "GitHub", href: "#", className: "" }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all ${social.className}`}
                    title={social.label}
                  >
                    <IconComponent />
                  </motion.a>
                );
              })}
            </div>

            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Nimesh. All rights reserved.
            </p>
            <p className="text-gray-500 mt-1 text-xs">
              Built with React, Tailwind CSS, and ❤️
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
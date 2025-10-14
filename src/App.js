import React, { useState, useEffect } from "react";
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiMongodb, SiFlutter, SiPhp
} from "react-icons/si";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

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
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Java", icon: SiJavascript, color: "#007396" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" }
  ];

  // Projects data
  const projects = [
    {
      title: "Event Check-In System",
      description: "QR code based event management system with real-time check-ins and analytics dashboard.",
      technologies: ["React", "NestJS", "MongoDB", "QR Code"],
      image: "📊",
      liveDemo: "https://event-checkin-system-1-ioiepkfpo-nimeshwickrams-projects.vercel.app/",
      sourceCode: "https://github.com/NimeshWickram/event-checkin-system"
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
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        <HeroSection />
        <TechStack techStack={techStack} />
        <ProjectsSection projects={projects} />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
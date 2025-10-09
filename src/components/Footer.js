import React from "react";
import { motion } from "framer-motion";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 border-t border-gray-700 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Nimesh. All rights reserved.
        </p>
        <p className="text-gray-500 mt-1 text-xs">
          Built with <span className="text-blue-400">React</span>, <span className="text-teal-400">Tailwind CSS</span>, and ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 border-t border-gray-700 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-6">
          {[
            { icon: "LinkedIn", label: "LinkedIn", href: "https://linkedin.com/in/nimesh-wickramasinghe", className: "text-blue-400 hover:text-blue-300" },
            { icon: "GitHub", label: "GitHub", href: "https://github.com/NimeshWickram", className: "text-gray-400 hover:text-gray-300" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-lg transition-all ${social.className}`}
              title={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>

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
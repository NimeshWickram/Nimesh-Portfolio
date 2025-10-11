import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 border-t border-gray-700 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Nimesh. All rights reserved.
        </p>
        <p className="text-gray-500 mt-1 text-xs">
          Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
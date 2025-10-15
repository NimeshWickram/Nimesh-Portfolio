import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiLinkedin, SiGithub } from "react-icons/si";

const ContactSection = () => {
  // Function to handle email link click
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:nimeshwickramasinfghelk@gmail.com";
  };

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-[#f3f4f6] dark:bg-black">
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
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Form - Left Side */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md font-medium shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Social Icons - Right Side */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Connect with me</h3>
              
              <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-6 h-full">
                <motion.a
                  href="https://linkedin.com/in/nimesh-wickramasinghe"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin className="text-3xl mb-2" />
                  <span>LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://github.com/NimeshWickram"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center px-6 py-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow dark:from-gray-700 dark:to-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="text-3xl mb-2" />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  href="mailto:nimeshwickramasinfghelk@gmail.com"
                  onClick={handleEmailClick}
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

             
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
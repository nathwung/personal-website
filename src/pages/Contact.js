import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Contact() {
    const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-white via-[#eef1ff] to-[#e4ecff] text-gray-900 font-sans">
      {/* Navbar */}
      <header className="bg-white">
        <nav className="max-w-7xl mx-auto w-full px-6 sm:px-10 py-5 flex justify-between items-center text-base font-medium">
          <div className="hidden sm:flex space-x-8 ml-auto">
            <Link
                to="/"
                className={`hover:text-purple-600 ${
                    location.pathname === "/" ? "text-purple-600 font-semibold" : ""
                }`}
                >
                Home
            </Link>
            <Link to="/about" className={`hover:text-purple-600 ${location.pathname === "/about" ? "text-purple-600 font-semibold" : ""}`}>About</Link>
            <Link to="/experience" className={`hover:text-purple-600 ${location.pathname === "/experience" ? "text-purple-600 font-semibold" : ""}`}>Experience</Link>
            <Link to="/projects" className={`hover:text-purple-600 ${location.pathname === "/projects" ? "text-purple-600 font-semibold" : ""}`}>Projects</Link>
            <Link to="/skills" className={`hover:text-purple-600 ${location.pathname === "/skills" ? "text-purple-600 font-semibold" : ""}`}>Skills</Link>
            <Link to="/resume" className={`hover:text-purple-600 ${location.pathname === "/resume" ? "text-purple-600 font-semibold" : ""}`}>Resume</Link>
            <Link
                to="/contact"
                className={`hover:text-purple-600 ${
                    location.pathname === "/contact" ? "text-purple-600 font-semibold" : ""
                }`}
                >
                Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Contact Content */}
      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Me</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Feel free to reach out! I'm always open to coffee chats, discussing new projects,
            opportunities, or collaborations.
          </p>

          <div className="bg-white shadow-2xl rounded-2xl p-10 text-left space-y-10 mx-auto max-w-2xl border border-gray-100 transition-transform duration-300 hover:shadow-[0_12px_28px_rgba(124,58,237,0.25)] hover:-translate-y-1 hover:scale-[1.02]">
            {/* Email */}
            <div className="flex items-start gap-4 group hover:text-purple-600 transition">
            <div className="p-3 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 text-white shadow-lg group-hover:scale-110 transform transition">
                <FaEnvelope className="text-xl" />
            </div>
            <div>
                <h3 className="text-xl font-semibold group-hover:text-purple-600 transition">Email</h3>
                <a 
                href="mailto:nath.wung@mail.utoronto.ca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-base text-gray-700 gap-1 group-hover:underline"
                >
                nath.wung@mail.utoronto.ca <FiExternalLink className="text-sm" />
                </a>
            </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4 group hover:text-purple-600 transition">
            <div className="p-3 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 text-white shadow-lg group-hover:scale-110 transform transition">
                <FaLinkedin className="text-xl" />
            </div>
            <div>
                <h3 className="text-xl font-semibold group-hover:text-purple-600 transition">LinkedIn</h3>
                <a
                href="https://www.linkedin.com/in/nathanael-wung-548348288/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-base text-gray-700 gap-1 group-hover:underline"
                >
                linkedin.com/in/nathanael-wung-548348288 <FiExternalLink className="text-sm" />
                </a>
            </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 group hover:text-purple-600 transition">
            <div className="p-3 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 text-white shadow-lg group-hover:scale-110 transform transition">
                <FaMapMarkerAlt className="text-xl" />
            </div>
            <div>
                <h3 className="text-xl font-semibold group-hover:text-purple-600 transition">Location</h3>
                <p className="text-base text-gray-700 group-hover:text-purple-600 transition">Toronto, Ontario</p>
            </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-6 border-t text-center flex justify-center gap-4 mt-4">
            <a
                href="mailto:nath.wung@mail.utoronto.ca"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md transform transition duration-200 hover:scale-105 hover:bg-purple-700 hover:shadow-xl"
            >
                Email Me
            </a>
            <a
                href="https://www.linkedin.com/in/nathanael-wung-548348288/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-600 text-purple-600 px-6 py-2 rounded-lg shadow-md transform transition duration-200 hover:scale-105 hover:bg-purple-100 hover:shadow-xl"
            >
                Connect on LinkedIn
            </a>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-[#f3f6fb]">
        <footer className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-6 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Nathanael Wung. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/nathwung" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/nathanael-wung-548348288/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-600" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

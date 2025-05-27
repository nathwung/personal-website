import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resumePDF from "../assets/resume.pdf";

export default function Resume() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-white via-[#eef1ff] to-[#e4ecff] text-gray-900 font-sans">
      {/* Navbar */}
      <header className="bg-white">
        <nav className="max-w-7xl mx-auto w-full px-6 sm:px-10 py-5 flex justify-between items-center text-base font-medium">
          <div className="hidden sm:flex space-x-8 ml-auto">
            <Link to="/" className={`hover:text-purple-600 ${location.pathname === "/" ? "text-purple-600 font-semibold" : ""}`}>Home</Link>
            <Link to="/about" className={`hover:text-purple-600 ${location.pathname === "/about" ? "text-purple-600 font-semibold" : ""}`}>About</Link>
            <Link to="/experience" className={`hover:text-purple-600 ${location.pathname === "/experience" ? "text-purple-600 font-semibold" : ""}`}>Experience</Link>
            <Link to="/projects" className={`hover:text-purple-600 ${location.pathname === "/projects" ? "text-purple-600 font-semibold" : ""}`}>Projects</Link>
            <Link to="/skills" className={`hover:text-purple-600 ${location.pathname === "/skills" ? "text-purple-600 font-semibold" : ""}`}>Skills</Link>
            <Link to="/resume" className={`hover:text-purple-600 ${location.pathname === "/resume" ? "text-purple-600 font-semibold" : ""}`}>Resume</Link>
            <Link to="/contact" className={`hover:text-purple-600 ${location.pathname === "/contact" ? "text-purple-600 font-semibold" : ""}`}>Contact</Link>
          </div>
        </nav>
      </header>

      {/* Resume Section */}
      <main className="max-w-5xl mx-auto px-6 py-24 text-center font-display">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Resume</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Here's what I’ve been up to — skills, experience, and a bit of ambition on paper.
          </p>
        </motion.div>

        {/* PDF Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden max-w-3xl mx-auto"
        >
          <iframe
            src={resumePDF}
            title="Resume PDF"
            className="w-full h-[800px]"
          />
        </motion.div>

        {/* Download Button */}
        <div className="mt-8">
          <a
            href={resumePDF}
            download="Nathanael_Wung_Resume.pdf"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md transform transition duration-200 hover:scale-105 hover:bg-purple-700 hover:shadow-xl"
          >
            Download Resume
          </a>
        </div>
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

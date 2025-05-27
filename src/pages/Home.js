import { useState, useEffect } from "react";
import profilePic from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const titles = [
  "Engineer",
  "Full-Stack Developer",
  "Problem Solver",
  "Tech Enthusiast",
  "Learner",
];

export default function App() {
  const [index, setIndex] = useState(0);
  const location = useLocation();

  const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
    setFadeIn(true);
    }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
            <Link to="/contact" className="hover:text-purple-600">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center px-6 py-16 max-w-7xl mx-auto" id="home">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-16 items-center w-full"
        >
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-purple-100 text-purple-700 rounded-full shadow-sm">
              Welcome to my portfolio!
            </span>
            <h1 className="text-6xl font-extrabold leading-tight mb-4">
              <span className="text-black">Hi, I'm </span>
              <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                Nathanael Wung
              </span>
            </h1>
            <h2 className="text-3xl font-semibold mb-4">
              I'm a{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {titles[index]}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mb-6">
              Exploring and genuinely trying to make a difference.
            </p>
            <Link
              to="/projects"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition transform hover:-translate-y-1"
            >
              View My Work
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="rounded-full bg-gradient-to-tr from-purple-300 to-blue-400 p-[6px] shadow-xl">
              <img
                src={profilePic}
                alt="Nathanael Wung"
                className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-[#f3f6fb]">
        <footer className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-6 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Nathanael Wung. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/nathwung"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl hover:text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/nathanael-wung-548348288/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl hover:text-blue-600" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import profilePic from "../assets/photo.jpg";

// Custom typing component
function TypingText({ content, speed = 12 }) {
  const [displayed, setDisplayed] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < content.length) {
        setDisplayed(content.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setFinished(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [content, speed]);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 px-6 py-5 shadow-sm transition duration-300 hover:shadow-[0_12px_28px_rgba(124,58,237,0.25)] hover:-translate-y-1 hover:scale-[1.02]">
      <p
        className="text-[1.05rem] text-gray-800 leading-relaxed font-medium"
        dangerouslySetInnerHTML={{
          __html: displayed + (finished ? "" : '<span class="animate-pulse">|</span>')
        }}
      />
    </div>
  );
}

export default function About() {
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

      {/* About Section */}
      <main className="max-w-5xl mx-auto px-6 py-24 text-center font-display">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Me</span>
          </h1>
          <p className="text-lg text-gray-600 mb-20 max-w-2xl mx-auto">
            The frontend and backend of who I am.
          </p>
        </motion.div>

        {/* Grid Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-stretch text-left"
        >
          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white transition duration-300 hover:shadow-[0_12px_28px_rgba(124,58,237,0.25)]"
          >
            <img
              src={profilePic}
              alt="Nathanael Wung"
              className="w-full h-full object-cover rounded-2xl transition duration-300"
            />
          </motion.div>

          {/* Typing Animated Text */}
          <div className="flex flex-col h-full justify-between text-[1.05rem] text-gray-800 leading-relaxed font-medium space-y-6">
            <TypingText content={
              `I’m Nathanael Wung, an <span class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Electrical & Computer Engineering student</span> at the <span class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">University of Toronto (2T7 + PEY)</span>, with intended minors in <span class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Artificial Intelligence</span> and <span class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Engineering Business</span>.`
            } />

            <TypingText content={
              `I love turning complex ideas into intuitive, elegant software. Whether it’s <span class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">frontend finesse</span> or <span class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">backend logic</span>, I’m driven by one question: <em>“How can I make this genuinely useful?”</em>`
            } />

            <TypingText content={
              `I thrive in <span class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">creative, collaborative spaces</span> — the kind where ideas fly fast, code gets reviewed, and a last-minute design tweak becomes the highlight of the day.`
            } />

            <TypingText content={
              `When I’m not deep in a React component or optimizing a Flask route, you’ll find me on the <span class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">basketball court</span> (yes, I'm the biggest LeBron fan) or planning my next <span class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">travel adventure</span>, or rewatching <span class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Interstellar</span> for the tenth time!`
            } />

            <TypingText content={
              `I'm always open to opportunities that blend <span class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">technology and impact</span>. I thrive in fast-paced, collaborative environments where I can keep learning and help build <span class="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">meaningful solutions</span>.`
            } />
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

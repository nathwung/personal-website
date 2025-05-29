import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import dailyCommuteImg from "../assets/daily-commute.jpg";
import monopolyImg from "../assets/monopoly.jpg";
import uoftHousingImg from "../assets/uoft-housing.jpg";
import blockShooterImg from "../assets/block-shooter.jpg";
import spookImg from "../assets/spook.jpg";
import pongImg from "../assets/pong.jpg";
import chatImg from "../assets/chat.jpg";
import notesImg from "../assets/notes.jpg";
import reversiImg from "../assets/reversi.jpg";

const projects = [
  {
    title: "UofT Housing",
    description:
      "A marketplace platform exclusively for University of Toronto students to sublet housing, find roommates, and buy/sell furniture. Built with React, Flask, and PostgreSQL, it features user authentication, real-time messaging between buyers and sellers, dynamic listing creation with images and filters, interactive maps, and secure email verification and password reset flows.",
    tags: ["React", "Flask", "PostgreSQL", "Python", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    image: uoftHousingImg,
    link: "https://github.com/nathwung/uoft-housing"
  },
  {
    title: "Monopoly",
    description:
      "A digital implementation of the Monopoly board game, developed in C with integrated graphics, sound, and keyboard input. It recreates the core mechanics of Monopoly in an interactive embedded format, allowing multiple players to take turns, roll dice, purchase properties, and navigate classic game events. The system features real-time VGA-rendered visuals, PS/2 keyboard input, and audio feedback, including dice roll sound effects and theme music on the title screen.",
    tags: ["C"],
    image: monopolyImg,
    link: "https://github.com/nathwung/monopoly"
  },
  {
    title: "The Daily Commute",
    description:
      "An interactive desktop map application built in C++ using GTK and EZGL, designed to simulate real-world urban navigation. Users can explore city maps, search for intersections, display POIs, and plan optimized routes using A* pathfinding — all enhanced with live traffic conditions, weather data, and transit overlays for an immersive commute experience. It also features a high-performance multi-location courier routing algorithm, powered by a greedy & 2-opt strategy with multithreaded Dijkstra precomputation and concurrent path/time caching.",
    tags: ["C++"],
    image: dailyCommuteImg,
    link: "https://github.com/nathwung/the-daily-commute"
  },
  {
    title: "Block Shooter",
    description:
      "A real-time arcade-style shooting game developed in Verilog and deployed on the DE1-SoC FPGA. The game features responsive player controls, dynamic enemy behavior, and real-time collision detection. Visuals are rendered via VGA output, while the 7-segment display tracks player score and health.",
    tags: ["Verilog"],
    image: blockShooterImg,
    link: "https://github.com/nathwung/block-shooter"
  },
  {
    title: "Flashcard Spook Busters",
    description:
      "A flashcard-style educational game where players bust ghosts by answering questions. Originally prototyped in Python, then developed with SwiftUI and SpriteKit, this project was built in 24 hours at NewHacks.",
    tags: ["Python", "SwiftUI"],
    image: spookImg,
    link: "https://github.com/nathwung/flashcard-spook-busters"
  },
  {
    title: "Pong Game",
    description:
      "A terminal-based Pong game built with C++, featuring real-time collision detection, ball physics, dynamic scoring, and escalating difficulty.",
    tags: ["C++"],
    image: pongImg,
    link: "https://github.com/nathwung/pong"
  },
  {
    title: "Messaging Website",
    description:
      "A secure, real-time chat application built with Vue.js and the Quasar Framework, integrated with Firebase Authentication and Realtime Database. The platform enables 1-on-1 messaging with live user presence, image sharing, and smart timestamps. Deployed seamlessly with Firebase Hosting.",
    tags: ["Vue.js", "Quasar Framework", "Firebase", "HTML", "CSS", "JavaScript"],
    image: chatImg,
    link: "https://github.com/nathwung/messaging"
  },
  {
    title: "Notes Website",
    description:
      "A secure note-taking application built with Vue.js, integrated with Firebase Authentication and Cloud Firestore. The platform enables real-time note editing and live writing statistics. Deployed seamlessly with Firebase Hosting.",
    tags: ["Vue.js", "Firebase", "HTML", "CSS", "JavaScript"],
    image: notesImg,
    link: "https://github.com/nathwung/notes"
  },
  {
    title: "Reversi AI",
    description:
      "A terminal-based Reversi game built with C, featuring a text-based user interface and an AI opponent powered by the minimax algorithm with alpha-beta pruning for fast decision making.",
    tags: ["C"],
    image: reversiImg,
    link: "https://github.com/nathwung/reversi-ai"
  }
];

export default function Projects() {
  const location = useLocation();
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-white via-[#eef1ff] to-[#e4ecff] text-gray-900">
      {/* Navbar */}
      <header className="bg-white">
        <nav className="max-w-7xl mx-auto w-full px-6 sm:px-10 py-5 flex justify-between items-center text-base font-medium">
          <div className="hidden sm:flex space-x-8 ml-auto">
            {["/", "/about", "/experience", "/projects", "/skills", "/resume", "/contact"].map((path, i) => {
              const names = ["Home", "About", "Experience", "Projects", "Skills", "Resume", "Contact"];
              return (
                <Link
                  key={i}
                  to={path}
                  className={`hover:text-purple-600 ${location.pathname === path ? "text-purple-600 font-semibold" : ""}`}
                >
                  {names[i]}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="w-full max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Where creativity meets code — my digital playground.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            const isExpanded = expanded[i] || false;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="relative group bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-[0_12px_28px_rgba(124,58,237,0.25)] transition duration-300 overflow-hidden text-left flex flex-col"
              >
                {/* Image with hover icon */}
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-60 sm:h-64 md:h-72 lg:h-80 rounded-t-xl" />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40"
                  >
                    <FiExternalLink className="text-purple-300 w-7 h-7" />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>

                <p className={`text-sm text-gray-700 ${isExpanded ? "" : "line-clamp-3"}`}>
                {project.description}
                </p>

                  {project.description.length > 100 && (
                    <button
                      onClick={() => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))}
                      className="mt-2 text-sm text-purple-600 hover:underline font-semibold"
                    >
                      {isExpanded ? "Show Less ▲" : "Read More ▼"}
                    </button>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4 mb-4">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-600 hover:underline flex items-center gap-1 font-medium"
                    >
                      Learn More <FiExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-[#f3f6fb]">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-6 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Nathanael Wung. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/nathwung" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/nathanael-wung-548348288/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-600" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

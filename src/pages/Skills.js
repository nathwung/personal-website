import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaServer } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaCode, FaDatabase, FaTools, FaCloud, FaComments, FaLanguage, FaTerminal, FaProjectDiagram, FaUsers  } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Skills() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

    const categories = [
    {
        title: "Frontend Development",
        icon: <FaCode className="text-purple-600 text-xl" />,
        skills: [
        "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js",
        "Quasar Framework", "Tailwind CSS", "SwiftUI", "Figma"
        ],
    },
    {
        title: "Backend Development",
        icon: <FaProjectDiagram className="text-purple-600 text-xl" />,
        skills: [
        "Node.js", "Flask", "Firebase", "REST APIs", "Microservices", "Authentication & Authorization"
        ],
    },
        {
        title: "Programming Languages",
        icon: <FaTerminal className="text-purple-600 text-xl" />,
        skills: [
        "C", "C++", "Python", "Java", "Assembly Language",
        "Verilog", "LaTeX", "MATLAB"
        ],
    },
    {
        title: "Databases",
        icon: <FaDatabase className="text-purple-600 text-xl" />,
        skills: [
        "PostgreSQL", "MySQL", "SQLAlchemy", "PhpMyAdmin",
        "Relational Modeling", "Query Optimization", "CRUD Operations", "Entity-Relationship (ER) Diagrams"
        ],
    },
    {
        title: "Cloud & Infrastructure",
        icon: <FaServer className="text-purple-600 text-xl" />,
        skills: [
        "AWS", "Docker", "CI/CD Pipeline", "Linux/Unix", "Vercel Hosting", "Render Deployment", "CORS Handling", "Environment Variables (.env)"
        ],
    },
    {
        title: "Testing & Version Control",
        icon: <FaTools className="text-purple-600 text-xl" />,
        skills: [
        "A/B Testing", "Unit Testing", "Integration Testing", "Test-Driven Development (TDD)", "Root Cause Analysis", "Process Mapping", "Git", "GitHub" 
        ],
    },
    {
        title: "Communication & Leadership",
        icon: <FaUsers className="text-purple-600 text-xl" />,
        skills: [
        "Cross-functional Collaboration", "Project Management", "Constructive Feedback", "Task Prioritization", "Agile Workflow", "Stakeholder Communication",
        "Mentorship & Peer Coaching", "Presentation & Public Speaking"
        ],
    },
    {
        title: "Spoken Languages",
        icon: <FaLanguage className="text-purple-600 text-xl" />,
        skills: ["English", "Chinese", "Indonesian"]
    }
    ];

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
                  className={`hover:text-purple-600 ${
                    location.pathname === path ? "text-purple-600 font-semibold" : ""
                  }`}
                >
                  {names[i]}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Skills
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            What I bring to the table.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => {
            const row = Math.floor(i / 3);
            const col = i % 3;
            const delay = row * 0.3 + col * 0.15;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 0.6 }}
                className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-[0_12px_28px_rgba(124,58,237,0.25)] transition duration-300 p-6 text-left"
              >
                <div className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-900">
                  {cat.icon}
                  {cat.title}
                </div>
                <ul className="space-y-2 text-sm text-gray-800">
                  {cat.skills.map((skill, j) => (
                    <li
                      key={j}
                      className="bg-gray-50 px-3 py-1.5 rounded-md shadow-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
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

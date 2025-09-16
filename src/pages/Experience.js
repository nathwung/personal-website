import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Briefcase, Users, GraduationCap, BadgeCheck, Calendar } from "lucide-react";

export default function Experience() {
  const location = useLocation();
  const [tab, setTab] = useState("work");

  const work = [
    {
      title: "Front-End Web Developer",
      org: "Educa8.Info",
      date: "May 2024 – Aug 2024",
      points: [
        "Developed dedicated school websites for students, teachers, parents, and administrators using Vue.js within the Quasar Framework, improving access and usability across user groups",
        "Collaborated with backend developers to resolve API and data sync issues, improving response times by 30% through payload optimization",
        "Validated user data interactions via MySQL and gathered client feedback to refine UX and ensure feature accuracy"
      ]
    }
  ];

  const leadership = [
        {
      title: "Digital Launchpad Associate",
      org: "You're Next Career Network",
      date: "Apr 2025 – Present",
      points: [
        "Developed an event sign-up platform with React and Firebase, streamlining registrations for 3,500+ students",
        "Built an event participation ranking using SQL queries to retrieve attendance data, boosting engagement by 55%",
        "Showcased sponsors on the main website, driving $120K+ in revenue to support student career development"
      ]
    },
    {
      title: "Senior Full-Stack Developer",
      org: "Engineers Without Borders: University of Toronto Chapter",
      date: "Jan 2025 – Apr 2025",
      points: [
        "Created and optimized the chapter’s website using React, TypeScript, and Node.js, improving load times by 25%",
        "Led and mentored a team of 6 developers, providing technical guidance and constructive feedback through code reviews and debugging sessions",
        "Built CI/CD pipelines to automate testing and deployment, enabling faster, more reliable releases"
      ]
    },
    {
      title: "Full-Stack Developer",
      org: "University of Toronto Machine Intelligence Student Team",
      date: "Oct 2024 – Apr 2025",
      points: [
        "Built dynamic event and alumni pages with React, Next.js, Tailwind CSS, and TypeScript, enabling scalable, real-time content updates",
        "Implemented Firebase auth and content management for secure, real-time updates without backend servers",
        "Reduced manual updates by 70% through a self-serve admin dashboard, enabling non-technical team members to manage site content independently"
      ]
    }
  ]

  const education = [
    {
      title: "BASc in Electrical & Computer Engineering + AI/Business Minors",
      org: "University of Toronto",
      date: "2023 — 2027"
    }
  ];

  const certifications = [
    { title: "MATLAB Onramp", org: "MathWorks" },
    { title: "Cambridge International AS & A Levels", org: "Cambridge International Education" },
    { title: "Cambridge International General Certificate of Secondary Education (IGCSE)", org: "Cambridge International Education" }
  ];

  const tabs = [
    { key: "work", icon: <Briefcase />, label: "Work" },
    { key: "leadership", icon: <Users />, label: "Leadership" },
    { key: "education", icon: <GraduationCap />, label: "Education" },
    { key: "certs", icon: <BadgeCheck />, label: "Certifications" }
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
                <Link key={i} to={path} className={`hover:text-purple-600 ${location.pathname === path ? "text-purple-600 font-semibold" : ""}`}>{names[i]}</Link>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Experience Section */}
      <main className="w-full max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Experience</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            My academic and professional journey.
        </p>

        <div className="flex justify-center">
            <div className="flex bg-white border border-gray-200 rounded-xl p-1 gap-1">
            {tabs.map(({ key, icon, label }) => (
                <button
                key={key}
                onClick={() => setTab(key)}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    tab === key ? "bg-purple-600 text-white" : "text-gray-700 hover:text-purple-600"
                }`}
                >
                {icon} {label}
                </button>
            ))}
            </div>
        </div>
        </motion.div>

        {/* Content */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {tab === "work" && (
              <motion.div
                key="work"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative ml-6 space-y-8 pl-4 before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-purple-500 before:via-indigo-500 before:to-blue-500 before:rounded"
              >
                {work.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                    className="relative"
                >
                    <div className="absolute -left-[1.4rem] top-0 translate-y-0 w-4 h-4 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 rounded-full border-4 border-white shadow z-20" />
                    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-[0_12px_28px_rgba(124,58,237,0.25)] transition duration-300 p-6 text-left overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 rounded-tl-2xl rounded-bl-2xl" />
                    <div className="pl-4">
                        <p className="flex items-center text-sm text-gray-500 mb-1">
                        <Calendar className="w-4 h-4 mr-1 text-purple-500" />
                        {item.date}
                        </p>
                        <h3 className="text-xl font-semibold text-purple-600">{item.title}</h3>
                        <p className="font-semibold text-black mb-3">{item.org}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {item.points.map((point, j) => (
                            <li key={j} className="leading-relaxed">{point}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </motion.div>
                ))}
              </motion.div>
            )}

            {tab === "leadership" && (
              <motion.div
                key="leadership"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative ml-6 space-y-8 pl-4 before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-purple-500 before:via-indigo-500 before:to-blue-500 before:rounded"
              >
                {leadership.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                    className="relative"
                >
                    <div className="absolute -left-[1.4rem] top-0 translate-y-0 w-4 h-4 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 rounded-full border-4 border-white shadow z-20" />
                    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-[0_12px_28px_rgba(124,58,237,0.25)] transition duration-300 p-6 text-left overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 rounded-tl-2xl rounded-bl-2xl" />
                    <div className="pl-4">
                        <p className="flex items-center text-sm text-gray-500 mb-1">
                        <Calendar className="w-4 h-4 mr-1 text-purple-500" />
                        {item.date}
                        </p>
                        <h3 className="text-xl font-semibold text-purple-600">{item.title}</h3>
                        <p className="font-semibold text-black mb-3">{item.org}</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {item.points.map((point, j) => (
                            <li key={j} className="leading-relaxed">{point}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </motion.div>
                ))}
              </motion.div>
            )}

            {tab === "education" && (
            <motion.div
            key="education"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
            >
            {education.map((edu, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-[0_12px_28px_rgba(124,58,237,0.25)] overflow-hidden w-full max-w-[90rem]"
                >
                {/* Gradient top bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-xl" />

                {/* Main content */}
                <div className="flex flex-col md:flex-row p-6 gap-6 md:gap-10">
                    {/* Left side: icon + degree + date */}
                    <div className="flex flex-col items-start md:w-1/3">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <GraduationCap className="text-purple-500 w-7 h-7" />
                    </div>
                        <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 leading-snug text-left">
                        BASc in Electrical &<br />
                        Computer Engineering
                        </h3>
                    <p className="text-sm text-gray-500 mt-4 flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {edu.date}
                    </p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px bg-gray-200" />

                    {/* Right side: school + minors */}
                    <div className="md:w-2/3 flex flex-col justify-center">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{edu.org}</h4>
                    <p className="font-semibold text-gray-800 mb-2">Intended Minors</p>
                    <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                        <li>Artificial Intelligence</li>
                        <li>Engineering Business</li>
                    </ul>
                    </div>
                </div>
                </motion.div>
            ))}
            </motion.div>
            )}

            {tab === "certs" && (
            <motion.div
            key="certs"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
            >
                {certifications.map((cert, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.2 }}
                    className="relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-[0_12px_28px_rgba(124,58,237,0.25)] transition duration-300 overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-xl" />
                    <div className="flex items-start gap-4 p-6">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <BadgeCheck className="text-purple-500 w-6 h-6" />
                        </div>
                    </div>
                    <div className="text-left">
                        <h3 className="text-lg font-semibold text-gray-900 leading-snug">{cert.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{cert.org}</p>
                    </div>
                    </div>
                </motion.div>
                ))}
            </motion.div>
            )}
          </AnimatePresence>
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
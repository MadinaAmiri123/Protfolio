import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFigma, SiMongodb } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    title: "Frontend Development",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
    ],
  },
  {
    title: "UI / UX Design",
    items: [{ name: "Figma", icon: <SiFigma className="text-pink-500" /> }],
  },
  {
    title: "Tools & Databases",
    items: [
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "VS Code", icon: <VscCode className="text-blue-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-sky-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
];

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative h-[320vh] bg-gradient-to-b from-[#020617] to-[#0F172A]"
    >
      {/* ===== Heading ===== */}
      <div className="h-screen flex flex-col items-center justify-center text-center px-[6%]">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold text-[#C7A35A]"
        >
          Skills & Expertise
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-gray-400 mt-4 max-w-xl"
        >
          Technologies and tools I use to design and build high-quality digital
          experiences.
        </motion.p>
      </div>

      {/* ===== Cards ===== */}
      {skills.map((group, index) => {
        const start = index / skills.length;
        const end = (index + 1) / skills.length;

        const opacity = useTransform(
          scrollYProgress,
          [start, start + 0.15, end - 0.15, end],
          [0, 1, 1, 0]
        );

        const y = useTransform(scrollYProgress, [start, end], [80, -80]);

        return (
          <motion.div
            key={group.title}
            style={{ opacity, y }}
            className="fixed inset-0 flex items-center justify-center px-[6%]"
          >
            <div
              className="max-w-4xl w-full
              bg-white/5 backdrop-blur-xl border border-white/10
              rounded-3xl p-14"
            >
              <h3 className="text-3xl font-medium text-[#C7A35A] mb-12">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-x-12 gap-y-8">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 min-w-[220px]"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center
                      border border-[#C7A35A]/40 bg-white/10 text-2xl"
                    >
                      {skill.icon}
                    </div>
                    <span className="text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Skills;

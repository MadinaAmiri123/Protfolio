import { useState } from "react";

import { motion } from "framer-motion";

import realEstate from "../assets/Real.png";

import Adei from "../assets/Adei.png";

import Elearning from "../assets/Elearning.png";

import Zomato from "../assets/Zomato wirfreming.png";

import Muslims from "../assets/Muslims communtiy.png";

import Saatosa from "../assets/Saatosa.png";

import { FaFigma } from "react-icons/fa";

import { SiVercel } from "react-icons/si";

const projects = [
  {
    title: "Real Estate",
    image: realEstate,
    link: "https://real-estate-l4wp.vercel.app/",
    type: "vercel",
    description:
      "A complete real estate web platform designed with UI/UX principles. It features property listings, search filters, modern layouts, and a smooth user experience for buyers and agents.",
  },

  {
    title: "Elearning Page",
    image: Elearning,
    link: "https://www.figma.com/design/kqccNWZpp1f6IjswuYLiTT/My-UI-projects?t=08ut8GQhPGUSoQ02-0",
    type: "figma",
    description:
      "A modern e-learning platform UI focused on structured courses, intuitive navigation, and an engaging learning experience for both students and instructors.",
  },

  {
    title: "Adei Hospital",
    image: Adei,
    link: "https://www.figma.com/design/kqccNWZpp1f6IjswuYLiTT/My-UI-projects?t=08ut8GQhPGUSoQ02-0",
    type: "figma",
    description:
      "A healthcare and hospital website UI designed to clearly present medical services and improve patient accessibility.",
  },
];

const moreProjects = [
  {
    title: "Zomato Wireframing",
    image: Zomato,
    link: "https://www.figma.com/design/kqccNWZpp1f6IjswuYLiTT/My-UI-projects",
    type: "figma",
    description:
      "A wireframing project inspired by Zomato, focusing on user flow, information architecture, and layout structure.",
  },

  {
    title: "Muslims Community",
    image: Muslims,
    link: "https://www.figma.com/design/kqccNWZpp1f6IjswuYLiTT/My-UI-projects",
    type: "figma",
    description:
      "A community platform designed for Muslims to connect, share events, and access useful resources.",
  },

  {
    title: "Saatosa",
    image: Saatosa,
    link: "https://saatosa-theta.vercel.app/",
    type: "vercel",
    description:
      "A responsive website focused on clean UI, fast performance, and a modern frontend experience.",
  },

  {
    title: "Skill Courses",
    image: Elearning,
    link: "https://skill-courses-delta.vercel.app/",
    type: "vercel",
    description:
      "A modern online learning platform designed with a clean and user-friendly interface.",
  },

  {
    title: "Vital Flow",
    image: Adei,
    link: "https://vitalflow-tau.vercel.app/",
    type: "vercel",
    description:
      "A modern responsive website focused on clean design and a smooth user experience.",
  },

  {
    title: "Netlinks",
    image: realEstate,
    link: "https://netlinks-five.vercel.app/",
    type: "vercel",
    description:
      "A responsive frontend project with a modern layout and clean user interface.",
  },

  {
    title: "Fashion Store",
    image: Muslims,
    link: "https://fashion-store-red-psi.vercel.app/",
    type: "vercel",
    description:
      "A modern fashion store website with a visually appealing and responsive interface.",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      className="relative bg-white/10 backdrop-blur-xl border border-[#C7A35A]/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 group"
    >
      {/* Image */}
      <div className="relative h-[420px] overflow-hidden rounded-t-3xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:blur-sm group-hover:scale-105"
        />

        {/* Information Overlay */}
        <div className="absolute inset-0 z-10 bg-[#0A0A0A]/50 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center pointer-events-none">
          <p className="text-base leading-relaxed text-center">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20 px-6 py-5 flex items-center justify-between bg-white/20 backdrop-blur-md border-t border-[#C7A35A]/50">
        {/* Project Name Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold text-lg hover:text-[#C7A35A] transition cursor-pointer"
        >
          {project.title}
        </a>

        {/* Icon Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-30 w-11 h-11 flex items-center justify-center rounded-full border border-[#C7A35A]/70 text-[#C7A35A] hover:bg-[#C7A35A]/20 hover:scale-110 transition cursor-pointer"
          aria-label={`Open ${project.title}`}
        >
          {project.type === "vercel" ? <SiVercel /> : <FaFigma />}
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="projects"
      className="relative py-32 px-[6%] md:px-[10%] bg-[#0A0A0A]"
    >
      {/* Heading */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#C7A35A]">
          My Projects
        </h2>

        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Explore some of my work in UI/UX and Frontend development.
        </p>
      </motion.div>

      {/* First Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* More Projects */}
      {showMore && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
            {moreProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* See More Button */}
      <div className="relative z-50 flex justify-center mt-16">
        {!showMore ? (
          <button
            type="button"
            onClick={() => setShowMore(true)}
            className="relative z-50 px-10 py-4 rounded-full bg-white/20 backdrop-blur-lg border border-[#C7A35A]/50 text-[#C7A35A] font-bold tracking-wide hover:bg-[#C7A35A]/80 hover:text-white hover:scale-105 transition cursor-pointer"
          >
            See More Projects
          </button>
        ) : (
          <a
            href="https://www.figma.com/design/kqccNWZpp1f6IjswuYLiTT/My-UI-projects?t=08ut8GQhPGUSoQ02-0"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 px-10 py-4 rounded-full bg-[#C7A35A] text-white font-bold tracking-wide hover:scale-105 transition cursor-pointer"
          >
            View All on Figma
          </a>
        )}
      </div>
    </section>
  );
};

export default Projects;

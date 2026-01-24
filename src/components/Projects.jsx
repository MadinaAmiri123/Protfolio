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
    figma: "https://real-estate-l4wp.vercel.app/",
    description:
      "A complete real estate web platform designed with UI/UX principles. It features property listings, search filters, modern layouts, and a smooth user experience for buyers and agents.",
  },
  {
    title: "Elearning Page",
    image: Elearning,
    figma:
      "https://www.figma.com/design/kqccNWZpp1f6IjswuYLiTT/My-UI-projects?t=08ut8GQhPGUSoQ02-0",
    description:
      "A modern e-learning platform UI focused on structured courses, intuitive navigation, and an engaging learning experience for both students and instructors.",
  },
  {
    title: "Adei Hospital",
    image: Adei,
    figma:
      "https://www.figma.com/design/kqccNWZpp1f6IjswuYLiTT/My-UI-projects?t=08ut8GQhPGUSoQ02-0",
    description:
      "A healthcare and hospital website UI designed to clearly present medical services, improve patient accessibility, and build trust through a clean, professional design.",
  },
];

const moreProjects = [
  {
    title: "Zomato Wireframing",
    image: Zomato,
    figma: "https://www.figma.com/design/kqccNWZpp1f6IjswuYLiTT/My-UI-projects",
    description:
      "A wireframing project inspired by Zomato, focusing on user flow, information architecture, and layout structure for a food delivery platform.",
  },
  {
    title: "Muslims Community",
    image: Muslims,
    figma: "https://www.figma.com/design/kqccNWZpp1f6IjswuYLiTT/My-UI-projects",
    description:
      "A community platform UI designed for Muslims to connect, share events, and access useful resources with a simple, inclusive, and user-friendly interface.",
  },
  {
    title: "Saatosa",
    image: Saatosa,
    figma: "https://saatosa-theta.vercel.app/",
    description:
      "A responsive website built and deployed on Vercel, focused on clean UI, fast performance, and a modern frontend experience.",
  },
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-32 px-[6%] md:px-[10%] bg-[#0A0A0A]">
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

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {[...projects, ...(showMore ? moreProjects : [])].map((project, i) => (
          <motion.div
            key={i}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative bg-white/10 backdrop-blur-xl border border-[#C7A35A]/60
            rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform
            transform hover:-translate-y-2 group"
          >
            {/* Image */}
            <div className="relative h-[420px] overflow-hidden rounded-t-3xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700
                group-hover:scale-105"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-[#0A0A0A]/80 text-white p-6
                opacity-0 group-hover:opacity-100 transition-opacity flex flex-col
                justify-center rounded-t-3xl"
              >
                <div className="overflow-y-auto max-h-[calc(100%-60px)] scrollbar-hide">
                  <p className="text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className="px-6 py-5 flex items-center justify-between
              bg-white/20 backdrop-blur-md border-t border-[#C7A35A]/50"
            >
              <h3 className="text-white font-semibold text-lg">
                {project.title}
              </h3>

              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full
                border border-[#C7A35A]/70 text-[#C7A35A]
                hover:bg-[#C7A35A]/20 hover:scale-110 transition cursor-pointer"
              >
                {project.figma.includes("vercel") ? <SiVercel /> : <FaFigma />}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More */}
      <div className="flex justify-center mt-16">
        {!showMore ? (
          <button
            onClick={() => setShowMore(true)}
            className="px-10 py-4 rounded-full bg-white/20 backdrop-blur-lg
            border border-[#C7A35A]/50 text-[#C7A35A] font-bold tracking-wide
            hover:bg-[#C7A35A]/80 hover:text-white hover:scale-105 transition cursor-pointer"
          >
            See More Projects
          </button>
        ) : (
          <a
            href="https://www.figma.com/design/kqccNWZpp1f6IjswuYLiTT/My-UI-projects?t=08ut8GQhPGUSoQ02-0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full bg-[#C7A35A]
            text-white font-bold tracking-wide
            hover:scale-105 transition cursor-pointer"
          >
            View All on Figma
          </a>
        )}
      </div>
    </section>
  );
};

export default Projects;

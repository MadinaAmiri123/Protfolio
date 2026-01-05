import { motion } from "framer-motion";
import realEstate from "../assets/realestate.svg";
import furniture from "../assets/Furniture.svg";
import courses from "../assets/Courses.svg";
import { FaFigma } from "react-icons/fa";

const projects = [
  {
    title: "Real Estate",
    image: realEstate,
    figma:
      "https://www.figma.com/design/qepK4mhKvnvaB5poJddAFZ/Untitled?node-id=0-1&p=f&t=4XPbk3N07qUfWocn-0",
    description:
      "A complete real estate web platform designed with UI/UX principles in mind. Includes property listings, search filters, user-friendly interface, and interactive features.",
  },
  {
    title: "Furniture",
    image: furniture,
    figma:
      "https://www.figma.com/design/qepK4mhKvnvaB5poJddAFZ/Untitled?node-id=0-1&p=f&t=4XPbk3N07qUfWocn-0",
    description:
      "An e-commerce furniture platform designed to enhance user experience. Features include product showcase, responsive layout, interactive 3D previews, and smooth navigation.",
  },
  {
    title: "Courses",
    image: courses,
    figma:
      "https://www.figma.com/design/qepK4mhKvnvaB5poJddAFZ/Untitled?node-id=0-1&p=f&t=4XPbk3N07qUfWocn-0",
    description:
      "A learning management system designed to make course access simple and intuitive. Includes interactive dashboards, course progress tracking, and responsive design.",
  },
];

const Projects = () => {
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
        {projects.map((project, i) => (
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
            {/* Image + hover overlay */}
            <div className="relative h-[420px] overflow-hidden rounded-t-3xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700
                group-hover:scale-105"
              />

              {/* Overlay for text */}
              <div
                className="absolute inset-0 bg-[#0A0A0A]/80 text-white font-simebold p-6
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

            {/* Footer (name + Figma) */}
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
                border border-[#C7A35A]/70 text-[#C7A35A] hover:bg-[#C7A35A]/20 hover:scale-110 transition"
              >
                <FaFigma />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Projects */}
      <div className="flex justify-center mt-16">
        <a
          href="https://www.figma.com/design/qepK4mhKvnvaB5poJddAFZ/Untitled?node-id=0-1&p=f&t=4XPbk3N07qUfWocn-0"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 rounded-full bg-white/20 backdrop-blur-lg border border-[#C7A35A]/50
          text-[#C7A35A] font-bold tracking-wide hover:bg-[#C7A35A]/80 hover:text-white hover:scale-105 transition"
        >
          See More Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;

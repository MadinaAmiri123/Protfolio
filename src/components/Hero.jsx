import { motion } from "framer-motion";
import heroImg from "../assets/protfolio1.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-[6%] md:px-[10%]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1E293B]/80" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-3xl text-white"
      >
        <h1 className="text-[34px] sm:text-[42px] md:text-[52px] font-bold leading-tight">
          Crafting modern, meaningful,
          <br />
          <span className="text-[#C7A35A]">user-centered</span> digital
          experiences
        </h1>

        <p className="mt-6 text-lg text-gray-200 leading-relaxed">
          Hi, I’m <span className="font-bold  text-white">Madina Amiri</span> —
          a passionate{" "}
          <span className="text-[#C7A35A]">Frontend Developer</span> &{" "}
          <span className="text-[#C7A35A]">UI/UX Designer</span> from
          Afghanistan. I design and build elegant interfaces that connect people
          with technology.
        </p>

        {/* Buttons with links to sections */}
        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#C7A35A] text-[#1E293B] font-semibold rounded-xl hover:scale-105 transition text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/40 rounded-xl hover:bg-white/10 transition text-center"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

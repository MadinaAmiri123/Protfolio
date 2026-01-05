import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#0F172A] to-[#020617]
      py-28 md:py-36 px-[6%] md:px-[10%]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 relative">
        {/* Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#C7A35A]/40" />

        {/* ABOUT */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10"
        >
          <h2 className="text-4xl font-semibold text-[#C7A35A] mb-6">
            About Me
          </h2>

          <p className="text-gray-200 leading-8">
            I’m a dedicated{" "}
            <span className="text-white font-medium">Frontend Developer</span>{" "}
            and <span className="text-white font-medium">UI/UX Designer</span>{" "}
            from Afghanistan, passionate about crafting digital products that
            blend visual clarity with functional design. My approach is deeply
            user-centered, ensuring every interface feels intuitive, accessible,
            and purposeful.
            <br />
            <br />
            Through hands-on projects, I’ve refined my skills in both design and
            development. Currently, I’m expanding my expertise in{" "}
            <span className="text-[#C7A35A]">Backend Development</span> with the
            ambition of becoming a well-rounded Full-Stack Developer.
          </p>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10"
        >
          <h2 className="text-4xl font-semibold text-[#C7A35A] mb-6">
            Education
          </h2>

          <p className="text-gray-200 leading-8">
            I completed my school education and studied two semesters of{" "}
            <span className="text-white font-medium">
              Computer Science at Allama University
            </span>
            . Due to current circumstances, I was unable to continue my studies
            there.
            <br />
            <br />
            To continue learning, I joined{" "}
            <span className="text-white font-medium">Upskill Academy</span>,
            where I completed professional programs in UI/UX Design and Frontend
            Development, and I am currently studying Backend Development. These
            programs provided me with recognized certificates and practical
            experience that support my goal of becoming a Full-Stack Developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

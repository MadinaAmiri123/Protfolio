// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import { useRef, useState } from "react";
// import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

// const Contact = () => {
//   const formRef = useRef();
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus("");

//     emailjs
//       .sendForm(
//         "service_bwmtgtq",
//         "template_mhcrjwy",
//         formRef.current,
//         "OxAEEhKwvf_TNfWPS"
//       )
//       .then(
//         () => {
//           setStatus("success");
//           setLoading(false);
//           formRef.current.reset();
//         },
//         () => {
//           setStatus("error");
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="bg-gradient-to-b from-[#D0E1FF] to-[#A8CFFF] py-32 px-[6%] md:px-[10%]"
//     >
//       {/* Heading */}
//       <motion.div
//         initial={{ y: 30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-center mb-24"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-[#0F3F3A]">
//           Get in Touch
//         </h2>
//         <p className="text-[#0F3F3A]/90 mt-4 max-w-xl mx-auto">
//           I'm always open to discussing new projects, collaborations, or
//           opportunities. Drop me a message and let's create something amazing
//           together!
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ x: -80, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-[#0F3F3A]/90 leading-7 mb-10 max-w-md">
//             Have a question or want to work together? Reach out via email or
//             connect with me on GitHub, LinkedIn, or WhatsApp. I’ll respond as
//             soon as possible and I’m excited to hear from you!
//           </p>

//           <p className="text-[#0F3F3A]/80 mb-2 font-medium">Email</p>
//           <a
//             href="mailto:amirimadina2@gmail.com"
//             className="text-[#0F3F3A] font-medium hover:underline"
//           >
//             amirimadina2@gmail.com
//           </a>

//           <div className="h-[1px] bg-[#0F3F3A]/20 mt-6 mb-10 w-64" />

//           {/* SOCIAL */}
//           <div className="flex gap-6 text-xl">
//             <a
//               href="https://github.com/MadinaAmiri123"
//               target="_blank"
//               className="w-11 h-11 bg-[#0F3F3A] text-white rounded-full flex items-center justify-center hover:scale-110 transition"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/adela-amiri"
//               target="_blank"
//               className="w-11 h-11 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:scale-110 transition"
//             >
//               <FaLinkedinIn />
//             </a>
//             <a
//               href="https://wa.me/"
//               target="_blank"
//               className="w-11 h-11 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:scale-110 transition"
//             >
//               <FaWhatsapp />
//             </a>
//           </div>
//         </motion.div>

//         {/* RIGHT FORM */}
//         <motion.div
//           initial={{ x: 80, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <form
//             ref={formRef}
//             onSubmit={sendEmail}
//             className="space-y-7 bg-blue-200/30 backdrop-blur-xl
//               border border-blue-400/40 rounded-3xl p-10 shadow-lg"
//           >
//             {/* Name */}
//             <div>
//               <label className="text-sm text-[#0F3F3A]/80">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 placeholder="Your full name"
//                 className="w-full mt-2 px-5 py-3 rounded-xl
//                   bg-white/30 backdrop-blur border border-white/30
//                   outline-none focus:bg-white/50
//                   focus:shadow-[0_0_25px_rgba(15,63,58,0.4)]
//                   transition-all duration-300"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm text-[#0F3F3A]/80">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="Your email address"
//                 className="w-full mt-2 px-5 py-3 rounded-xl
//                   bg-white/30 backdrop-blur border border-white/30
//                   outline-none focus:bg-white/50
//                   focus:shadow-[0_0_25px_rgba(15,63,58,0.4)]
//                   transition-all duration-300"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="text-sm text-[#0F3F3A]/80">Message</label>
//               <textarea
//                 name="message"
//                 rows="5"
//                 required
//                 placeholder="Write your message..."
//                 className="w-full mt-2 px-5 py-3 rounded-xl
//                   bg-white/30 backdrop-blur border border-white/30
//                   outline-none resize-none
//                   focus:bg-white/50
//                   focus:shadow-[0_0_25px_rgba(15,63,58,0.4)]
//                   transition-all duration-300"
//               />
//             </div>

//             {/* Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               disabled={loading}
//               type="submit"
//               className="w-full py-3 rounded-full
//                 bg-[#0F3F3A] text-[#C89B5A] font-medium tracking-wide
//                 disabled:opacity-50 transition"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </motion.button>

//             {/* Status */}
//             {status === "success" && (
//               <p className="text-green-600 text-center mt-2">
//                 ✅ Message sent successfully
//               </p>
//             )}
//             {status === "error" && (
//               <p className="text-red-600 text-center mt-2">
//                 ❌ Something went wrong, please try again.
//               </p>
//             )}
//           </form>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_bwmtgtq",
        "template_mhcrjwy",
        formRef.current,
        "OxAEEhKwvf_TNfWPS"
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] py-32 px-[6%] md:px-[10%]"
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
          Get in Touch
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl mx-auto">
          Have a project or just want to say hi? Send me a message and let's
          create something amazing together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 leading-7 mb-10 max-w-md">
            I’m always open to discussing new ideas, collaborations, or
            projects. Reach out and we can start turning your vision into a
            reality with clean, modern, and user-friendly designs.
          </p>

          <p className="text-[#C7A35A] mb-2 font-medium">Email</p>
          <a
            href="mailto:amirimadina2@gmail.com"
            className="text-white font-medium hover:underline"
          >
            amirimadina2@gmail.com
          </a>

          <div className="h-[1px] bg-gray-300/30 mt-6 mb-10 w-64" />

          {/* SOCIAL */}
          <div className="flex gap-6 text-xl">
            <a
              href="https://github.com/MadinaAmiri123"
              target="_blank"
              className="w-12 h-12 bg-white/20 text-[#C7A35A] rounded-full flex items-center justify-center hover:scale-110 transition-shadow shadow-lg"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/madina-amiri/"
              target="_blank"
              className="w-12 h-12 bg-white/20 text-[#C7A35A] rounded-full flex items-center justify-center hover:scale-110 transition-shadow shadow-lg"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              className="w-12 h-12 bg-white/20 text-[#C7A35A] rounded-full flex items-center justify-center hover:scale-110 transition-shadow shadow-lg"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6 relative
              bg-white/20 backdrop-blur-3xl
              border border-white/30 
              rounded-3xl p-12 shadow-xl
              before:absolute before:inset-0 before:rounded-3xl before:bg-white/10 before:backdrop-blur-2xl before:-z-10"
          >
            {/* Name */}
            <div>
              <label className="text-sm text-gray-800 font-bold">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full mt-2 px-5 py-3 rounded-xl
                  bg-white/69 backdrop-blur border border-white/30
                  outline-none focus:bg-white/30
                  focus:shadow-[0_0_25px_rgba(255,255,255,0.3)]
                  transition-all duration-300 text-gray-900"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-800 font-bold">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="w-full mt-2 px-5 py-3 rounded-xl
                  bg-white/69 backdrop-blur border border-white/30
                  outline-none focus:bg-white/30
                  focus:shadow-[0_0_25px_rgba(255,255,255,0.3)]
                  transition-all duration-300 text-gray-900"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-800 font-bold">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Write your message..."
                className="w-full mt-2 px-5 py-3 rounded-xl
                  bg-white/69 backdrop-blur border border-white/30
                  outline-none resize-none
                  focus:bg-white/30
                  focus:shadow-[0_0_25px_rgba(255,255,255,0.3)]
                  transition-all duration-300 text-gray-900"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              type="submit"
              className="w-full py-3 rounded-full border
                bg-white/50 text-[#0F3F3A] font-medium tracking-wide
                disabled:opacity-50 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {/* Status */}
            {status === "success" && (
              <p className="text-green-600 text-center mt-2">
                ✅ Your message has been sent!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center mt-2">
                ❌ Something went wrong
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

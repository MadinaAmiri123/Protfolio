import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Hero />

      <Projects />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-b from-[#03051e] via-[#06102a] to-black text-slate-100"
          : "bg-gradient-to-b from-white to-slate-100 text-slate-900"
      }`}
    >
      {/* <h1>Hello World </h1> */}
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Hero theme={theme} />
      <Projects theme={theme} />
      <Experience />

      <Education />
      <Certifications theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default App;

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

const App = () => {
  const { mode, setMode } = useTheme();

  return (
    <div className="min-h-screen">
      <div className="atmosphere" aria-hidden="true" />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-contrast"
      >
        Skip to content
      </a>

      <Header mode={mode} setMode={setMode} />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>

      <Footer />
    </div>
  );
};

export default App;

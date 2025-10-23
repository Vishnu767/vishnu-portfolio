import Navbar from './components/Navigation/Navbar';
import Hero from './components/Sections/Hero';
import Experience from './components/Sections/Experience';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Education from './components/Sections/Education';
import Accomplishments from './components/Sections/Accomplishments';
import Contact from './components/Sections/Contact';
import './styles/global.css';
import './styles/animations.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Accomplishments />
        <Contact />
      </main>
    </>
  )
}

export default App

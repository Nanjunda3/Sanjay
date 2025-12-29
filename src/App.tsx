import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
      <AIChatbot />
    </div>
  );
}

export default App;

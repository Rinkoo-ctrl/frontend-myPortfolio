import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 selection:bg-primary-500 selection:text-white relative">
      {/* Global Particle Background */}
      <ParticleBackground />
      
      {/* Content Layer - ensuring it sits above the canvas */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
        </main>
        <Contact />
      </div>
    </div>
  );
}

export default App;
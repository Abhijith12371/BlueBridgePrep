import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Topics from './components/Topics';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden neon-bg-primary">
      {/* Global Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="neon-bg-secondary absolute inset-0"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-pink-500/30 to-cyan-500/30 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-yellow-500/20 rounded-full blur-2xl animate-float-delayed" />
        <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-gradient-to-r from-cyan-500/40 to-pink-500/40 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-r from-yellow-500/25 to-purple-500/25 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full blur-xl animate-float-delayed" />
        
        {/* Global Neon Particles */}
        <div className="neon-particles">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="neon-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
      <Hero />
      <About />
      <Topics />
      <Demo />
      <Testimonials />
      <CTA />
      <Footer />
      </div>
    </div>
  );
}

export default App;
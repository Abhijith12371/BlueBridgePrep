import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 transform rotate-45">
          <div className="w-32 h-32 border-2 border-pink-500 animate-spin-slow shadow-lg shadow-pink-500/50"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform -rotate-45">
          <div className="w-24 h-24 border-2 border-cyan-500 animate-spin-slow shadow-lg shadow-cyan-500/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Master Logical Reasoning with{' '}
            <span className="gradient-text">
              BlueBridge Prep
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Smart tricks, curated practice, and immersive learning – all in one place.
            Master all 10 logical reasoning topics with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('topics')}
              className="neon-button group flex items-center gap-3"
            >
              <Play className="group-hover:translate-x-1 transition-transform" size={20} />
              Start Learning
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="group neon-border text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <BookOpen className="group-hover:rotate-12 transition-transform" size={20} />
              View Syllabus
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-blue-400 hover:text-purple-400 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
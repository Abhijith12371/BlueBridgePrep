import React, { useEffect, useState } from 'react';
import { Rocket, Star, BookOpen } from 'lucide-react';

const CTA: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-20">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Star className="text-pink-400/40 glow-text" size={24} />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float-delayed">
          <BookOpen className="text-cyan-400/40 glow-text" size={32} />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float">
          <Rocket className="text-yellow-400/40 glow-text" size={28} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 neon-border bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-8">
            <Star className="fill-yellow-400 text-yellow-400" size={16} />
            <span className="text-sm font-medium text-white">Join 50,000+ successful students</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Crack Your Exam?
            <br />
            <span className="gradient-text">
              Start Free Today
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed">
            Get instant access to all 10 reasoning topics, 100+ smart tricks, 
            and 1000+ practice questions. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={scrollToTop}
              className="neon-button group flex items-center gap-3 text-xl px-10 py-5"
            >
              <Rocket className="group-hover:rotate-12 transition-transform" size={24} />
              Start Learning Now
            </button>
            
            <button className="group neon-border text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              <BookOpen className="group-hover:rotate-12 transition-transform" size={24} />
              Download Syllabus
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <span>Free forever access</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
              <span>No hidden charges</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
              <span>Instant activation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
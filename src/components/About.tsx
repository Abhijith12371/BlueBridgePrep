import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, BookOpen, Target, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ topics: 0, tricks: 0, questions: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const intervals = [
        { key: 'topics', target: 10 },
        { key: 'tricks', target: 100 },
        { key: 'questions', target: 1000 }
      ];

      intervals.forEach(({ key, target }) => {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCounters(prev => ({ ...prev, [key]: target }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
          }
        }, 16);
      });
    }
  }, [isVisible]);

  const features = [
    {
      icon: <Lightbulb className="text-yellow-500" size={48} />,
      title: "Smart Tricks",
      description: "Learn proven techniques and shortcuts to solve complex reasoning problems in seconds."
    },
    {
      icon: <BookOpen className="text-blue-500" size={48} />,
      title: "Step-by-Step Explanations",
      description: "Every question comes with detailed solutions to help you understand the logic behind answers."
    },
    {
      icon: <Target className="text-green-500" size={48} />,
      title: "Exam-Focused Content",
      description: "Curated content specifically designed for competitive exams like CAT, Banking, SSC, and UPSC."
    },
    {
      icon: <Trophy className="text-purple-500" size={48} />,
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics and performance insights."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Why Choose BlueBridge Prep?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of successful students who have mastered logical reasoning 
            with our comprehensive and engaging learning platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`neon-card feature-card p-6 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="lg:pl-8">
            <div className="neon-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Our Platform at a Glance
              </h3>
              
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-2">
                    {counters.topics}
                  </div>
                  <div className="text-gray-300 font-medium">Complete Topics</div>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-2">
                    {counters.tricks}+
                  </div>
                  <div className="text-gray-300 font-medium">Smart Tricks</div>
                </div>
                
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-2">
                    {counters.questions}+
                  </div>
                  <div className="text-gray-300 font-medium">Practice Questions</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="neon-button inline-block">
                  <span className="font-semibold text-white">100% Exam-Ready Content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default About;
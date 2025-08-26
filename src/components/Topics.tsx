import React, { useState } from 'react';
import { logicalReasoningData } from '../data/topics';
import { Topic } from '../types';
import Modal from './Modal';
import { 
  Hash, 
  Code, 
  Users, 
  Navigation, 
  Users2, 
  GitBranch, 
  Link, 
  Database, 
  Calendar, 
  Brain 
} from 'lucide-react';

const Topics: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const topicIcons = [
    Hash,
    Code,
    Users,
    Navigation,
    Users2,
    GitBranch,
    Link,
    Database,
    Calendar,
    Brain
  ];

  const colors = [
    'from-blue-500 to-blue-600',
    'from-purple-500 to-purple-600',
    'from-green-500 to-green-600',
    'from-orange-500 to-orange-600',
    'from-pink-500 to-pink-600',
    'from-teal-500 to-teal-600',
    'from-red-500 to-red-600',
    'from-indigo-500 to-indigo-600',
    'from-yellow-500 to-yellow-600',
    'from-gray-500 to-gray-600'
  ];

  const handleTopicClick = (topic: Topic) => {
    setSelectedTopic(topic);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTopic(null);
  };

  return (
    <section id="topics" className="py-20 relative">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Master All 10 Reasoning Topics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Click on any topic to explore detailed concepts, smart tricks, and practice questions. 
            Each module is designed to build your confidence step by step.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {logicalReasoningData.LogicalReasoningGuide.map((topic, index) => {
            const Icon = topicIcons[index];
            const colorClass = colors[index];
            
            return (
              <div
                key={index}
                onClick={() => handleTopicClick(topic)}
                className="group cursor-pointer topic-card"
              >
                <div className="neon-card rounded-2xl overflow-hidden">
                  {/* Icon Header */}
                  <div className={`topic-header bg-gradient-to-r ${colorClass} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <Icon size={40} className="topic-icon mb-4" />
                      <h3 className="text-lg font-bold leading-tight text-white">
                        {topic.TopicName}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {topic.Concept}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{topic.Tricks.length} Smart Tricks</span>
                      <span>{topic.SampleQuestions.length} Questions</span>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-cyan-500/30">
                      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-4"></div>
                      <div className="flex items-center gradient-text text-sm font-medium group-hover:text-white transition-colors duration-300">
                        <span>Explore Topic</span>
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        topic={selectedTopic}
      />
    </section>
  );
};

export default Topics;
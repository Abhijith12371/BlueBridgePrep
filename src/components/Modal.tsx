import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Topic } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: Topic | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, topic }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !topic) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative neon-card rounded-3xl shadow-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold relative z-10">{topic.TopicName}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors relative z-10 neon-border"
            >
              <X size={24} />
            </button>
          </div>
          <p className="mt-2 text-gray-200 relative z-10">{topic.Concept}</p>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Tricks Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Smart Tricks
            </h3>
            <div className="grid gap-3">
              {topic.Tricks.map((trick, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-300">{trick}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Example Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Example
            </h3>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-green-500/30">
              <p className="text-gray-300 font-mono">{topic.Example}</p>
            </div>
          </div>
          
          {/* Sample Questions */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Practice Questions
            </h3>
            <div className="grid gap-4">
              {topic.SampleQuestions.slice(0, 5).map((q, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-white font-medium mb-2">Q{index + 1}: {q.Question}</p>
                      <p className="text-green-400 font-semibold">Answer: {q.Answer}</p>
                    </div>
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm font-medium ml-4">
                      #{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-400">+ {topic.SampleQuestions.length - 5} more practice questions available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
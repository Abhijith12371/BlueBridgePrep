import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';

interface DemoQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const Demo: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const demoQuestions: DemoQuestion[] = [
    {
      question: "What comes next in the series: 2, 6, 12, 20, ?",
      options: ["26", "30", "32", "28"],
      correct: 1,
      explanation: "The differences are 4, 6, 8... Next difference is 10, so 20 + 10 = 30"
    },
    {
      question: "If CAT = DBU, then DOG = ?",
      options: ["EPH", "FOH", "DOG", "EPG"],
      correct: 0,
      explanation: "Each letter is shifted +1 position. D→E, O→P, G→H = EPH"
    }
  ];

  const question = demoQuestions[currentQuestion];

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const resetDemo = () => {
    setCurrentQuestion((prev) => (prev + 1) % demoQuestions.length);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const isCorrect = selectedAnswer === question.correct;

  return (
    <section className="py-20 relative">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Try Our Interactive Demo
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience our learning methodology with these sample questions. 
            See how we make complex reasoning simple!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="neon-card rounded-3xl overflow-hidden shadow-3xl">
            {/* Question Header */}
            <div className="bg-gradient-to-r from-pink-600 to-cyan-600 text-white p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-cyan-500/30 animate-pulse"></div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white relative z-10">Demo Question {currentQuestion + 1}</h3>
                <div className="neon-border bg-white/10 px-3 py-1 rounded-full text-sm relative z-10">
                  Interactive Practice
                </div>
              </div>
              <p className="text-lg leading-relaxed text-white relative z-10">{question.question}</p>
            </div>

            {/* Options */}
            <div className="p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {question.options.map((option, index) => {
                  let buttonClass = "p-4 rounded-xl border-2 transition-all duration-300 text-left font-medium ";
                  
                  if (showResult) {
                    if (index === question.correct) {
                      buttonClass += "neon-card border-green-400 text-green-300 shadow-lg shadow-green-400/50";
                    } else if (index === selectedAnswer && index !== question.correct) {
                      buttonClass += "neon-card border-red-400 text-red-300 shadow-lg shadow-red-400/50";
                    } else {
                      buttonClass += "neon-card border-gray-500 text-gray-300";
                    }
                  } else {
                    buttonClass += "neon-card border-cyan-400 text-white cursor-pointer transform hover:scale-105";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => !showResult && handleAnswerSelect(index)}
                      disabled={showResult}
                      className={buttonClass}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showResult && index === question.correct && (
                          <CheckCircle className="text-green-400" size={20} />
                        )}
                        {showResult && index === selectedAnswer && index !== question.correct && (
                          <XCircle className="text-red-400" size={20} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Result */}
              {showResult && (
                <div className="animate-fadeIn">
                  <div className={`neon-card p-6 rounded-2xl mb-6 ${isCorrect ? 'border-green-400 shadow-lg shadow-green-400/30' : 'border-red-400 shadow-lg shadow-red-400/30'}`}>
                    <div className="flex items-center mb-3">
                      {isCorrect ? (
                        <CheckCircle className="text-green-400 mr-3" size={24} />
                      ) : (
                        <XCircle className="text-red-400 mr-3" size={24} />
                      )}
                      <h4 className={`font-bold text-lg ${isCorrect ? 'text-green-300' : 'text-red-300'}`}>
                        {isCorrect ? 'Correct! Well done!' : 'Not quite right, but good try!'}
                      </h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-semibold">Explanation: </span>
                      {question.explanation}
                    </p>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={resetDemo}
                      className="neon-button flex items-center gap-3 mx-auto"
                    >
                      <RefreshCw size={20} />
                      Try Next Question
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {!showResult && (
            <div className="text-center mt-8">
              <p className="text-gray-300">
                Select an answer to see detailed explanation and smart tricks!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Demo;
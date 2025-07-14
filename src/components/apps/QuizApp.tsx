import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const QuizApp: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions: Question[] = [
    {
      question: "What's my favorite color?",
      options: ["Blue", "Pink", "Purple", "Green"],
      correct: 1
    },
    {
      question: "What's my biggest dream?",
      options: ["Travel the world", "Become famous", "Spend forever with you", "Win the lottery"],
      correct: 2
    },
    {
      question: "What makes me happiest?",
      options: ["Money", "Your smile", "Video games", "Food"],
      correct: 1
    },
    {
      question: "What's my love language?",
      options: ["Gifts", "Acts of service", "Words of affirmation", "Quality time"],
      correct: 3
    },
    {
      question: "What's our song?",
      options: ["Perfect by Ed Sheeran", "All of Me by John Legend", "Thinking Out Loud", "All of the above"],
      correct: 3
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizComplete(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Perfect! You know me too well 😍";
    if (percentage >= 80) return "Amazing! You really understand me 🥰";
    if (percentage >= 60) return "Pretty good! We're getting closer 😊";
    return "We need to spend more time together! 💕";
  };

  if (quizComplete) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl">🎉</span>
        </div>
        
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Quiz Complete!</h2>
        
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 mb-6 border border-pink-200">
          <div className="text-4xl font-bold text-pink-600 mb-2">{score}/{questions.length}</div>
          <p className="text-pink-700">{getScoreMessage()}</p>
        </div>
        
        <button
          onClick={resetQuiz}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl transition-all flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-pink-600">How Well Do You Know Me?</h2>
        <div className="text-sm text-pink-500">
          {currentQuestion + 1} / {questions.length}
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 mb-6 border border-pink-200">
        <h3 className="text-lg font-medium text-pink-700 mb-4">
          {questions[currentQuestion].question}
        </h3>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && handleAnswer(index)}
              disabled={showResult}
              className={`
                w-full p-3 rounded-lg text-left transition-all flex items-center justify-between
                ${showResult 
                  ? index === questions[currentQuestion].correct
                    ? 'bg-green-200 border-green-400 border-2'
                    : index === selectedAnswer
                      ? 'bg-red-200 border-red-400 border-2'
                      : 'bg-gray-100 border-gray-300'
                  : 'bg-white border-pink-200 hover:bg-pink-50 hover:border-pink-300'
                } border
              `}
            >
              <span className="text-pink-700">{option}</span>
              {showResult && (
                <div>
                  {index === questions[currentQuestion].correct && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                  {index === selectedAnswer && index !== questions[currentQuestion].correct && (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-sm text-pink-600">Score: {score}/{currentQuestion + (showResult ? 1 : 0)}</div>
      </div>
    </div>
  );
};

export default QuizApp;
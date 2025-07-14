import React, { useState } from 'react';
import { Gift, Heart, Star, Sparkles } from 'lucide-react';

interface GiftAppProps {
  createHearts: (count?: number) => void;
}

const GiftApp: React.FC<GiftAppProps> = ({ createHearts }) => {
  const [giftOpened, setGiftOpened] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showProposal, setShowProposal] = useState(false);

  const handleOpenGift = () => {
    if (!giftOpened) {
      setGiftOpened(true);
      createHearts(30);
      
      // Animate through steps
      setTimeout(() => setCurrentStep(1), 500);
      setTimeout(() => setCurrentStep(2), 1500);
      setTimeout(() => setCurrentStep(3), 2500);
      setTimeout(() => setShowProposal(true), 3500);
    }
  };

  const handleProposalResponse = (accepted: boolean) => {
    if (accepted) {
      createHearts(100);
      alert('🎉 You made me the happiest person in the universe! 🎉');
    } else {
      alert('That\'s okay, I\'ll keep trying to win your heart every day! 💕');
    }
  };

  if (!giftOpened) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div 
          onClick={handleOpenGift}
          className="relative cursor-pointer transform hover:scale-110 transition-all duration-300 group"
        >
          {/* Gift Box */}
          <div className="w-32 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-xl flex items-center justify-center relative overflow-hidden">
            {/* Ribbon Vertical */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-red-300"></div>
            {/* Ribbon Horizontal */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-2 bg-red-300"></div>
            {/* Bow */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-6 bg-red-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-3 bg-red-500 rounded-sm"></div>
            </div>
            
            <Gift className="w-12 h-12 text-white group-hover:animate-bounce" />
          </div>
          
          {/* Sparkles around gift */}
          <div className="absolute -top-2 -left-2 animate-pulse">
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="absolute -top-1 -right-2 animate-pulse delay-300">
            <Star className="w-3 h-3 text-yellow-300" />
          </div>
          <div className="absolute -bottom-1 -left-1 animate-pulse delay-500">
            <Star className="w-3 h-3 text-yellow-300" />
          </div>
        </div>
        
        <p className="text-pink-700 mt-6 text-center font-medium animate-bounce">
          🎁 Click to unwrap your special gift! 🎁
        </p>
        <p className="text-pink-600 text-sm mt-2 text-center opacity-70">
          Made with love, just for you ✨
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
      {/* Step 1: Gift opened animation */}
      {currentStep >= 1 && (
        <div className="animate-fadeIn">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center animate-pulse shadow-lg">
              <Star className="w-12 h-12 text-white fill-current animate-spin" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 text-pink-500 animate-bounce" />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Surprise message */}
      {currentStep >= 2 && (
        <div className="animate-slideUp space-y-4">
          <h2 className="text-3xl font-bold text-pink-600 animate-pulse">
            Surprise! 🎉
          </h2>
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-2 border-pink-200 shadow-lg">
            <Heart className="w-8 h-8 text-pink-600 mx-auto mb-4 fill-current animate-heartbeat" />
            <p className="text-pink-700 text-lg leading-relaxed">
              "You are the most precious gift life has ever given me. 
              Every day with you is like unwrapping a new surprise filled with 
              love, laughter, and endless joy."
            </p>
          </div>
        </div>
      )}

      {/* Step 3: Personal message */}
      {currentStep >= 3 && (
        <div className="animate-fadeIn space-y-4">
          <div className="bg-white rounded-xl p-6 border border-pink-200 shadow-md">
            <h3 className="text-xl font-bold text-pink-600 mb-3">A Letter From My Heart</h3>
            <p className="text-pink-700 text-sm leading-relaxed">
              Dear Beautiful Soul,<br/><br/>
              Thank you for being you. Thank you for your smile that lights up my world, 
              your laugh that makes everything better, and your heart that loves so purely. 
              You make ordinary moments extraordinary just by being in them.
              <br/><br/>
              With all my love,<br/>
              Someone who adores you completely 💕
            </p>
          </div>
        </div>
      )}

      {/* Step 4: Proposal */}
      {showProposal && (
        <div className="animate-bounceIn space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 shadow-xl">
            <div className="text-4xl mb-4">💍</div>
            <h3 className="text-2xl font-bold text-purple-600 mb-4">
              Will You Be Mine Forever?
            </h3>
            <p className="text-purple-700 mb-6">
              I want to spend every sunrise and sunset with you, 
              create a lifetime of beautiful memories together.
            </p>
            
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => handleProposalResponse(true)}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                Yes, Forever! 💕
              </button>
              <button 
                onClick={() => handleProposalResponse(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-xl transition-all duration-300 font-medium"
              >
                Let me think 🤔
              </button>
            </div>
          </div>
          
          <button 
            onClick={() => createHearts(20)}
            className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105"
          >
            Spread More Love! 🌟
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        
        .animate-bounceIn {
          animation: bounceIn 1s ease-out;
        }
        
        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GiftApp;
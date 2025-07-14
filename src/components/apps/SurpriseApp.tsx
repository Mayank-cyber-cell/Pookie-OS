import React, { useState } from 'react';
import { Gift, Star, Heart } from 'lucide-react';

interface SurpriseAppProps {
  createHearts: (count?: number) => void;
}

const SurpriseApp: React.FC<SurpriseAppProps> = ({ createHearts }) => {
  const [opened, setOpened] = useState(false);
  const [step, setStep] = useState(0);

  const handleOpen = () => {
    if (!opened) {
      setOpened(true);
      createHearts(50);
      
      // Animate through steps
      setTimeout(() => setStep(1), 500);
      setTimeout(() => setStep(2), 1500);
      setTimeout(() => setStep(3), 2500);
    }
  };

  if (!opened) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div 
          onClick={handleOpen}
          className="relative cursor-pointer transform hover:scale-110 transition-all duration-300"
        >
          <div className="w-32 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-xl flex items-center justify-center relative">
            {/* Gift bow */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-red-400 rounded-full"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-red-400"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-red-400"></div>
            
            <Gift className="w-12 h-12 text-white" />
          </div>
        </div>
        <p className="text-pink-700 mt-4 text-center font-medium">
          🎁 Click to unwrap your surprise! 🎁
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="space-y-4 animate-fadeIn">
        {step >= 1 && (
          <div className="animate-bounce">
            <Star className="w-16 h-16 text-yellow-500 mx-auto fill-current" />
          </div>
        )}
        
        {step >= 2 && (
          <div className="animate-pulse">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              Surprise! 🎉
            </h2>
            <p className="text-lg text-pink-700 mb-4">
              You unlocked a secret message!
            </p>
          </div>
        )}
        
        {step >= 3 && (
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200 animate-slideUp">
            <Heart className="w-8 h-8 text-pink-600 mx-auto mb-4 fill-current" />
            <p className="text-pink-700 mb-4">
              "Every day with you is a gift. You make ordinary moments extraordinary, 
              and I fall in love with you a little more each day. 
              Thank you for being my everything. 💕"
            </p>
            <p className="text-pink-600 text-sm italic">
              - From someone who loves you more than words can say
            </p>
            
            <button 
              onClick={() => createHearts(20)}
              className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-all"
            >
              Spread More Love! 💖
            </button>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SurpriseApp;
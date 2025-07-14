import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(0);
  
  const loadingLines = [
    'Loading memories...',
    'Injecting emotions...',
    'Preparing surprises...',
    'Almost ready...'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine(prev => {
        if (prev < loadingLines.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 600);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-300 to-pink-400 z-50 flex flex-col items-center justify-center transition-opacity duration-1000">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <Heart className="h-12 w-12 text-pink-600 fill-current animate-bounce" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Booting Pookie OS...</h1>
        <div className="text-white text-lg space-y-2 min-h-[120px]">
          {loadingLines.map((line, index) => (
            <p 
              key={index}
              className={`transition-opacity duration-500 ${
                index <= currentLine ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className="flex space-x-2 mt-8">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
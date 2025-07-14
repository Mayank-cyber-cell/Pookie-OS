import React from 'react';

interface SecretAppProps {
  createHearts: (count?: number) => void;
}

const SecretApp: React.FC<SecretAppProps> = ({ createHearts }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="mb-6 animate-bounce">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full flex items-center justify-center shadow-lg border-2 border-purple-400">
          <span className="text-4xl">🔓</span>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-purple-600 mb-4 animate-pulse">
        🎉 Secret Unlocked! 🎉
      </h2>
      
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 shadow-lg mb-6">
        <p className="text-purple-700 text-lg mb-4">
          Congratulations! You discovered the Konami Code! 
        </p>
        <p className="text-pink-700 mb-4">
          "You're not just amazing at games, you're amazing at everything! 
          Your curiosity and playfulness are just some of the many reasons I adore you."
        </p>
        <p className="text-purple-600 text-sm italic">
          - A secret message from someone who loves your adventurous spirit ✨
        </p>
      </div>
      
      <div className="space-y-4">
        <button
          onClick={() => createHearts(50)}
          className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
        >
          Celebrate with Hearts! 💖
        </button>
        
        <div className="text-sm text-purple-600">
          <p>🎮 Achievement Unlocked: Secret Explorer</p>
          <p>💝 Bonus: Extra love points earned!</p>
        </div>
      </div>
    </div>
  );
};

export default SecretApp;
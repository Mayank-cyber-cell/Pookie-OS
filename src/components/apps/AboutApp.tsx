import React from 'react';
import { Heart, Users, Calendar, MapPin } from 'lucide-react';

interface AboutAppProps {
  createHearts: (count?: number) => void;
}

const AboutApp: React.FC<AboutAppProps> = ({ createHearts }) => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="w-24 h-24 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center mb-6 shadow-lg border-2 border-pink-400">
        <Users className="h-12 w-12 text-pink-600" />
      </div>
      
      <h2 className="text-3xl font-bold text-pink-600 mb-2">About Us</h2>
      <p className="text-pink-700 mb-6 text-center">This is our special place where love lives.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-6">
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-200">
          <h3 className="font-bold text-pink-600 mb-2 flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Our Story
          </h3>
          <p className="text-pink-700 text-sm">
            We met on a beautiful day and since then, every moment has been magical. 
            This is our journey together, filled with laughter, dreams, and endless love.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-200">
          <h3 className="font-bold text-pink-600 mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Timeline
          </h3>
          <div className="text-sm text-pink-700 space-y-1">
            <div>🌟 First Meet: Jan 15, 2024</div>
            <div>☕ First Date: Mar 20, 2024</div>
            <div>💕 Official: May 10, 2024</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-6">
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-200">
          <h3 className="font-bold text-pink-600 mb-2">You ✨</h3>
          <p className="text-pink-700 text-sm">
            The most amazing person I've ever known. Your smile brightens my darkest days, 
            and your laugh is my favorite sound in the world.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-200">
          <h3 className="font-bold text-pink-600 mb-2">Me 🥰</h3>
          <p className="text-pink-700 text-sm">
            The luckiest person alive to have you in my life. I cherish every moment, 
            every conversation, and every memory we create together.
          </p>
        </div>
      </div>
      
      <button 
        onClick={() => createHearts(30)}
        className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Click for Hearts! 💖
      </button>
    </div>
  );
};

export default AboutApp;
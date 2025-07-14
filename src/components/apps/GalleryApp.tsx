import React from 'react';
import { Heart, Camera, Calendar } from 'lucide-react';

const GalleryApp: React.FC = () => {
  const photos = [
    { title: 'First Date', emoji: '☕', description: 'Coffee and endless conversations' },
    { title: 'Beach Day', emoji: '🏖️', description: 'Sunset walks and sand between our toes' },
    { title: 'Anniversary', emoji: '🎉', description: 'Celebrating our love' },
    { title: 'Winter Magic', emoji: '❄️', description: 'Cozy moments by the fire' },
    { title: 'Sunset Kiss', emoji: '🌅', description: 'Perfect ending to a perfect day' },
    { title: 'Future Dreams', emoji: '✨', description: 'Planning our tomorrow together' }
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6">
        <Camera className="w-6 h-6 text-pink-600" />
        <h2 className="text-2xl font-bold text-pink-600">Our Precious Moments</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto flex-grow">
        {photos.map((photo, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-3 shadow-md border border-pink-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="w-full h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center mb-3">
              <span className="text-3xl">{photo.emoji}</span>
            </div>
            <h3 className="font-bold text-pink-600 text-sm mb-1">{photo.title}</h3>
            <p className="text-pink-700 text-xs">{photo.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex justify-between items-center pt-4 border-t border-pink-200">
        <div className="text-sm text-pink-600 flex items-center gap-1">
          <Heart className="w-4 h-4 fill-current" />
          {photos.length} precious memories
        </div>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-all text-sm">
          Add More
        </button>
      </div>
    </div>
  );
};

export default GalleryApp;
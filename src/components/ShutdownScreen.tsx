import React from 'react';
import { Power } from 'lucide-react';

const ShutdownScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-white text-center">
      <div className="mb-8 animate-pulse">
        <Power className="h-24 w-24 text-pink-500" />
      </div>
      <h1 className="text-4xl font-bold mb-4">Shutting Down...</h1>
      <p className="text-xl mb-2">We'll miss you 💔</p>
      <p className="text-xl">Come back soon, Pookie 🥺</p>
    </div>
  );
};

export default ShutdownScreen;
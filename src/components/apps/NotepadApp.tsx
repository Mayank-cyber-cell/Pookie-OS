import React, { useState } from 'react';
import { Save, Printer, Share } from 'lucide-react';

const NotepadApp: React.FC = () => {
  const [note, setNote] = useState(`My Dearest,

Every moment with you feels like a beautiful dream I never want to wake up from. Your smile brightens my darkest days, and your laughter is the melody that plays in my heart.

I cherish the way you understand me without words, the way you hold me when I'm vulnerable, and the way you love me unconditionally. You are my safe place, my happy place, and my favorite person in the entire world.

No matter where life takes us, I promise to stand by your side, to hold your hand through every storm, and to celebrate every joy with you. You are my today and all of my tomorrows.

Forever yours,
With all my love ❤️`);

  const saveNote = () => {
    alert('Love note saved to your heart! 💕');
  };

  const printNote = () => {
    window.print();
  };

  const shareNote = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Love Letter',
        text: note,
      });
    } else {
      navigator.clipboard.writeText(note);
      alert('Love letter copied to clipboard! 📋');
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-pink-600">My Love Letter</h2>
        <button 
          onClick={saveNote}
          className="bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded-lg text-sm transition-all"
        >
          Save
        </button>
      </div>
      
      <textarea 
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full flex-grow p-4 bg-pink-50 border border-pink-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent text-pink-800"
        placeholder="Write your love letter here..."
      />
      
      <div className="mt-4 flex gap-2">
        <button 
          onClick={printNote}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
        >
          <Printer className="h-4 w-4" />
          Print
        </button>
        <button 
          onClick={shareNote}
          className="bg-pink-100 hover:bg-pink-200 text-pink-700 px-4 py-2 rounded-lg transition-all flex items-center gap-2"
        >
          <Share className="h-4 w-4" />
          Share
        </button>
      </div>
    </div>
  );
};

export default NotepadApp;
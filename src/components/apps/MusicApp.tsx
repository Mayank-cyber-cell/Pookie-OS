import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from 'lucide-react';

const MusicApp: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [volume, setVolume] = useState(75);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-pink-600 mb-2">Our Special Playlist</h2>
        <p className="text-pink-700">Songs that remind me of us 💕</p>
      </div>

      {/* Spotify Playlist Embed */}
      <div className="flex-grow bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-200">
        <div className="w-full h-full min-h-[352px] flex flex-col">
          <iframe 
            data-testid="embed-iframe" 
            style={{borderRadius: '12px'}} 
            src="https://open.spotify.com/embed/playlist/4PStu9I5zd2QlzQsjL0mk4?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Our Special Playlist"
          />
          
          {/* Fallback if iframe doesn't load */}
          <div className="mt-4 text-center">
            <p className="text-pink-600 mb-2">Having trouble loading the playlist?</p>
            <a 
              href="https://open.spotify.com/playlist/4PStu9I5zd2QlzQsjL0mk4?si=7j_c2I4iTbeOlHX07UFOug"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all inline-flex items-center gap-2"
            >
              <span>🎵</span>
              Open in Spotify
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-pink-600 text-sm">🎵 Enjoy our favorite songs together! 🎵</p>
      </div>
    </div>
  );
};

export default MusicApp;
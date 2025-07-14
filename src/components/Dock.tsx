import React, { useState } from 'react';
import { User, Image, Edit, Terminal, Music, Calendar, HelpCircle, Gamepad2, User2, Trash2, Package, Gift, Power, Heart } from 'lucide-react';
import { AppType } from '../types';

interface DockProps {
  onOpenApp: (appType: AppType) => void;
  onShutdown: () => void;
}

const Dock: React.FC<DockProps> = ({ onOpenApp, onShutdown }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const dockItems = [
    { appType: 'about' as AppType, icon: User, label: 'About Us' },
    { appType: 'gallery' as AppType, icon: Image, label: 'Gallery' },
    { appType: 'notepad' as AppType, icon: Edit, label: 'Love Notes' },
    { appType: 'terminal' as AppType, icon: Terminal, label: 'Terminal' },
    { appType: 'music' as AppType, icon: Music, label: 'Music' },
    { appType: 'calendar' as AppType, icon: Calendar, label: 'Calendar' },
    { appType: 'quiz' as AppType, icon: HelpCircle, label: 'Quiz' },
    { appType: 'memory' as AppType, icon: Gamepad2, label: 'Memory Game' },
    { appType: 'resume' as AppType, icon: User2, label: 'Resume' },
    { appType: 'recycle' as AppType, icon: Trash2, label: 'Recycle Bin' },
    { appType: 'surprise' as AppType, icon: Package, label: 'Surprise' },
    { appType: 'gift' as AppType, icon: Gift, label: 'Gift' }
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-xl border-t border-pink-200 flex justify-center py-4 shadow-2xl">
      <div className="flex gap-3 items-end px-6 overflow-x-auto">
        {dockItems.map(({ appType, icon: Icon, label }, index) => (
          <div
            key={appType}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tooltip */}
            {hoveredIndex === index && (
              <div className="absolute bottom-full mb-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {label}
              </div>
            )}
            
            <button
              onClick={() => onOpenApp(appType)}
              className={`w-14 h-14 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center shadow-lg border border-pink-300 hover:from-pink-200 hover:to-pink-300 transition-all duration-200 transform ${
                hoveredIndex === index ? 'scale-125 -translate-y-2' : 'hover:scale-110'
              }`}
            >
              <Icon className="h-7 w-7 text-pink-600" />
            </button>
            
            {/* Active indicator */}
            <div className={`w-1 h-1 bg-pink-500 rounded-full mt-1 transition-all duration-200 ${
              hoveredIndex === index ? 'opacity-100' : 'opacity-0'
            }`}></div>
          </div>
        ))}
        
        {/* Separator */}
        <div className="w-px h-12 bg-pink-300 mx-2 self-center"></div>
        
        {/* Shutdown button */}
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setHoveredIndex(-1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === -1 && (
            <div className="absolute bottom-full mb-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Shutdown
            </div>
          )}
          
          <button
            onClick={onShutdown}
            className={`w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center shadow-lg border border-red-300 hover:from-red-200 hover:to-red-300 transition-all duration-200 transform ${
              hoveredIndex === -1 ? 'scale-125 -translate-y-2' : 'hover:scale-110'
            }`}
          >
            <Power className="h-7 w-7 text-red-500" />
          </button>
          
          <div className={`w-1 h-1 bg-red-500 rounded-full mt-1 transition-all duration-200 ${
            hoveredIndex === -1 ? 'opacity-100' : 'opacity-0'
          }`}></div>
        </div>
      </div>
      
      {/* Love pulse effect */}
      <div className="absolute top-2 right-4 animate-pulse">
        <Heart className="w-4 h-4 text-pink-400 fill-current" />
      </div>
    </div>
  );
};

export default Dock;
import React, { useRef, useEffect, useState } from 'react';
import { Minus, Square, X, Maximize2, Minimize2 } from 'lucide-react';
import { WindowData } from '../types';
import AppContent from './AppContent';

interface WindowProps {
  window: WindowData;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onBringToFront: () => void;
  onUpdatePosition: (x: number, y: number) => void;
  createHearts: (count?: number) => void;
}

const Window: React.FC<WindowProps> = ({
  window,
  onClose,
  onMinimize,
  onMaximize,
  onBringToFront,
  onUpdatePosition,
  createHearts
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const [isShaking, setIsShaking] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).closest('.window-header')) {
      isDragging.current = true;
      const rect = windowRef.current?.getBoundingClientRect();
      if (rect) {
        dragOffset.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }
      onBringToFront();
    }
  };

  const handleDoubleClick = () => {
    onMaximize();
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 300);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        const newX = e.clientX - dragOffset.current.x;
        const newY = e.clientY - dragOffset.current.y;
        
        // Keep window within bounds with some padding
        const maxX = window.innerWidth - window.width;
        const maxY = window.innerHeight - window.height;
        
        const boundedX = Math.max(0, Math.min(newX, maxX));
        const boundedY = Math.max(0, Math.min(newY, maxY));
        
        onUpdatePosition(boundedX, boundedY);
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    if (isDragging.current) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [window.width, window.height, onUpdatePosition]);

  if (window.minimized) {
    return null;
  }

  return (
    <div
      ref={windowRef}
      className={`window absolute overflow-hidden transition-all duration-200 bg-white bg-opacity-90 backdrop-blur-xl border border-pink-200 hover:shadow-2xl ${
        isShaking ? 'animate-bounce' : ''
      }`}
      style={{
        left: window.x,
        top: window.y,
        width: window.width,
        height: window.height,
        zIndex: window.zIndex,
        minWidth: 300,
        minHeight: 200,
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(255, 105, 180, 0.15), 0 10px 20px rgba(255, 105, 180, 0.1)'
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Window Header */}
      <div 
        className="window-header bg-gradient-to-r from-pink-400 via-pink-300 to-purple-400 p-3 cursor-move flex justify-between items-center border-b border-pink-200 relative overflow-hidden"
        onDoubleClick={handleDoubleClick}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 opacity-50 animate-pulse"></div>
        
        <div className="text-white font-bold text-sm z-10 relative drop-shadow-sm">{window.title}</div>
        <div className="flex gap-3 z-10 relative">
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="w-5 h-5 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110"
            title="Minimize"
          >
            <Minimize2 className="w-3 h-3 text-yellow-800" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onMaximize(); }}
            className="w-5 h-5 bg-green-400 rounded-full hover:bg-green-500 transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110"
            title="Maximize"
          >
            <Maximize2 className="w-3 h-3 text-green-800" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="w-5 h-5 bg-red-400 rounded-full hover:bg-red-500 transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110"
            title="Close"
          >
            <X className="w-3 h-3 text-red-800" />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="p-4 overflow-auto bg-gradient-to-b from-white to-pink-50" style={{ height: 'calc(100% - 52px)' }}>
        <AppContent appType={window.appType} createHearts={createHearts} />
      </div>
      
      {/* Window glow effect */}
      <div className="absolute inset-0 rounded-2xl border border-pink-300 opacity-30 pointer-events-none"></div>
    </div>
  );
};

export default Window;
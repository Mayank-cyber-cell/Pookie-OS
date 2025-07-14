import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  emoji: string;
  delay: number;
}

const HeartParticles: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  const heartEmojis = ['❤️', '💕', '💖', '💗', '💘', '💝', '💞', '💓', '🩷', '🤍'];

  useEffect(() => {
    const heartArray: Heart[] = [];
    for (let i = 0; i < 60; i++) {
      heartArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 25 + 15,
        duration: Math.random() * 4 + 3,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        delay: Math.random() * 2
      });
    }
    setHearts(heartArray);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes heartFloat {
          0% { 
            transform: translateY(100vh) translateX(0) rotate(0deg) scale(0); 
            opacity: 0; 
          }
          10% { 
            opacity: 1; 
            transform: translateY(90vh) translateX(0) rotate(0deg) scale(1); 
          }
          90% { 
            opacity: 1; 
            transform: translateY(-10vh) translateX(var(--random-x)) rotate(360deg) scale(1); 
          }
          100% { 
            transform: translateY(-20vh) translateX(var(--random-x)) rotate(360deg) scale(0); 
            opacity: 0; 
          }
        }
        
        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        .heart-float {
          animation: heartFloat var(--duration) ease-in-out forwards;
          animation-delay: var(--delay);
        }
        
        .heart-pulse {
          animation: heartPulse 0.8s ease-in-out infinite;
        }
      `}</style>
      
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="absolute heart-float heart-pulse"
            style={{
              left: `${heart.x}%`,
              fontSize: `${heart.size}px`,
              '--duration': `${heart.duration}s`,
              '--delay': `${heart.delay}s`,
              '--random-x': `${(Math.random() - 0.5) * 200}px`,
              filter: 'drop-shadow(0 2px 4px rgba(255, 105, 180, 0.3))'
            } as React.CSSProperties}
          >
            {heart.emoji}
          </div>
        ))}
        
        {/* Additional sparkle effects */}
        {[...Array(20)].map((_, index) => (
          <div
            key={`sparkle-${index}`}
            className="absolute animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }}
          >
            <span className="text-yellow-300 text-xs">✨</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeartParticles;
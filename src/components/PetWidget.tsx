import React, { useState, useEffect, useRef } from 'react';

const PetWidget: React.FC = () => {
  const [position, setPosition] = useState({ x: 150, y: 150 });
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [mood, setMood] = useState('happy');
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const petRef = useRef<HTMLDivElement>(null);

  const messages = [
    "You light up Mayank's world! ✨",
    "Someone's thinking about you! 💭",
    "You're absolutely amazing! 🌟",
    "Mayank is so lucky to have you! 🍀",
    "You make every day brighter! ☀️",
    "You're the best thing ever! 💖",
    "Did you know you're perfect? 😊",
    "Sending you virtual hugs! 🤗",
    "You deserve all the happiness! 🌈",
    "You're someone's favorite person! 👑"
  ];

  const petEmojis = {
    happy: '🐻',
    excited: '🎉',
    love: '💕',
    sleepy: '😴',
    playful: '🐾'
  };

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition(prev => {
        const maxX = window.innerWidth - 80;
        const maxY = window.innerHeight - 200;
        const minX = 50;
        const minY = 50;
        
        let newX = prev.x + (Math.random() - 0.5) * 150;
        let newY = prev.y + (Math.random() - 0.5) * 100;
        
        // Bounce off walls and change direction
        if (newX <= minX) {
          newX = minX;
          setDirection(1);
        } else if (newX >= maxX) {
          newX = maxX;
          setDirection(-1);
        }
        
        newY = Math.max(minY, Math.min(newY, maxY));
        
        return { x: newX, y: newY };
      });
      
      // Randomly change mood
      if (Math.random() > 0.7) {
        const moods = ['happy', 'excited', 'love', 'playful'];
        setMood(moods[Math.floor(Math.random() * moods.length)]);
      }
    }, 4000);

    return () => clearInterval(moveInterval);
  }, []);

  // Auto message every 30 seconds
  useEffect(() => {
    const messageInterval = setInterval(() => {
      if (!showMessage && Math.random() > 0.5) {
        showRandomMessage();
      }
    }, 30000);

    return () => clearInterval(messageInterval);
  }, [showMessage]);

  const showRandomMessage = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
    setShowMessage(true);
    setMood('love');
    setTimeout(() => setShowMessage(false), 4000);
  };

  const handlePetClick = () => {
    showRandomMessage();
    // Create mini hearts
    for (let i = 0; i < 5; i++) {
      createMiniHeart();
    }
  };

  const createMiniHeart = () => {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = position.x + 'px';
    heart.style.top = position.y + 'px';
    heart.style.zIndex = '999';
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = '12px';
    heart.style.animation = 'miniHeartFloat 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 2000);
  };

  return (
    <>
      <style jsx>{`
        @keyframes miniHeartFloat {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-50px) scale(0.5); opacity: 0; }
        }
        
        @keyframes petBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes petWiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        
        .pet-bounce {
          animation: petBounce 2s infinite;
        }
        
        .pet-wiggle {
          animation: petWiggle 1s infinite;
        }
        
        .pet-walk {
          transform: scaleX(${direction});
        }
      `}</style>
      
      <div
        ref={petRef}
        className={`fixed z-30 cursor-pointer transition-all duration-1000 ease-in-out ${
          mood === 'excited' ? 'pet-bounce' : mood === 'playful' ? 'pet-wiggle' : ''
        } pet-walk`}
        style={{ left: position.x, top: position.y }}
        onClick={handlePetClick}
        onMouseEnter={() => setMood('excited')}
        onMouseLeave={() => setMood('happy')}
      >
        <div className="relative">
          {/* Pet Body */}
          <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center shadow-lg border-2 border-pink-400 hover:scale-110 transition-transform duration-200">
            <span className="text-2xl">{petEmojis[mood as keyof typeof petEmojis]}</span>
          </div>
          
          {/* Pet Shadow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black opacity-10 rounded-full blur-sm"></div>
          
          {/* Message Bubble */}
          {showMessage && (
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-pink-200 min-w-max max-w-xs animate-bounce z-10">
              <div className="text-sm text-pink-700 font-medium text-center whitespace-nowrap">{message}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white"></div>
            </div>
          )}
          
          {/* Mood indicator */}
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full border-2 border-white shadow-sm">
            {mood === 'happy' && <div className="w-full h-full bg-yellow-400 rounded-full"></div>}
            {mood === 'excited' && <div className="w-full h-full bg-orange-400 rounded-full animate-pulse"></div>}
            {mood === 'love' && <div className="w-full h-full bg-red-400 rounded-full animate-pulse"></div>}
            {mood === 'sleepy' && <div className="w-full h-full bg-blue-400 rounded-full"></div>}
            {mood === 'playful' && <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default PetWidget;
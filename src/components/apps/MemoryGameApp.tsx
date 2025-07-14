import React, { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryGameApp: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const emojis = ['💕', '💖', '💗', '💘', '💝', '💞', '💓', '💌'];

  const initializeGame = () => {
    const gameCards: Card[] = [];
    emojis.forEach((emoji, index) => {
      gameCards.push(
        { id: index * 2, emoji, isFlipped: false, isMatched: false },
        { id: index * 2 + 1, emoji, isFlipped: false, isMatched: false }
      );
    });
    
    // Shuffle cards
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }
    
    setCards(gameCards);
    setFlippedCards([]);
    setMoves(0);
    setGameWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards.find(card => card.id === first);
      const secondCard = cards.find(card => card.id === second);

      if (firstCard && secondCard && firstCard.emoji === secondCard.emoji) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isMatched: true }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(moves + 1);
    }
  }, [flippedCards, cards, moves]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) {
      setGameWon(true);
    }
  }, [cards]);

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2) return;
    
    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    setCards(prev => prev.map(c => 
      c.id === cardId ? { ...c, isFlipped: true } : c
    ));
    setFlippedCards(prev => [...prev, cardId]);
  };

  if (gameWon) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-pink-600 mb-2">You Win!</h2>
        <p className="text-pink-700 mb-4">You win my heart again! 💓</p>
        <p className="text-pink-600 mb-6">Completed in {moves} moves</p>
        
        <button
          onClick={initializeGame}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl transition-all flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-pink-600">Memory Game</h2>
        <div className="flex gap-4 text-sm text-pink-600">
          <span>Moves: {moves}</span>
          <button
            onClick={initializeGame}
            className="bg-pink-100 hover:bg-pink-200 px-3 py-1 rounded-lg transition-all"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 flex-grow">
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`
              aspect-square rounded-xl border-2 flex items-center justify-center text-2xl transition-all duration-300 transform
              ${card.isFlipped || card.isMatched
                ? card.isMatched 
                  ? 'bg-green-100 border-green-300 scale-105'
                  : 'bg-pink-100 border-pink-300'
                : 'bg-pink-200 border-pink-400 hover:bg-pink-300 hover:scale-105'
              }
            `}
            disabled={card.isFlipped || card.isMatched || flippedCards.length === 2}
          >
            {card.isFlipped || card.isMatched ? card.emoji : '💖'}
          </button>
        ))}
      </div>

      <div className="mt-4 text-center text-sm text-pink-600">
        Find all the matching pairs! 💕
      </div>
    </div>
  );
};

export default MemoryGameApp;
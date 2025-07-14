import React, { useState, useRef, useEffect } from 'react';

interface TerminalAppProps {
  createHearts: (count?: number) => void;
}

const TerminalApp: React.FC<TerminalAppProps> = ({ createHearts }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    'Romantic OS Terminal v2.0.0',
    'Type "help" for commands',
    'Welcome to our secret terminal!',
    'Try typing "i love you"'
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const processCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    let response = '';

    switch (cmd) {
      case 'help':
        response = `Available commands:
• i love you - Special surprise
• who am i - Your identity
• open proposal - Open proposal.txt
• date - Show current date
• clear - Clear terminal
• about - About this OS
• kiss - Send a kiss
• compliment - Get a compliment`;
        break;
      
      case 'i love you':
      case 'love you':
        response = `I love you more than words can express! ❤️❤️❤️❤️❤️`;
        createHearts(20);
        break;
      
      case 'who am i':
        response = "You are Mayank's Favourite Human 💕\nThe most amazing person in the universe! ✨";
        break;
      
      case 'open proposal':
        response = `Opening proposal.txt...

Will you be mine forever? 💍
[ ] Yes, absolutely!
[ ] Yes, definitely!
[ ] Yes, of course!

(All options lead to happiness 😊)`;
        break;
      
      case 'date':
        response = new Date().toLocaleString();
        break;
      
      case 'clear':
        setOutput([]);
        return;
      
      case 'about':
        response = 'Romantic OS Terminal v2.0.0 - Created with love for someone special';
        break;
      
      case 'kiss':
        response = 'Sending virtual kisses your way! 💋💋💋';
        break;
      
      case 'compliment':
        const compliments = [
          "You're absolutely amazing! ✨",
          "Your smile could light up the whole world! 😊",
          "You make every day better just by existing! 🌟",
          "You're the best thing that ever happened to me! 💖"
        ];
        response = compliments[Math.floor(Math.random() * compliments.length)];
        break;
      
      default:
        response = `Command not found: ${command}. Type "help" for available commands.`;
    }

    setOutput(prev => [...prev, `$ ${command}`, response]);
  };

  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (input.trim()) {
        processCommand(input);
      }
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full font-mono bg-gray-900 text-green-300 p-4 rounded-lg overflow-hidden">
      <div className="flex-grow overflow-y-auto mb-4 space-y-1">
        {output.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
      </div>
      
      <div className="flex items-center">
        <span className="mr-2 text-green-400">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleSubmit}
          className="bg-transparent border-none flex-grow focus:outline-none text-green-300"
          autoComplete="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default TerminalApp;
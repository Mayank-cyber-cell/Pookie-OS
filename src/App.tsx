import React, { useState, useEffect, useRef } from 'react';
import { Heart, User, Image, Edit, Terminal, Music, Gift, Calendar, Package, Gamepad2, User2, Trash2, HelpCircle, Power } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import ShutdownScreen from './components/ShutdownScreen';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import Dock from './components/Dock';
import PetWidget from './components/PetWidget';
import HeartParticles from './components/HeartParticles';
import { WindowData, AppType } from './types';
import { apps } from './data/apps';
import { useKonamiCode } from './hooks/useKonamiCode';

function App() {
  const [loading, setLoading] = useState(true);
  const [shutdown, setShutdown] = useState(false);
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [zIndex, setZIndex] = useState(10);
  const [showHearts, setShowHearts] = useState(false);
  const [time, setTime] = useState(new Date());
  const [konami, setKonami] = useState(false);
  const [backgroundHearts, setBackgroundHearts] = useState<Array<{id: number, x: number, y: number}>>([]);
  
  const konamiActivated = useKonamiCode();

  useEffect(() => {
    if (konamiActivated && !konami) {
      setKonami(true);
      createHearts(100);
      openApp('secret');
    }
  }, [konamiActivated, konami]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(loadingTimer);
  }, []);

  // Create floating background hearts periodically
  useEffect(() => {
    const heartTimer = setInterval(() => {
      if (Math.random() > 0.8) {
        setBackgroundHearts(prev => [
          ...prev.slice(-10), // Keep only last 10 hearts
          {
            id: Date.now(),
            x: Math.random() * window.innerWidth,
            y: window.innerHeight
          }
        ]);
      }
    }, 5000);

    return () => clearInterval(heartTimer);
  }, []);

  const openApp = (appType: AppType, x?: number, y?: number) => {
    const existingWindow = windows.find(w => w.appType === appType);
    if (existingWindow) {
      bringToFront(existingWindow.id);
      return;
    }

    const app = apps[appType];
    if (!app) return;

    const newWindow: WindowData = {
      id: `window-${Date.now()}`,
      appType,
      title: app.title,
      x: x || Math.random() * 200 + 100,
      y: y || Math.random() * 100 + 100,
      width: app.width || 500,
      height: app.height || 400,
      minimized: false,
      maximized: false,
      zIndex: zIndex + 1
    };

    setWindows(prev => [...prev, newWindow]);
    setZIndex(prev => prev + 1);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, minimized: !w.minimized } : w
    ));
  };

  const maximizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { 
        ...w, 
        maximized: !w.maximized,
        x: w.maximized ? w.x : 20,
        y: w.maximized ? w.y : 20,
        width: w.maximized ? w.width : window.innerWidth - 40,
        height: w.maximized ? w.height : window.innerHeight - 120
      } : w
    ));
  };

  const bringToFront = (id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, zIndex: zIndex + 1 } : w
    ));
    setZIndex(prev => prev + 1);
  };

  const updateWindowPosition = (id: string, x: number, y: number) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, x, y } : w
    ));
  };

  const createHearts = (count: number = 20) => {
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 4000);
  };

  const handleShutdown = () => {
    setShutdown(true);
    setTimeout(() => {
      setShutdown(false);
      setWindows([]);
    }, 5000);
  };

  const desktopIcons = [
    { appType: 'about' as AppType, icon: User, label: 'About Us' },
    { appType: 'gallery' as AppType, icon: Image, label: 'Our Gallery' },
    { appType: 'notepad' as AppType, icon: Edit, label: 'Love Notes' },
    { appType: 'terminal' as AppType, icon: Terminal, label: 'Secret Terminal' },
    { appType: 'music' as AppType, icon: Music, label: 'Our Song' },
    { appType: 'calendar' as AppType, icon: Calendar, label: 'Special Dates' },
    { appType: 'quiz' as AppType, icon: HelpCircle, label: 'Love Quiz' },
    { appType: 'memory' as AppType, icon: Gamepad2, label: 'Memory Game' },
    { appType: 'resume' as AppType, icon: User2, label: 'Resume of Love' },
    { appType: 'recycle' as AppType, icon: Trash2, label: 'Recycle Bin' },
    { appType: 'surprise' as AppType, icon: Package, label: 'Hidden Surprise' },
    { appType: 'gift' as AppType, icon: Gift, label: 'Special Gift' }
  ];

  if (loading) {
    return <LoadingScreen />;
  }

  if (shutdown) {
    return <ShutdownScreen />;
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 overflow-hidden relative">
      {/* Animated Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff69b4' fill-opacity='0.15'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 20s ease-in-out infinite'
        }}
      />

      {/* Background Hearts */}
      {backgroundHearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-pink-300 pointer-events-none opacity-30"
          style={{
            left: heart.x,
            top: heart.y,
            animation: 'floatUp 15s linear infinite'
          }}
        >
          💕
        </div>
      ))}

      {/* Desktop Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-400 opacity-70 mb-4 animate-pulse">
            For Someone Special
          </h1>
          <p className="text-xl text-pink-500 opacity-70">
            Double click any icon to open an app
          </p>
          {konami && (
            <div className="mt-4 animate-bounce">
              <p className="text-2xl text-pink-600 font-bold">🎉 Secret Mode Activated! 🎉</p>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="absolute top-10 left-10 flex flex-col gap-6 max-h-[calc(100vh-200px)] overflow-y-auto">
        {desktopIcons.map((icon, index) => (
          <DesktopIcon
            key={icon.appType}
            icon={icon.icon}
            label={icon.label}
            onClick={() => openApp(icon.appType)}
            delay={index * 100}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map(window => (
        <Window
          key={window.id}
          window={window}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => minimizeWindow(window.id)}
          onMaximize={() => maximizeWindow(window.id)}
          onBringToFront={() => bringToFront(window.id)}
          onUpdatePosition={(x, y) => updateWindowPosition(window.id, x, y)}
          createHearts={createHearts}
        />
      ))}

      {/* Pet Widget */}
      <PetWidget />

      {/* Heart Particles */}
      {showHearts && <HeartParticles />}

      {/* Dock */}
      <Dock onOpenApp={openApp} onShutdown={handleShutdown} />

      {/* System Info */}
      <div className="absolute bottom-2 right-2 text-xs text-pink-700 bg-white bg-opacity-60 backdrop-blur-sm px-3 py-2 rounded-lg border border-pink-200 shadow-lg">
        <div>{time.toLocaleDateString()}</div>
        <div>{time.toLocaleTimeString()}</div>
      </div>

      {/* Global Click Handler for Hearts */}
      <div 
        className="absolute inset-0 pointer-events-none"
        onClick={(e) => {
          if (Math.random() > 0.95) {
            createHearts(3);
          }
        }}
        style={{ pointerEvents: 'none' }}
      />

      <style jsx>{`
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          10% { opacity: 0.6; }
          90% { opacity: 0.1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

export default App;
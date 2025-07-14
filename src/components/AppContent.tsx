import React from 'react';
import { AppType } from '../types';
import AboutApp from './apps/AboutApp';
import GalleryApp from './apps/GalleryApp';
import NotepadApp from './apps/NotepadApp';
import TerminalApp from './apps/TerminalApp';
import MusicApp from './apps/MusicApp';
import CalendarApp from './apps/CalendarApp';
import QuizApp from './apps/QuizApp';
import MemoryGameApp from './apps/MemoryGameApp';
import ResumeApp from './apps/ResumeApp';
import RecycleBinApp from './apps/RecycleBinApp';
import SurpriseApp from './apps/SurpriseApp';
import GiftApp from './apps/GiftApp';
import SecretApp from './apps/SecretApp';

interface AppContentProps {
  appType: AppType;
  createHearts: (count?: number) => void;
}

const AppContent: React.FC<AppContentProps> = ({ appType, createHearts }) => {
  switch (appType) {
    case 'about':
      return <AboutApp createHearts={createHearts} />;
    case 'gallery':
      return <GalleryApp />;
    case 'notepad':
      return <NotepadApp />;
    case 'terminal':
      return <TerminalApp createHearts={createHearts} />;
    case 'music':
      return <MusicApp />;
    case 'calendar':
      return <CalendarApp />;
    case 'quiz':
      return <QuizApp />;
    case 'memory':
      return <MemoryGameApp />;
    case 'resume':
      return <ResumeApp />;
    case 'recycle':
      return <RecycleBinApp />;
    case 'surprise':
      return <SurpriseApp createHearts={createHearts} />;
    case 'gift':
      return <GiftApp createHearts={createHearts} />;
    case 'secret':
      return <SecretApp createHearts={createHearts} />;
    default:
      return <div>App not found</div>;
  }
};

export default AppContent;
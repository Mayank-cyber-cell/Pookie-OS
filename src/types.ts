export type AppType = 
  | 'about' 
  | 'gallery' 
  | 'notepad' 
  | 'terminal' 
  | 'music' 
  | 'calendar' 
  | 'quiz' 
  | 'memory' 
  | 'resume' 
  | 'recycle' 
  | 'surprise' 
  | 'gift'
  | 'secret';

export interface WindowData {
  id: string;
  appType: AppType;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  minimized: boolean;
  maximized: boolean;
  zIndex: number;
}

export interface AppConfig {
  title: string;
  width?: number;
  height?: number;
}

export interface SpecialDate {
  date: string;
  title: string;
  message: string;
}
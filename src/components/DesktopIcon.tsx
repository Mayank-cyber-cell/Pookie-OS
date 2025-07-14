import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  delay?: number;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon: Icon, label, onClick, delay = 0 }) => {
  return (
    <div 
      className="flex flex-col items-center w-20 cursor-pointer group transform transition-all duration-300 hover:scale-110"
      onDoubleClick={onClick}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-pink-200 rounded-xl flex items-center justify-center shadow-md border border-pink-300 group-hover:bg-pink-300 group-hover:shadow-lg transition-all duration-300">
        <Icon className="h-10 w-10 text-pink-600" />
      </div>
      <span className="text-sm text-pink-700 mt-1 text-center font-medium">{label}</span>
    </div>
  );
};

export default DesktopIcon;
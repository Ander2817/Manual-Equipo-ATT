import { Cpu, HardDrive, Monitor, Keyboard, Mouse, Wifi, Settings, Zap, Database, Server } from 'lucide-react';

const icons = [Cpu, HardDrive, Monitor, Keyboard, Mouse, Wifi, Settings, Zap, Database, Server];

export const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20"
          style={{
            left: `${10 + (index * 9)}%`,
            top: `${20 + Math.sin(index) * 30}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${6 + index * 0.5}s`,
          }}
        >
          <Icon className="w-8 h-8 text-white/30" />
        </div>
      ))}
    </div>
  );
};

import { useState, useEffect } from 'react';
import { Monitor, Power } from 'lucide-react';
import logoUpta from '@/assets/logo-upta.png';

interface BootScreenProps {
  onComplete: () => void;
}

export const BootScreen = ({ onComplete }: BootScreenProps) => {
  const [stage, setStage] = useState<'off' | 'booting' | 'loading' | 'complete'>('off');
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(true);

  const handlePowerOn = () => {
    setShowButton(false);
    setStage('booting');
    
    // Simulate boot sequence
    setTimeout(() => {
      setStage('loading');
    }, 1000);
  };

  useEffect(() => {
    if (stage === 'loading') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setStage('complete');
              setTimeout(onComplete, 500);
            }, 300);
            return 100;
          }
          return prev + 2;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [stage, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      {/* CRT screen effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent animate-pulse" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)'
          }}
        />
      </div>

      {/* Power off state */}
      {stage === 'off' && showButton && (
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          <Monitor className="w-24 h-24 text-gray-700" />
          <button
            onClick={handlePowerOn}
            className="group relative flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 border-4 border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          >
            <Power className="w-10 h-10 text-gray-600 group-hover:text-green-500 transition-colors" />
            <span className="absolute -bottom-10 text-gray-500 text-sm group-hover:text-green-500 transition-colors">
              Encender
            </span>
          </button>
        </div>
      )}

      {/* Booting state */}
      {stage === 'booting' && (
        <div className="flex flex-col items-center gap-4 text-green-500 font-mono animate-fade-in">
          <div className="text-sm opacity-80">BIOS Version 1.0.0</div>
          <div className="text-sm opacity-80">Initializing hardware...</div>
          <div className="text-sm opacity-80">Memory check: OK</div>
          <div className="text-sm opacity-80">CPU: Intel Core i7 detected</div>
          <div className="text-sm animate-pulse">Loading Manual Técnico OS...</div>
        </div>
      )}

      {/* Loading state */}
      {stage === 'loading' && (
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          <img 
            src={logoUpta} 
            alt="UPTA Logo" 
            className="w-32 h-32 object-contain animate-pulse"
          />
          <div className="text-white text-2xl font-bold tracking-wider">
            Manual Técnico Interactivo
          </div>
          <div className="text-blue-400 text-sm">UPTA "Federico Brito Figueroa"</div>
          
          {/* Progress bar */}
          <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-gray-400 text-sm font-mono">
            Cargando... {progress}%
          </div>
        </div>
      )}

      {/* Complete - fade out */}
      {stage === 'complete' && (
        <div className="absolute inset-0 bg-white animate-fade-in" />
      )}
    </div>
  );
};

export default BootScreen;

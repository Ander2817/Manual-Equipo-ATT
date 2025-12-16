import { useState, useEffect, useCallback } from 'react';
import { Monitor, Power } from 'lucide-react';
import logoUpta from '@/assets/logo-upta.png';

interface BootScreenProps {
  onComplete: () => void;
}

// Boot sound generator using Web Audio API
const playBootSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
  // Startup beep sequence
  const playBeep = (frequency: number, startTime: number, duration: number, volume: number = 0.3) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.01);
    gainNode.gain.linearRampToValueAtTime(0, startTime + duration);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  };

  // Classic POST beep
  playBeep(800, audioContext.currentTime, 0.15, 0.2);
  
  // Success chord sequence
  playBeep(523.25, audioContext.currentTime + 0.3, 0.15, 0.15); // C5
  playBeep(659.25, audioContext.currentTime + 0.45, 0.15, 0.15); // E5
  playBeep(783.99, audioContext.currentTime + 0.6, 0.2, 0.15); // G5
};

export const BootScreen = ({ onComplete }: BootScreenProps) => {
  const [stage, setStage] = useState<'off' | 'booting' | 'loading' | 'complete'>('off');
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [bootText, setBootText] = useState<string[]>([]);
  const [glitchEffect, setGlitchEffect] = useState(false);

  const bootMessages = [
    'BIOS Version 2.0.25 - UPTA Tech',
    'Initializing hardware...',
    'Memory check: 16384 MB OK',
    'CPU: Manual Técnico Processor detected',
    'GPU: Knowledge Graphics Unit OK',
    'Storage: Infinite wisdom available',
    'Network: Comunidad connection established',
    'Loading Manual Técnico OS...'
  ];

  const handlePowerOn = useCallback(() => {
    setShowButton(false);
    playBootSound();
    setStage('booting');
    
    // Glitch effect on power
    setGlitchEffect(true);
    setTimeout(() => setGlitchEffect(false), 200);
  }, []);

  useEffect(() => {
    if (stage === 'booting') {
      let index = 0;
      const interval = setInterval(() => {
        if (index < bootMessages.length) {
          setBootText(prev => [...prev, bootMessages[index]]);
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setStage('loading'), 500);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [stage]);

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
          return prev + Math.random() * 3 + 1;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [stage, onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden ${glitchEffect ? 'animate-pulse' : ''}`}>
      {/* CRT screen effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent animate-pulse" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)'
          }}
        />
        {/* Screen flicker */}
        <div className="absolute inset-0 bg-green-500/5 animate-pulse" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Power off state */}
      {stage === 'off' && showButton && (
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          <div className="relative">
            <Monitor className="w-32 h-32 text-gray-700 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent rounded-lg" />
          </div>
          <button
            onClick={handlePowerOn}
            className="group relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-4 border-gray-700 hover:border-green-500 transition-all duration-500 hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] hover:scale-110"
          >
            <Power className="w-12 h-12 text-gray-600 group-hover:text-green-500 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
            <div className="absolute inset-0 rounded-full bg-green-500/0 group-hover:bg-green-500/10 transition-all duration-300" />
          </button>
          <span className="text-gray-500 text-lg font-mono tracking-wider animate-pulse">
            [ Presiona para encender ]
          </span>
        </div>
      )}

      {/* Booting state */}
      {stage === 'booting' && (
        <div className="flex flex-col gap-1 text-green-500 font-mono text-sm max-w-2xl w-full px-8 animate-fade-in">
          <div className="mb-4 text-green-400 text-lg">═══════════════════════════════════════</div>
          {bootText.map((text, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-green-400">&gt;</span>
              <span className="opacity-90">{text}</span>
              {index === bootText.length - 1 && <span className="animate-pulse">█</span>}
            </div>
          ))}
        </div>
      )}

      {/* Loading state */}
      {stage === 'loading' && (
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          <div className="relative">
            <img 
              src={logoUpta} 
              alt="UPTA Logo" 
              className="w-40 h-40 object-contain animate-pulse drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse" />
          </div>
          
          <div className="text-center space-y-2">
            <h2 className="text-white text-3xl font-bold tracking-wider animate-pulse">
              Manual Técnico Interactivo
            </h2>
            <p className="text-blue-400 text-lg">UPTA "Federico Brito Figueroa"</p>
          </div>
          
          {/* Enhanced progress bar */}
          <div className="w-96 space-y-2">
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transition-all duration-100 ease-out relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
            <div className="flex justify-between text-gray-400 text-sm font-mono">
              <span>Cargando recursos...</span>
              <span className="text-cyan-400">{Math.min(Math.round(progress), 100)}%</span>
            </div>
          </div>

          {/* Loading tips */}
          <p className="text-gray-500 text-sm italic max-w-md text-center animate-pulse">
            "La educación es el arma más poderosa que puedes usar para cambiar el mundo."
          </p>
        </div>
      )}

      {/* Complete - fade out with flash */}
      {stage === 'complete' && (
        <div className="absolute inset-0 bg-white animate-fade-in" />
      )}
    </div>
  );
};

export default BootScreen;

import { useState, useEffect, useCallback } from 'react';
import { Monitor, Power, Zap, Cpu, HardDrive, Wifi } from 'lucide-react';
import logoUpta from '@/assets/logo-upta.png';
import { MatrixRain } from './effects/MatrixRain';

interface BootScreenProps {
  onComplete: () => void;
}

const playBootSound = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  
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
  playBeep(523.25, audioContext.currentTime + 0.3, 0.15, 0.15);
  playBeep(659.25, audioContext.currentTime + 0.45, 0.15, 0.15);
  playBeep(783.99, audioContext.currentTime + 0.6, 0.2, 0.15);
};

const playTypingSound = () => {
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.value = 400 + Math.random() * 200;
  osc.type = 'square';
  gain.gain.setValueAtTime(0.02, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.03);
};

export const BootScreen = ({ onComplete }: BootScreenProps) => {
  const [stage, setStage] = useState<'off' | 'booting' | 'loading' | 'complete'>('off');
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [bootText, setBootText] = useState<string[]>([]);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [systemStats, setSystemStats] = useState({ cpu: 0, ram: 0, disk: 0 });

  const bootMessages = [
    'UPTA-BIOS v3.0.25 - Inicializando...',
    'Verificando hardware del sistema...',
    '[OK] CPU: Intel Pentium 1.60 GHz detectado',
    '[OK] Memoria: 16384 MB DDR verificada',
    '[OK] GPU: Knowledge Graphics Unit activa',
    '[OK] Almacenamiento: Disco Seagate 149.1GB',
    '[OK] Red: Conexión comunitaria establecida',
    'Cargando Manual Técnico OS v2025...',
    'Inicializando interfaz gráfica...',
    'Sistema listo. Bienvenido!'
  ];

  const handlePowerOn = useCallback(() => {
    setShowButton(false);
    setShowMatrix(true);
    playBootSound();
    setStage('booting');
    
    setGlitchEffect(true);
    setTimeout(() => setGlitchEffect(false), 200);
  }, []);

  useEffect(() => {
    if (stage === 'booting') {
      let index = 0;
      const interval = setInterval(() => {
        if (index < bootMessages.length) {
          playTypingSound();
          setBootText(prev => [...prev, bootMessages[index]]);
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setShowMatrix(false);
            setStage('loading');
          }, 500);
        }
      }, 250);
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

        setSystemStats({
          cpu: Math.min(100, 30 + Math.random() * 70),
          ram: Math.min(100, 40 + Math.random() * 60),
          disk: Math.min(100, 20 + Math.random() * 80),
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [stage, onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden ${glitchEffect ? 'animate-glitch' : ''}`}>
      {/* Matrix rain effect */}
      {showMatrix && <MatrixRain />}

      {/* CRT screen effect - enhanced */}
      <div className="absolute inset-0 pointer-events-none crt-effect">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent animate-pulse" />
        <div className="absolute inset-0 scanlines" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5" />
        {/* Screen curvature effect */}
        <div className="absolute inset-0 rounded-[50px] shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
      </div>

      {/* Floating tech particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: `hsl(${120 + Math.random() * 60}, 80%, 50%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`
            }}
          />
        ))}
      </div>

      {/* Power off state */}
      {stage === 'off' && showButton && (
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          <div className="relative group">
            <Monitor className="w-40 h-40 text-gray-700 transition-all duration-500 group-hover:text-gray-600" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent rounded-lg animate-pulse" />
            {/* Decorative circuit lines */}
            <div className="absolute -inset-8 opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
                  style={{
                    top: `${i * 15}%`,
                    left: '-50%',
                    right: '-50%',
                    animation: `shimmer ${2 + i * 0.3}s linear infinite`,
                  }}
                />
              ))}
            </div>
          </div>
          <button
            onClick={handlePowerOn}
            className="group relative flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-4 border-gray-700 hover:border-green-500 transition-all duration-500 hover:shadow-[0_0_60px_rgba(34,197,94,0.7)] hover:scale-110"
          >
            <Power className="w-14 h-14 text-gray-600 group-hover:text-green-500 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.9)]" />
            <div className="absolute inset-0 rounded-full bg-green-500/0 group-hover:bg-green-500/10 transition-all duration-300" />
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full border-2 border-green-500/0 group-hover:border-green-500/50 group-hover:animate-ping" />
          </button>
          <div className="text-center space-y-2">
            <span className="text-gray-500 text-xl font-mono tracking-wider animate-pulse block">
              [ PRESIONA PARA ENCENDER ]
            </span>
            <span className="text-gray-600 text-xs font-mono">Manual Técnico Interactivo v2025</span>
          </div>
        </div>
      )}

      {/* Booting state - enhanced */}
      {stage === 'booting' && (
        <div className="flex flex-col gap-1 text-green-500 font-mono text-sm max-w-3xl w-full px-8 animate-fade-in">
          <div className="mb-4 flex items-center justify-between text-green-400 text-lg border-b border-green-500/30 pb-2">
            <span>UPTA-BIOS POST</span>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1"><Cpu className="w-3 h-3" /> CPU OK</span>
              <span className="flex items-center gap-1"><HardDrive className="w-3 h-3" /> HDD OK</span>
              <span className="flex items-center gap-1"><Wifi className="w-3 h-3" /> NET OK</span>
            </div>
          </div>
          {bootText.map((text, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-green-400 animate-pulse">›</span>
              <span className={text.includes('[OK]') ? 'text-green-400' : 'text-green-500/80'}>
                {text}
              </span>
              {index === bootText.length - 1 && <span className="animate-pulse ml-1">█</span>}
            </div>
          ))}
        </div>
      )}

      {/* Loading state - enhanced */}
      {stage === 'loading' && (
        <div className="flex flex-col items-center gap-8 animate-fade-in max-w-xl w-full px-4">
          <div className="relative">
            <img 
              src={logoUpta} 
              alt="UPTA Logo" 
              className="w-44 h-44 object-contain animate-pulse drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
            />
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-spin-slow" style={{ animationDuration: '8s' }} />
            {/* Orbiting dots */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-orbit"
                style={{
                  animationDelay: `${i * 0.33}s`,
                  animationDuration: '3s',
                }}
              />
            ))}
          </div>
          
          <div className="text-center space-y-3">
            <h2 className="text-white text-4xl font-bold tracking-wider bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-text-glow">
              Manual Técnico Interactivo
            </h2>
            <p className="text-blue-400 text-lg font-medium">UPTA "Federico Brito Figueroa"</p>
            <p className="text-gray-500 text-sm">Trayecto 1 - Sección 2 - Informática</p>
          </div>
          
          {/* Enhanced progress bar */}
          <div className="w-full space-y-4">
            <div className="h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-700 relative">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transition-all duration-100 ease-out relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
              </div>
              {/* Progress glow */}
              <div 
                className="absolute top-0 bottom-0 w-4 bg-cyan-400 blur-md"
                style={{ left: `${Math.min(progress, 100)}%`, transform: 'translateX(-50%)' }}
              />
            </div>
            <div className="flex justify-between text-gray-400 text-sm font-mono">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
                Cargando recursos...
              </span>
              <span className="text-cyan-400 font-bold">{Math.min(Math.round(progress), 100)}%</span>
            </div>
          </div>

          {/* System stats */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {[
              { label: 'CPU', value: systemStats.cpu, icon: Cpu },
              { label: 'RAM', value: systemStats.ram, icon: HardDrive },
              { label: 'DISCO', value: systemStats.disk, icon: HardDrive },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span>{stat.label}</span>
                  <stat.icon className="w-3 h-3" />
                </div>
                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-cyan-500 transition-all duration-300"
                    style={{ width: `${stat.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm italic max-w-md text-center animate-pulse">
            "La educación es el arma más poderosa que puedes usar para cambiar el mundo." — Nelson Mandela
          </p>
        </div>
      )}

      {/* Complete - enhanced flash */}
      {stage === 'complete' && (
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white animate-fade-in" />
      )}
    </div>
  );
};

export default BootScreen;

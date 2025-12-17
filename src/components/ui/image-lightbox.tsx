import { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { Button } from './button';

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageLightbox = ({ src, alt, className = '' }: ImageLightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));
  const handleRotate = () => setRotation((r) => (r + 90) % 360);

  const resetAndClose = () => {
    setIsOpen(false);
    setZoom(1);
    setRotation(0);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in hover:opacity-90 transition-opacity ${className}`}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center animate-fade-in"
          onClick={resetAndClose}
        >
          {/* Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); handleZoomOut(); }} className="text-white hover:bg-white/20">
              <ZoomOut className="h-5 w-5" />
            </Button>
            <span className="text-white text-sm">{Math.round(zoom * 100)}%</span>
            <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); handleZoomIn(); }} className="text-white hover:bg-white/20">
              <ZoomIn className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); handleRotate(); }} className="text-white hover:bg-white/20">
              <RotateCw className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={resetAndClose} className="text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Image */}
          <img
            src={src}
            alt={alt}
            className="max-w-[90vw] max-h-[90vh] object-contain transition-transform duration-300"
            style={{ transform: `scale(${zoom}) rotate(${rotation}deg)` }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

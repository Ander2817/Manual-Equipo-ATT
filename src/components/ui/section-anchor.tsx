import { Link2, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface SectionAnchorProps {
  id: string;
  className?: string;
}

export const SectionAnchor = ({ id, className = '' }: SectionAnchorProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast({
      title: 'Enlace copiado',
      description: 'El enlace de la sección ha sido copiado al portapapeles.',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`opacity-0 group-hover:opacity-100 transition-opacity ml-2 p-1 rounded hover:bg-secondary ${className}`}
      aria-label="Copiar enlace de sección"
    >
      {copied ? (
        <Check className="h-4 w-4 text-accent" />
      ) : (
        <Link2 className="h-4 w-4 text-muted-foreground hover:text-primary" />
      )}
    </button>
  );
};

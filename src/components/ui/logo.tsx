import React from 'react';
import { cn } from '@/lib/utils';
import { Feather } from 'lucide-react';

interface LogoProps {
  className?: string;
  textClassName?: string;
  iconClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, textClassName, iconClassName }) => {
  return (
    <div className={cn("flex items-center gap-2.5 select-none group", className)}>
      <div className={cn(
        "relative flex items-center justify-center w-8 h-8 rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-12",
        iconClassName
      )}>
        <Feather size={18} strokeWidth={2.5} className="relative z-10" />
        <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-50 transition-opacity" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={cn("text-xl font-bold font-serif tracking-tight text-foreground", textClassName)}>
          BioData Generator
        </span>
      </div>
    </div>
  );
};

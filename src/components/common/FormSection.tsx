import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const FormSection: React.FC<Props> = ({ title, icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-3 bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-200 hover:border-primary/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white text-left group"
      >
        <div className="flex items-center gap-3">
          <span className={`transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'}`}>
            {icon}
          </span>
          <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-slate-800' : 'text-slate-600'}`}>{title}</span>
        </div>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
             <ChevronDown size={16} className={`${isOpen ? 'text-primary' : 'text-slate-300'}`} />
        </div>
      </button>
      
      {isOpen && (
        <div className="p-4 pt-0 bg-white animate-in slide-in-from-top-1 duration-200">
          <div className="pt-4 border-t border-slate-50 space-y-4">
             {children}
          </div>
        </div>
      )}
    </div>
  );
};
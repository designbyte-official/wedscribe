import React from 'react';
import { ArrowLeft, Printer, RotateCcw, Languages, Download, FileImage, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onBack: () => void;
  onReset: () => void;
  onPrint: () => void;
  onDownload: (type: 'png' | 'pdf') => void;
}

export const Header: React.FC<HeaderProps> = ({ onBack, onReset, onPrint, onDownload }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="h-16 border-b border-border bg-white px-4 md:px-6 flex items-center justify-between shrink-0 z-30 relative">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onBack} className="text-slate-500 hover:text-slate-900 gap-2">
          <ArrowLeft size={18} />
          <span className="hidden sm:inline">{t('editor.back')}</span>
        </Button>
        <div className="h-6 w-px bg-slate-200 hidden sm:block" />
        <h1 className="font-serif text-xl font-bold text-slate-900 hidden md:block">BioData Generator</h1>
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-2">
              <Languages size={18} />
              <span className="uppercase">{language}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-accent' : ''}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage('hi')} className={language === 'hi' ? 'bg-accent' : ''}>
              हिंदी (Hindi)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline" size="sm" onClick={onReset} className="gap-2 hidden sm:flex text-slate-600">
          <RotateCcw size={16} />
          {t('editor.reset')}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" className="gap-2 shadow-lg shadow-primary/20">
              <Download size={16} />
              <span className="hidden sm:inline">Download</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onDownload('png')} className="gap-2 cursor-pointer">
              <FileImage size={16} className="text-blue-500" />
              <span>Download Image (PNG)</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDownload('pdf')} className="gap-2 cursor-pointer">
              <FileText size={16} className="text-red-500" />
              <span>Download PDF</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onPrint} className="gap-2 cursor-pointer">
              <Printer size={16} className="text-slate-500" />
              <span>Print Ready</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

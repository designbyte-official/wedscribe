import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/ui/logo';
import { Heart, Instagram, Twitter, Linkedin, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300 relative overflow-hidden border-t border-slate-800/50">
        {/* Decorative glow effects */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-primary/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-indigo-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-rose-500/5 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none animate-blob animation-delay-4000"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
        
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 p-4 sm:p-5 rounded-xl sm:rounded-2xl inline-block backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
              <Logo textClassName="text-white" /> 
            </div>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm max-w-md font-light">
              {t('footer.brand.desc')}
            </p>
            <div className="flex gap-2 sm:gap-3 pt-2">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-slate-300 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 hover:text-blue-400 hover:border-blue-500/30 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                aria-label="Twitter"
              >
                <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-slate-300 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-600/20 hover:text-pink-400 hover:border-pink-500/30 transition-all hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-slate-300 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-blue-700/20 hover:text-blue-400 hover:border-blue-600/30 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-600/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-white font-bold mb-4 sm:mb-6 tracking-wide uppercase text-[10px] sm:text-xs flex items-center gap-2 pb-2 border-b border-slate-800/50">
              <Sparkles size={12} className="sm:w-[14px] sm:h-[14px] text-amber-400 animate-pulse" />
              {t('footer.col.product')}
            </h3>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm font-light">
              <li>
                <Link to="/editor" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 group py-1">
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary opacity-0 group-hover:opacity-100 transition-all mr-1"></span>
                  {t('nav.templates')}
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </Link>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 group py-1">
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary opacity-0 group-hover:opacity-100 transition-all mr-1"></span>
                  Features
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              </li>
              <li>
                <a href="#templates" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 group py-1">
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary opacity-0 group-hover:opacity-100 transition-all mr-1"></span>
                  Templates
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-white font-bold mb-4 sm:mb-6 tracking-wide uppercase text-[10px] sm:text-xs flex items-center gap-2 pb-2 border-b border-slate-800/50">
              <Sparkles size={12} className="sm:w-[14px] sm:h-[14px] text-amber-400 animate-pulse" />
              {t('footer.col.company')}
            </h3>
            <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm font-light">
              <li>
                <a href="https://designbyte.dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 group py-1">
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary opacity-0 group-hover:opacity-100 transition-all mr-1"></span>
                  About DesignByte
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              </li>
              <li>
                <a href="https://studio.designbyte.dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 group py-1">
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary opacity-0 group-hover:opacity-100 transition-all mr-1"></span>
                  Studio
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 group py-1">
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary opacity-0 group-hover:opacity-100 transition-all mr-1"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 group py-1">
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary opacity-0 group-hover:opacity-100 transition-all mr-1"></span>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* CTA Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-bold mb-4 sm:mb-6 tracking-wide uppercase text-[10px] sm:text-xs flex items-center gap-2 pb-2 border-b border-slate-800/50">
              <Mail size={12} className="sm:w-[14px] sm:h-[14px] text-amber-400" />
              {t('footer.col.contact')}
            </h3>
            <p className="text-xs sm:text-sm font-light text-slate-400 mb-4 sm:mb-5 leading-relaxed">Have questions? We're here to help.</p>
            <a 
              href="mailto:hello@designbyte.dev" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all font-medium text-xs sm:text-sm group px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-primary/10 border border-transparent hover:border-primary/20 break-all"
            >
              hello@designbyte.dev
              <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <div className="mt-4 sm:mt-6 p-3 sm:p-5 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <p className="text-[10px] sm:text-xs text-slate-400 mb-1.5 sm:mb-2 font-medium uppercase tracking-wider">Built by</p>
              <a 
                href="https://designbyte.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-semibold text-xs sm:text-sm hover:text-primary transition-all flex items-center gap-1.5 group"
              >
                DesignByte Studio
                <ExternalLink size={10} className="sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </a>
            </div>
          </div>

        </div>
        
        <div className="pt-6 sm:pt-8 md:pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-center md:text-left text-[10px] sm:text-xs text-slate-500 font-medium">
            © 2024 <span className="text-slate-400 font-semibold">WedScribe</span> by <span className="text-primary/80 hover:text-primary transition-colors cursor-pointer">DesignByte Studio</span>. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-500 font-medium opacity-80 hover:opacity-100 transition-opacity group">
            Made with <Heart size={10} className="sm:w-3 sm:h-3 text-rose-500 fill-rose-500 animate-pulse group-hover:scale-125 transition-transform" /> in <span className="font-semibold text-slate-400">India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

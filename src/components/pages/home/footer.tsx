import React from 'react';
import { Logo } from '@/components/ui/logo';
import { Heart, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-950 text-slate-300 py-32 border-t border-slate-800/50 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-6">
            <div className="bg-white/5 p-4 rounded-xl inline-block backdrop-blur-sm border border-white/10">
                <Logo textClassName="text-white" /> 
            </div>
            <p className="text-slate-500 leading-relaxed text-sm">
                {t('footer.brand.desc')}
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-all">
                    <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-all">
                    <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-all">
                    <Linkedin size={18} />
                </a>
            </div>
        </div>

        {/* Links Column 1 */}
        <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">{t('footer.col.product')}</h3>
            <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">{t('nav.templates')}</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Showcase</a></li>
            </ul>
        </div>

        {/* Links Column 2 */}
        <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">{t('footer.col.company')}</h3>
            <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
            </ul>
        </div>
        
        {/* CTA Column */}
        <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">{t('footer.col.contact')}</h3>
            <p className="text-sm font-light text-slate-500 mb-6">Have questions? We're here to help.</p>
            <a href="mailto:hello@wedscribe.com" className="text-primary hover:text-primary/80 transition-colors font-medium">hello@wedscribe.com</a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-medium tracking-wide">
          <p>© 2024 WedScribe. {t('footer.rights')}</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0 opacity-70 hover:opacity-100 transition-opacity">
              Made with <Heart size={12} className="text-rose-600 fill-rose-600 animate-pulse" /> in India
          </div>
      </div>
    </footer>
  );
};

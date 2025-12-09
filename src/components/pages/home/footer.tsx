import React from 'react';
import { Logo } from '@/components/ui/logo';
import { Heart, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-950 text-slate-300 py-24 border-t border-slate-800">
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
                <li><a href="#" className="hover:text-white transition-colors">{t('nav.templates')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Assistant</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Showcase</a></li>
            </ul>
        </div>

        {/* Links Column 2 */}
        <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">{t('footer.col.company')}</h3>
            <ul className="space-y-4 text-sm font-light">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
        </div>
        
        {/* CTA Column */}
        <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">{t('footer.col.contact')}</h3>
            <p className="text-sm font-light text-slate-500 mb-6">Have questions? We're here to help.</p>
            <a href="mailto:hello@wedscribe.com" className="text-primary hover:text-primary/80 transition-colors font-medium">hello@wedscribe.com</a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>© 2024 WedScribe. {t('footer.rights')}</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
              Made with <Heart size={12} className="text-rose-600 fill-rose-600" /> in India
          </div>
      </div>
    </footer>
  );
};

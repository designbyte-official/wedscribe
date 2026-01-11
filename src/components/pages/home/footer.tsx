import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '@/components/ui/logo';
import { Heart, Instagram, Twitter, Linkedin, Mail, ExternalLink, Sparkles, ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative overflow-hidden bg-card border-t border-border/40">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <Logo textClassName="text-slate-900" />
            </div>

            <p className="text-muted-foreground leading-relaxed text-base font-light max-w-sm">
              {t('footer.brand.desc')}
            </p>

            <div className="flex gap-3 pt-2">
              {[
                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: Github, label: 'GitHub', href: 'https://github.com' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:shadow-md hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Product */}
            <div className="space-y-6">
              <h3 className="text-foreground font-bold text-xs uppercase tracking-widest">Product</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Templates', href: '/editor' },
                  { label: 'Features', href: '#features' },
                  { label: 'Pricing', href: '#' }
                ].map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-foreground font-bold text-xs uppercase tracking-widest">Company</h3>
              <ul className="space-y-3">
                {[
                  { label: 'About Us', href: 'https://designbyte.dev' },
                  { label: 'Studio', href: 'https://studio.designbyte.dev' },
                  { label: 'Privacy Policy', href: '#' },
                  { label: 'Terms', href: '#' }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-foreground font-bold text-xs uppercase tracking-widest">Contact</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm">Have questions?</p>
                <a
                  href="mailto:hello@designbyte.dev"
                  className="block text-primary font-bold text-base hover:underline decoration-primary/30 underline-offset-4"
                >
                  hello@designbyte.dev
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-medium">
            © 2024 <span className="text-foreground font-bold">WedScribe</span>. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium bg-card px-3 py-1.5 rounded-full shadow-sm border border-border/40">
            Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> by <a href="https://designbyte.dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">DesignByte Studio</a> in <span className="text-foreground font-bold uppercase tracking-widest text-[10px]">India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { MoonStar, FlameKindling, Flower2, Landmark, Mountain, HeartHandshake, Sparkles } from 'lucide-react';

const religions = [
  { 
    name: 'Hindu', 
    accent: 'from-orange-50 via-amber-50 to-white border-amber-200', 
    icon: FlameKindling, 
    detail: 'Sacred Saffron, Royal Red, Regal Anvika' 
  },
  { 
    name: 'Muslim', 
    accent: 'from-emerald-50 via-teal-50 to-white border-emerald-200', 
    icon: MoonStar, 
    detail: 'Noor Crescent, Mint Blossom' 
  },
  { 
    name: 'Christian', 
    accent: 'from-indigo-50 via-blue-50 to-white border-indigo-200', 
    icon: Landmark, 
    detail: 'Graceful Lily, Sky Blossom' 
  },
  { 
    name: 'Sikh', 
    accent: 'from-amber-50 via-yellow-50 to-white border-amber-200', 
    icon: Mountain, 
    detail: 'Minimalist, Ivory Lines' 
  },
  { 
    name: 'Jain', 
    accent: 'from-rose-50 via-orange-50 to-white border-rose-200', 
    icon: Flower2, 
    detail: 'Ivory Lines, Minimalist' 
  },
  { 
    name: 'Buddhist', 
    accent: 'from-slate-50 via-rose-50 to-white border-slate-200', 
    icon: HeartHandshake, 
    detail: 'Mint Blossom, Sky Blossom' 
  },
];

export const ReligionSelection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-32 bg-white relative">
      <div className="absolute inset-x-0 top-10 mx-auto max-w-6xl h-[420px] bg-gradient-to-r from-orange-100/40 via-indigo-100/40 to-emerald-100/40 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center"
        >
          <div className="text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              <Sparkles size={14} className="text-amber-500" /> Multi-faith ready
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
              {t('home.religion.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500">{t('home.religion.highlight')}</span>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-xl">
              {t('home.religion.desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                9 crafted templates
              </span>
              <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                Cultural typography
              </span>
              <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                Print-ready layouts
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {religions.map((rel, index) => (
              <motion.div
                key={rel.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group relative p-6 rounded-2xl border ${rel.accent} hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-lg bg-white/70 backdrop-blur`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/60 to-transparent" />
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/70 border border-white/60 flex items-center justify-center text-current shadow-sm">
                    <rel.icon size={18} />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-lg tracking-tight">{rel.name}</span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{t('nav.templates')}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{rel.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

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
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-20 mx-auto max-w-6xl h-[300px] sm:h-[500px] bg-gradient-to-r from-orange-100/30 via-indigo-100/30 to-emerald-100/30 blur-2xl sm:blur-3xl pointer-events-none animate-blob" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 mb-4 sm:mb-6 shadow-sm">
            <Sparkles size={12} className="sm:w-[14px] sm:h-[14px] text-amber-500" /> Multi-faith ready
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-4 sm:mb-6 px-4">
            {t('home.religion.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500">{t('home.religion.highlight')}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            {t('home.religion.desc')}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            <span className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
              30+ Premium Templates
            </span>
            <span className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
              Cultural Typography
            </span>
            <span className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
              A4 Print Ready
            </span>
            <span className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
              Instant Download
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {religions.map((rel, index) => (
            <motion.div
              key={rel.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 ${rel.accent} hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden bg-white/80 backdrop-blur-sm`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${rel.accent.split(' ')[0]}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10 space-y-3 sm:space-y-4 text-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${rel.accent.split(' ')[0]}/10 group-hover:${rel.accent.split(' ')[0]}/20 border-2 border-current/20 flex items-center justify-center mx-auto text-current shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <rel.icon size={18} className="sm:w-[22px] sm:h-[22px] text-slate-700" />
                </div>
                <div>
                  <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 block mb-0.5 sm:mb-1">{rel.name}</span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-slate-500 font-medium">{t('nav.templates')}</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed line-clamp-2">{rel.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

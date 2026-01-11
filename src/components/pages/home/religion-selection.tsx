import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { MoonStar, FlameKindling, Flower2, Landmark, Mountain, HeartHandshake, Sparkles } from 'lucide-react';

const religions = [
  {
    name: 'Hindu',
    icon: FlameKindling,
    detail: 'Sacred Saffron, Royal Red, Regal Anvika'
  },
  {
    name: 'Muslim',
    icon: MoonStar,
    detail: 'Noor Crescent, Mint Blossom'
  },
  {
    name: 'Christian',
    icon: Landmark,
    detail: 'Graceful Lily, Sky Blossom'
  },
  {
    name: 'Sikh',
    icon: Mountain,
    detail: 'Minimalist, Ivory Lines'
  },
  {
    name: 'Jain',
    icon: Flower2,
    detail: 'Ivory Lines, Minimalist'
  },
  {
    name: 'Buddhist',
    icon: HeartHandshake,
    detail: 'Mint Blossom, Sky Blossom'
  },
];

export const ReligionSelection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 sm:py-32 md:py-48 bg-slate-50 relative overflow-hidden" style={{ paddingBlock: 'var(--section-gap)' }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 via-transparent to-amber-500/5 blur-[120px] -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 shadow-sm">
            <Sparkles size={14} className="text-amber-500" /> Multi-faith ready
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-8 tracking-tight">
            {t('home.religion.title')} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 italic">
              {t('home.religion.highlight')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            {t('home.religion.desc')}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "30+ Premium Templates",
              "Cultural Typography",
              "A4 Print Ready",
              "Instant Download"
            ].map((feature, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full bg-white text-slate-600 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                {feature}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {religions.map((rel, index) => (
            <motion.div
              key={rel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
              className={cn(
                "group relative p-6 rounded-2xl bg-card border border-border transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1"
              )}
            >
              <div className="relative z-10 space-y-4 text-center">
                <div className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mx-auto shadow-sm bg-primary/5 text-primary group-hover:bg-primary/10 transition-all duration-300"
                )}>
                  <rel.icon size={26} strokeWidth={1.5} />
                </div>

                <div>
                  <span className="font-bold text-lg tracking-tight text-card-foreground block mb-1">{rel.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">{t('nav.templates')}</span>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed font-normal opacity-100">
                  {rel.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

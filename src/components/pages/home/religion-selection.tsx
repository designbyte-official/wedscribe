import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';

const religions = [
  { name: 'Hindu', color: 'bg-orange-100 text-orange-700 border-orange-200' },
  { name: 'Muslim', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  { name: 'Sikh', color: 'bg-amber-100 text-amber-700 border-amber-200' },
  { name: 'Christian', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { name: 'Jain', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
  { name: 'Buddhist', color: 'bg-rose-100 text-rose-700 border-rose-200' },
];

export const ReligionSelection: React.FC = () => {
    const { t } = useLanguage();
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6">
                {t('home.religion.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">{t('home.religion.highlight')}</span>
            </h2>
            <p className="text-lg text-slate-500 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                {t('home.religion.desc')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {religions.map((rel, index) => (
                    <motion.div
                        key={rel.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className={`group relative p-6 rounded-2xl border ${rel.color} hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center justify-center gap-3 bg-opacity-50 backdrop-blur-sm `}
                    >
                         <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="h-2 w-2 rounded-full bg-current opacity-50 group-hover:scale-150 transition-transform"></div>
                        <span className="font-semibold text-lg tracking-tight relative z-10">{rel.name}</span>
                    </motion.div>
                ))}
            </div>
            
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12"
            >
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-500 font-medium text-sm bg-slate-50 shadow-sm hover:bg-white hover:shadow-md transition-all">
                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                    {t('home.religion.community')}
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { Shield, Layout, Printer, Heart, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from '@/context/LanguageContext';

const FeatureCard = ({ icon, title, description, delay, className = "" }: { icon: React.ReactNode, title: string, description: string, delay: number, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    <Card className="h-full border-0 shadow-lg bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-500 group overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700 ease-out" />
      
      <CardHeader className="relative z-10 pt-8 px-8">
        <div className="mb-6 w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500 text-primary">
            {icon}
        </div>
        <CardTitle className="text-2xl font-bold text-slate-900 font-serif mb-2 tracking-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10 px-8 pb-8">
        <p className="text-slate-500 leading-relaxed font-light text-base">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-pink-100 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-indigo-50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 shadow-sm"
          >
            <Sparkles size={12} className="text-amber-500" /> Premium Features
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-6 leading-tight"
          >
           {t('home.features.title')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 font-light leading-loose"
          >
            {t('home.features.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Shield size={24} />}
            title={t('home.feature.3.title')}
            description={t('home.feature.3.desc')}
            delay={0.1}
            className="md:col-span-1"
          />
          <FeatureCard 
            icon={<Layout size={24} />}
            title={t('home.feature.1.title')}
            description={t('home.feature.1.desc')}
            delay={0.2}
            className="md:col-span-1"
          />
          <FeatureCard 
            icon={<Printer size={24} />}
            title={t('home.feature.4.title')}
            description={t('home.feature.4.desc')}
            delay={0.3}
            className="md:col-span-1"
          />
          <FeatureCard 
            icon={<Heart size={24} />}
            title="Thoughtful Layouts"
            description="Sections are organized to highlight what matters most—personality, family values, and career achievements."
            delay={0.4}
            className="md:col-span-1"
          />
          <FeatureCard 
            icon={<Clock size={24} />}
            title="Instant Preview"
            description="See changes in real-time as you type. No loading screens or complicated editors. Just click and type."
            delay={0.5}
            className="md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

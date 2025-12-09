import React from 'react';
import { Shield, Layout, Printer, Heart, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from '@/context/LanguageContext';

// FeatureCard Component
const FeatureCard = ({ icon, title, description, delay, gradient, bgGradient, className = "" }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  delay: number, 
  gradient: string,
  bgGradient: string,
  className?: string 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={cn("h-full", className)}
  >
    <Card className={`h-full border-0 shadow-lg bg-gradient-to-br ${bgGradient} hover:shadow-2xl transition-all duration-300 group overflow-hidden relative ring-1 ring-white/50 hover:-translate-y-1`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${gradient} rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700 ease-out blur-3xl opacity-20`} />
      
      <CardHeader className="relative z-10 pt-8 px-6">
        <div className={`mb-5 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 text-white`}>
            {React.cloneElement(icon as React.ReactElement, { size: 24, strokeWidth: 2 })}
        </div>
        <CardTitle className="text-xl font-bold text-slate-900 font-serif mb-3 tracking-tight group-hover:text-slate-950 transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10 px-6 pb-8">
        <p className="text-slate-600 leading-relaxed font-light text-sm group-hover:text-slate-700 transition-colors">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Layout size={24} />,
      title: t('home.feature.1.title'),
      description: t('home.feature.1.desc'),
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      delay: 0.1
    },
    {
      icon: <Shield size={24} />,
      title: t('home.feature.3.title'),
      description: t('home.feature.3.desc'),
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50',
      delay: 0.2
    },
    {
      icon: <Printer size={24} />,
      title: t('home.feature.4.title'),
      description: t('home.feature.4.desc'),
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
      delay: 0.3
    },
    {
      icon: <Heart size={24} />,
      title: "Thoughtful Layouts",
      description: "Sections are organized to highlight what matters most—personality, family values, and career achievements.",
      gradient: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-50 to-pink-50',
      delay: 0.4
    },
    {
      icon: <Clock size={24} />,
      title: "Instant Preview",
      description: "See changes in real-time as you type. No loading screens or complicated editors. Just click and type.",
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50',
      delay: 0.5
    },
    {
      icon: <Sparkles size={24} />,
      title: "A4 Print Ready",
      description: "All templates are optimized for A4 paper size, ensuring perfect printing every time. Download as PDF or PNG.",
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-50 to-purple-50',
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-pink-200/30 rounded-full blur-[80px] sm:blur-[120px] animate-blob" />
          <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-indigo-200/30 rounded-full blur-[80px] sm:blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute top-[50%] left-[50%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-amber-200/20 rounded-full blur-[60px] sm:blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-600 mb-4 sm:mb-6 shadow-sm"
          >
            <Sparkles size={12} className="sm:w-[14px] sm:h-[14px] text-amber-500" /> Premium Features
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-slate-900 mb-4 sm:mb-6 leading-tight"
          >
           {t('home.features.title')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto px-4"
          >
            {t('home.features.subtitle')}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              gradient={feature.gradient}
              bgGradient={feature.bgGradient}
              className="md:col-span-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

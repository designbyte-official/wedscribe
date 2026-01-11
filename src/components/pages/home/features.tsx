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
// FeatureCard Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  gradient: string;
  className?: string; // Restore className for bento grid spans
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, gradient, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={cn("h-full", className)}
  >
    <Card className="h-full border-border bg-card text-card-foreground hover:shadow-lg transition-all duration-300 group overflow-hidden border">
      <CardHeader className="pt-6 px-6">
        <div className={cn(
          "mb-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300",
          "bg-primary/10 text-primary" // Strict Shadcn usage
        )}>
          {React.cloneElement(icon as React.ReactElement, { size: 24, strokeWidth: 1.5 })}
        </div>
        <CardTitle className="text-xl font-bold text-slate-900 font-serif mb-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Layout />,
      title: t('home.feature.1.title'),
      description: t('home.feature.1.desc'),
      gradient: '',
      delay: 0.1,
      className: "lg:col-span-2"
    },
    {
      icon: <Shield />,
      title: t('home.feature.3.title'),
      description: t('home.feature.3.desc'),
      gradient: '',
      delay: 0.2,
      className: "lg:col-span-1"
    },
    {
      icon: <Printer />,
      title: t('home.feature.4.title'),
      description: t('home.feature.4.desc'),
      gradient: '',
      delay: 0.3,
      className: "lg:col-span-1"
    },
    {
      icon: <Heart />,
      title: "Thoughtful Layouts",
      description: "Sections are organized to highlight what matters most—personality, family values, and career achievements.",
      gradient: '',
      delay: 0.4,
      className: "lg:col-span-1"
    },
    {
      icon: <Clock />,
      title: "Instant Preview",
      description: "See changes in real-time as you type. No loading screens or complicated editors. Just click and type.",
      gradient: '',
      delay: 0.5,
      className: "lg:col-span-1"
    },
    {
      icon: <Sparkles />,
      title: "A4 Print Ready",
      description: "All templates are optimized for A4 paper size, ensuring perfect printing every time. Download as PDF or PNG.",
      gradient: '',
      delay: 0.6,
      className: "lg:col-span-2"
    }
  ];

  return (
    <section id="features" className="py-24 sm:py-32 md:py-48 bg-slate-50 relative overflow-hidden" style={{ paddingBlock: 'var(--section-gap)' }}>
      {/* Decorative bg - Refined */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 sm:mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 shadow-sm"
          >
            <Sparkles size={14} className="text-amber-500 animate-pulse" /> Premium Experience
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-slate-900 mb-8 leading-[1.1] tracking-tight"
          >
            {t('home.features.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto"
          >
            {t('home.features.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
              gradient={feature.gradient}
              className={feature.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

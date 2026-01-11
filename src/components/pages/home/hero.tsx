import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, ArrowRight, PenTool, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

const slides = [
  "/biodata-Aayush Kumar (2).png",
  "/biodata-Aayush Kumar (3).png",
  "/biodata-Aayush Kumar (6).png",
  "/biodata-Aayush Kumar (7).png",
  "/biodata-Aayush Kumar (8).png",
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-auto aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl bg-card/50 backdrop-blur-sm group">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[index]}
            alt="Biodata Template Preview"
            className="w-full h-full object-contain p-4 md:p-6 transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all duration-300",
              index === i ? "bg-primary w-4" : "bg-primary/20"
            )}
          />
        ))}
      </div>
    </div >
  );
};

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleStart = () => {
    navigate('/editor');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-28 sm:pt-32 pb-20 sm:pb-32">
      {/* Background Elements - Refined Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[100px] sm:blur-[150px] mix-blend-multiply"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-200/40 rounded-full blur-[80px] sm:blur-[120px] mix-blend-multiply"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-rose-200/30 rounded-full blur-[80px] sm:blur-[120px] mix-blend-multiply"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 text-center lg:text-left space-y-8 sm:space-y-10"
        >
          <Badge variant="outline" className="px-4 py-2 bg-background/50 backdrop-blur-md border-transparent text-primary shadow-sm rounded-full gap-2.5 hover:bg-background/80 transition-colors select-none font-medium text-xs tracking-wider uppercase">
            <Sparkles size={14} className="fill-primary/20 text-primary animate-pulse" />
            <span>{t('home.hero.badge')}</span>
          </Badge>

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold font-serif text-foreground leading-[1.05] tracking-tight">
              {t('home.hero.title.prefix')} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-amber-500 italic pr-2">
                {t('home.hero.title.highlight')}
              </span>
              <br className="hidden xl:block" />
              {t('home.hero.title.suffix')}
            </h1>

            <p className="text-lg sm:text-xl md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              {t('home.hero.desc')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
            <Button onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" size="lg" className="rounded-full px-12 h-16 text-lg font-semibold border-border bg-background/50 backdrop-blur-md hover:bg-muted/50 hover:border-primary/20 transition-all shadow-lg hover:shadow-xl order-2 sm:order-1 ring-offset-2 hover:ring-2 hover:ring-primary/10">
              {t('home.hero.btn.templates')}
            </Button>

            <Button asChild size="lg" className="rounded-full px-12 h-16 text-lg font-semibold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.03] active:scale-[0.98] bg-primary hover:bg-primary/95 order-1 sm:order-2 ring-offset-2 hover:ring-2 hover:ring-primary/20">
              <Link to="/editor">
                {t('home.hero.btn.create')} <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-muted-foreground">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-muted"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-muted-foreground/10"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-muted-foreground/20"></div>
            </div>
            <p className="text-center sm:text-left">{t('home.hero.trusted')} <span className="text-foreground font-bold">10,000+</span> {t('home.hero.families')}</p>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative hidden lg:flex items-center justify-center perspective-1000"
        >
          {/* Main Template Card Visual - Slider */}
          <div className="relative z-10 w-full max-w-[420px] transform transition-all duration-700 hover:scale-[1.02] hover:-rotate-1">
            <div className="relative p-2.5 sm:p-4 rounded-[2rem] bg-background/40 border-transparent backdrop-blur-md shadow-2xl overflow-visible">

              <HeroSlider />

              {/* Floating Badge 1 - Design */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-auto bg-card/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:rotate-12 transition-transform">
                  <PenTool size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-xs sm:text-sm">{t('home.hero.status')}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Premium Bio Data Layouts</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Privacy */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-8 -left-8 lg:-bottom-12 lg:-left-12 w-auto bg-card/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-600">
                  <Shield size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-xs sm:text-sm">{t('home.hero.feature')}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Secure Bio Data Privacy</div>
                </div>
              </motion.div>

              {/* Floating Logo Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                className="absolute top-1/2 -right-6 lg:-right-8 translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 bg-background p-3 rounded-full shadow-2xl z-30 flex items-center justify-center group"
              >
                <img src="/wedscribe-logo.png" alt="WedScribe" className="w-full h-full object-contain group-hover:rotate-12 transition-transform duration-500" />
              </motion.div>
            </div>
          </div>

          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-primary/5 via-primary/10 to-transparent rounded-full blur-[100px] -z-10 animate-pulse" />
        </motion.div>
      </div >
    </section >
  );
};

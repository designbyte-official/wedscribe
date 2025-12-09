import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, ArrowRight, PenTool, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

const slidess = [
  "/hero-biodata.png",
  "/hero-biodata.png", // Duplicate for demo
  "/hero-biodata.png", // Duplicate for demo
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidess.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-auto aspect-[3/4] overflow-hidden rounded-xl shadow-inner bg-slate-50">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={slidess[index]}
          alt="Biodata Template Preview"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleStart = () => {
    navigate('/editor');
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-24 sm:pt-32 pb-16 sm:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] mix-blend-multiply animate-blob"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-100/40 rounded-full blur-[60px] sm:blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
          <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-rose-100/30 rounded-full blur-[60px] sm:blur-[100px] mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
        >
            <Badge variant="secondary" className="mb-6 sm:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 bg-background/80 backdrop-blur border border-border text-primary shadow-sm rounded-full gap-2 hover:bg-accent/50 select-none">
                <Sparkles size={12} className="sm:w-[14px] sm:h-[14px] fill-primary/20 text-primary" /> 
                <span className="tracking-wide text-[9px] sm:text-[10px] md:text-xs font-bold uppercase">{t('home.hero.badge')}</span>
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-foreground leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 tracking-tight">
                {t('home.hero.title.prefix')} <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-amber-500 italic pr-2 animate-gradient bg-300%">{t('home.hero.title.highlight')}</span> 
                {t('home.hero.title.suffix')}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 font-light">
                {t('home.hero.desc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="rounded-full px-6 sm:px-8 h-11 sm:h-12 md:h-14 text-sm sm:text-base font-medium shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
                    <Link to="/editor">
                        {t('home.hero.btn.create')} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                </Button>
                
                <Button onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth'})} variant="outline" size="lg" className="rounded-full px-6 sm:px-8 h-11 sm:h-12 md:h-14 text-sm sm:text-base font-medium border-border hover:bg-accent hover:text-accent-foreground transition-all w-full sm:w-auto">
                    {t('home.hero.btn.templates')}
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
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[650px] hidden lg:flex items-center justify-center perspective-1000"
        >
            {/* Main Template Card Visual - Slider */}
            <div className="relative z-10 w-full max-w-md transform rotate-y-[-5deg] rotate-x-[2deg] hover:rotate-0 transition-transform duration-700 ease-out">
                <div className="relative rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] bg-white p-3 border border-border/50 backdrop-blur-sm">
                    
                   <HeroSlider />
                    
                    {/* Floating Badge 1 */}
                    <motion.div 
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-4 -right-4 xl:-top-6 xl:-right-6 w-auto bg-white p-2 xl:p-3 rounded-xl shadow-xl border border-border z-20 flex items-center gap-2 xl:gap-3"
                    >
                        <div className="p-1.5 xl:p-2 bg-emerald-50 rounded-lg text-emerald-600">
                            <PenTool size={16} className="xl:w-[18px] xl:h-[18px]" />
                        </div>
                        <div>
                            <div className="font-bold text-foreground text-[10px] xl:text-xs">{t('home.hero.status')}</div>
                        </div>
                    </motion.div>

                    {/* Floating Badge 2 - Privacy */}
                    <motion.div 
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-6 -left-6 xl:-bottom-8 xl:-left-8 w-auto bg-white p-2 xl:p-3 rounded-xl shadow-xl border border-border z-20 flex items-center gap-2 xl:gap-3"
                    >
                        <div className="p-1.5 xl:p-2 bg-amber-50 rounded-lg text-amber-600">
                            <Shield size={16} className="xl:w-[18px] xl:h-[18px]" />
                        </div>
                        <div>
                            <div className="font-bold text-foreground text-[10px] xl:text-xs">{t('home.hero.feature')}</div>
                        </div>
                    </motion.div>

                     {/* Floating Logo Badge */}
                     <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-1/2 -right-12 xl:-right-16 w-12 h-12 xl:w-16 xl:h-16 bg-white p-1.5 xl:p-2 rounded-full shadow-2xl border border-border z-30 flex items-center justify-center"
                    >
                        <img src="/wedscribe-logo.png" alt="WedScribe" className="w-full h-full object-contain" />
                    </motion.div>
                </div>
            </div>
            
            {/* Decorative blob behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-accent/30 via-transparent to-primary/5 rounded-full blur-[80px] -z-10"></div>

        </motion.div>
      </div>
    </section>
  );
};

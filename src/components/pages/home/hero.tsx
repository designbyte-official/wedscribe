import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, ArrowRight, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleStart = () => {
    navigate('/editor');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-32 pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
        >
            <Badge variant="secondary" className="mb-8 px-4 py-2 bg-background/80 backdrop-blur border border-border text-primary shadow-sm rounded-full gap-2 hover:bg-accent/50 select-none">
                <Sparkles size={14} className="fill-primary/20 text-primary" /> 
                <span className="tracking-wide text-[10px] md:text-xs font-bold uppercase">{t('home.hero.badge')}</span>
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-foreground leading-[1.1] mb-8 tracking-tight">
                {t('home.hero.title.prefix')} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500 italic pr-2">{t('home.hero.title.highlight')}</span> 
                {t('home.hero.title.suffix')}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg font-light">
                {t('home.hero.desc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full px-8 h-12 md:h-14 text-base font-medium shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95">
                    <Link to="/editor">
                        {t('home.hero.btn.create')} <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </Button>
                
                <Button onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth'})} variant="outline" size="lg" className="rounded-full px-8 h-12 md:h-14 text-base font-medium border-border hover:bg-accent hover:text-accent-foreground transition-all">
                    {t('home.hero.btn.templates')}
                </Button>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm font-medium text-muted-foreground">
                <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-background bg-muted"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-background bg-muted-foreground/10"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-background bg-muted-foreground/20"></div>
                </div>
                <p>{t('home.hero.trusted')} <span className="text-foreground font-bold">10,000+</span> {t('home.hero.families')}</p>
            </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[650px] hidden lg:flex items-center justify-center perspective-1000"
        >
            {/* Main Template Card Visual - Replaced with Image */}
            <div className="relative z-10 w-full max-w-md transform rotate-y-[-5deg] rotate-x-[2deg] hover:rotate-0 transition-transform duration-700 ease-out">
                <div className="relative rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] bg-white p-2 border border-border/50">
                    <img 
                        src="/hero-biodata.png"
                        alt="Biodata Template Preview" 
                        className="w-full h-auto rounded-xl"
                    />
                    
                    {/* Floating Badge 1 */}
                    <motion.div 
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 w-auto bg-white p-3 rounded-xl shadow-xl border border-border z-20 flex items-center gap-3"
                    >
                        <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                            <PenTool size={18} />
                        </div>
                        <div>
                            <div className="font-bold text-foreground text-xs">{t('home.hero.status')}</div>
                        </div>
                    </motion.div>

                    {/* Floating Badge 2 */}
                    <motion.div 
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-8 -left-8 w-auto bg-white p-3 rounded-xl shadow-xl border border-border z-20 flex items-center gap-3"
                    >
                        <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                            <Sparkles size={18} />
                        </div>
                        <div>
                            <div className="font-bold text-foreground text-xs">{t('home.hero.feature')}</div>
                        </div>
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

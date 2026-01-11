import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Menu } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const handleStart = () => navigate('/editor');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-sm border-slate-200/50 py-2 support-[backdrop-filter]:bg-white/50"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <Logo className="scale-90 sm:scale-100" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink href="#features" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-slate-100")}>
                  {t('nav.features')}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#templates" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-slate-100")}>
                  {t('nav.templates')}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#faq" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-slate-100")}>
                  {t('nav.faq')}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <LanguageSwitcher className="ml-2" triggerClassName="rounded-full" />

          <Button
            asChild
            size="sm"
            className="gap-2 group ml-4 rounded-full px-6 h-10 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
          >
            <Link to="/editor">
              {t('nav.create')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl text-left">BioData Generator</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                <LanguageSwitcher className="flex justify-end" triggerClassName="rounded-full w-full justify-between px-3" showLabel />
                <a href="#features" className="text-lg font-medium hover:text-primary transition-colors border-b pb-2">{t('nav.features')}</a>
                <a href="#templates" className="text-lg font-medium hover:text-primary transition-colors border-b pb-2">{t('nav.templates')}</a>
                <a href="#faq" className="text-lg font-medium hover:text-primary transition-colors border-b pb-2">{t('nav.faq')}</a>
                <Button onClick={handleStart} className="w-full mt-4 rounded-full">
                  {t('nav.create')}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

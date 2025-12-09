import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'motion/react';
import { HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const FAQ: React.FC = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t('home.faq.q1'),
      answer: t('home.faq.a1')
    },
    {
      question: t('home.faq.q2'),
      answer: t('home.faq.a2')
    },
    {
      question: "Can I edit my biodata after downloading?",
      answer: "Since we don't store your data on servers, you can't log back in to edit. However, you can use the \"Save Progress\" feature to download a small file that you can re-upload later to continue exactly where you left off."
    },
    {
      question: "Are the templates free to use?",
      answer: "Yes! All 30+ templates are completely free to use. Create, customize, and download your biodata without any charges or hidden fees."
    },
    {
      question: "What file formats can I download?",
      answer: "You can download your biodata in both PDF and PNG formats. PDF is perfect for printing, while PNG is great for sharing digitally."
    },
    {
      question: "Is my personal information safe?",
      answer: "Absolutely! We don't store any of your personal data on our servers. Everything is processed locally in your browser, ensuring complete privacy and security."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-amber-100/20 rounded-full blur-2xl sm:blur-3xl pointer-events-none animate-blob" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-rose-100/20 rounded-full blur-2xl sm:blur-3xl pointer-events-none animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-indigo-50/10 rounded-full blur-2xl sm:blur-3xl pointer-events-none animate-blob animation-delay-4000" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Icon with orange border - matching image description */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-amber-500 bg-white mb-4 sm:mb-6 shadow-sm"
          >
            <HelpCircle size={24} className="sm:w-[28px] sm:h-[28px] text-amber-500" strokeWidth={2} />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight px-4"
          >
            {t('home.faq.title')}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-600 font-light text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
          >
            {t('home.faq.desc')}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-3"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border border-slate-200 rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 bg-white/90 backdrop-blur-sm data-[state=open]:border-amber-500/50 data-[state=open]:bg-white data-[state=open]:shadow-lg data-[state=open]:shadow-amber-500/5 data-[state=open]:ring-2 data-[state=open]:ring-amber-500/10 transition-all duration-300 hover:border-slate-300 hover:shadow-md"
                >
                  <AccordionTrigger className="hover:no-underline text-sm sm:text-base md:text-lg font-semibold text-slate-800 py-4 sm:py-5 data-[state=open]:text-amber-600 transition-colors duration-300 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-4 sm:pb-5 text-xs sm:text-sm md:text-base font-light data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

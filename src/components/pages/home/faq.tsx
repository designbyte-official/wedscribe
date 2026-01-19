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
    <section id="faq" className="py-24 sm:py-32 md:py-48 bg-background relative overflow-hidden">
      {/* Animated Background Blobs - Refined */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none animate-blob" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-2000" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 sm:mb-24"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card mb-8 shadow-sm text-amber-500"
          >
            <HelpCircle size={32} strokeWidth={1.5} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 tracking-tight"
          >
            {t('home.faq.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
          >
            {t('home.faq.desc')}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border/40 rounded-2xl px-6 bg-card shadow-sm data-[state=open]:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline text-lg font-medium text-foreground py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
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

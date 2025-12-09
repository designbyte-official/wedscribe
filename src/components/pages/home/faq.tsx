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
  return (
    <section id="faq" className="py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-slate-100 text-slate-500 mb-6">
                <HelpCircle size={24} />
            </div>
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold font-serif text-slate-900 mb-4"
            >
                {t('home.faq.title')}
            </motion.h2>
            <p className="text-slate-500 font-light text-lg">{t('home.faq.desc')}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 rounded-lg px-6 bg-white data-[state=open]:border-primary/50 data-[state=open]:ring-4 data-[state=open]:ring-primary/5 transition-all">
              <AccordionTrigger className="hover:no-underline text-lg font-medium text-slate-700 py-6">
                  {t('home.faq.q1')}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed pb-6 text-base font-light">
                {t('home.faq.a1')}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-slate-200 rounded-lg px-6 bg-white data-[state=open]:border-primary/50 data-[state=open]:ring-4 data-[state=open]:ring-primary/5 transition-all">
              <AccordionTrigger className="hover:no-underline text-lg font-medium text-slate-700 py-6">
                  {t('home.faq.q2')}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed pb-6 text-base font-light">
                {t('home.faq.a2')}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-200 rounded-lg px-6 bg-white data-[state=open]:border-primary/50 data-[state=open]:ring-4 data-[state=open]:ring-primary/5 transition-all">
              <AccordionTrigger className="hover:no-underline text-lg font-medium text-slate-700 py-6">
                  Can I edit my biodata after downloading?
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed pb-6 text-base font-light">
                Since we don't store your data on servers, you can't log back in to edit. However, you can use the "Save Progress" feature to download a small file that you can re-upload later to continue exactly where you left off.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Wand2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

export const AISection: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    return (
        <section className="py-32 bg-slate-900 relative overflow-hidden text-white">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-purple-300 mb-6 backdrop-blur-md">
                            <Sparkles size={12} className="text-purple-400" /> {t('home.ai.tag')}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                            {t('home.ai.title.1')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t('home.ai.title.2')}</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 font-light leading-relaxed max-w-lg">
                            {t('home.ai.desc')}
                        </p>
                        
                        <div className="space-y-4 mb-10">
                            {[
                                "Professional Tone Adjustment",
                                "Grammar & Spell Check",
                                "Keywords Optimization",
                                "Instant Variations"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-300">
                                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Button asChild size="lg" className="rounded-full px-8 h-12 bg-white text-slate-900 hover:bg-slate-100 font-semibold text-base">
                            <Link to="/editor">
                                {t('home.ai.btn')} <Wand2 size={16} className="ml-2" />
                            </Link> 
                        </Button>
                    </motion.div>

                    {/* Right: Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                         className="relative"
                    >
                         {/* Abstract card looking like a chat or editor interface */}
                        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                             {/* Mock UI Header */}
                             <div className="flex items-center gap-2 mb-6 border-b border-slate-700 pb-4">
                                 <div className="flex gap-1.5">
                                     <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                     <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                     <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                 </div>
                                 <div className="ml-auto text-xs text-slate-500 font-mono">AI_Draft_v2.txt</div>
                             </div>

                             {/* Mock Content */}
                             <div className="space-y-4 font-mono text-sm leading-relaxed">
                                 <div className="text-slate-400">// Prompt</div>
                                 <div className="bg-slate-900/50 p-3 rounded text-purple-300 border border-purple-500/20">
                                     "Write a professional summary for a software engineer looking for a partner who values family."
                                 </div>
                                 
                                 <div className="text-slate-400 mt-6">// Result</div>
                                 <div className="text-slate-200 typing-effect">
                                     "Ambitious Software Engineer with a passion for innovation. I value deep family connections and am seeking a partner who shares similar traditional values while embracing modern aspirations..."
                                     <span className="w-2 h-4 bg-purple-400 inline-block align-middle ml-1 animate-pulse" />
                                 </div>
                             </div>

                             {/* Decorative Glow */}
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

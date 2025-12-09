import React from 'react';
import { LayoutGrid, PenTool, Heart, ChevronRight } from 'lucide-react';
import { TemplateType } from '@/types';
import { EditorContent } from './editor-content';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  desktopTab: 'templates' | 'edit';
  setDesktopTab: (tab: 'templates' | 'edit') => void;
  activeTemplate: TemplateType;
  setActiveTemplate: (type: TemplateType) => void;
  onGenerateBio: () => void;
  isGeneratingBio: boolean;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  desktopTab, 
  setDesktopTab, 
  activeTemplate, 
  setActiveTemplate,
  onGenerateBio,
  isGeneratingBio,
  handleImageUpload
}) => {
  
  const TemplateCard = ({ type, name, colorClass, badge }: { type: TemplateType, name: string, colorClass: string, badge?: string }) => (
    <motion.button 
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setActiveTemplate(type)}
        className="group flex flex-col text-left transition-all duration-300 w-full"
    >
        <div className={`w-full aspect-[1/1.4] rounded-lg mb-2 overflow-hidden relative transition-all shadow-sm group-hover:shadow-md ${activeTemplate === type ? 'ring-2 ring-indigo-600 shadow-indigo-100' : 'ring-1 ring-slate-200 group-hover:ring-indigo-100'}`}>
             <div className={`w-full h-full ${colorClass} p-3 flex flex-col`}>
                 <div className="w-full h-1/4 bg-current opacity-10 rounded mb-2" />
                 <div className="flex gap-2 grow">
                     <div className="w-full h-full bg-current opacity-5 rounded border border-current/10" />
                 </div>
             </div>
             
             {activeTemplate === type && (
                 <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 bg-indigo-600 text-white p-1 rounded-full shadow-lg"
                 >
                     <Heart size={10} fill="currentColor" />
                 </motion.div>
             )}

             {/* Hover Overlay */}
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
             {badge && (
                <div className="absolute bottom-2 left-2 bg-white/95 text-[9px] font-semibold text-slate-700 px-1.5 py-0.5 rounded-full shadow-sm border border-slate-200">
                  {badge}
                </div>
             )}
        </div>
        <div className="flex items-center justify-between px-0.5">
            <span className={`text-xs font-semibold transition-colors truncate ${activeTemplate === type ? 'text-indigo-600' : 'text-slate-600 group-hover:text-slate-900'}`}>{name}</span>
            {activeTemplate === type && <motion.div layoutId="active-dot" className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 ml-1" />}
        </div>
    </motion.button>
  );

  const TemplatesGrid = () => (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 pb-6">
        <TemplateCard type={TemplateType.SKY_BLOSSOM} name="Sky Blossom" colorClass="bg-sky-50 text-sky-600" badge="Modern" />
        <TemplateCard type={TemplateType.REGAL_ANVIKA} name="Regal Anvika" colorClass="bg-amber-50 text-amber-700" badge="Royal" />
        <TemplateCard type={TemplateType.IVORY_LINES} name="Ivory Lines" colorClass="bg-stone-50 text-stone-600" badge="Minimal" />
        <TemplateCard type={TemplateType.MINT_BLOSSOM} name="Mint Blossom" colorClass="bg-emerald-50 text-emerald-700" badge="Floral" />
        <TemplateCard type={TemplateType.ROYAL_RED} name="Royal Red" colorClass="bg-rose-50 text-rose-900" badge="Festive" />
        <TemplateCard type={TemplateType.MINIMALIST} name="Minimalist" colorClass="bg-white text-slate-900 border border-slate-100" badge="Clean" />
        <TemplateCard type={TemplateType.SACRED_SAFFRON} name="Sacred Saffron" colorClass="bg-amber-50 text-amber-700" badge="Hindu" />
        <TemplateCard type={TemplateType.NOOR_CRESCENT} name="Noor Crescent" colorClass="bg-emerald-50 text-emerald-700" badge="Muslim" />
        <TemplateCard type={TemplateType.GRACEFUL_LILY} name="Graceful Lily" colorClass="bg-indigo-50 text-indigo-700" badge="Christian" />
        <TemplateCard type={TemplateType.CLASSIC_GOLD} name="Classic Gold" colorClass="bg-yellow-50 text-amber-800" badge="Classic" />
        <TemplateCard type={TemplateType.MODERN_SLATE} name="Modern Slate" colorClass="bg-slate-100 text-slate-700" badge="Modern" />
        <TemplateCard type={TemplateType.PASTEL_PEONY} name="Pastel Peony" colorClass="bg-rose-50 text-rose-700" badge="Floral" />
        <TemplateCard type={TemplateType.NAVY_MINIMAL} name="Navy Minimal" colorClass="bg-slate-900 text-slate-50" badge="Minimal" />
        <TemplateCard type={TemplateType.RUSTIC_KRAFT} name="Rustic Kraft" colorClass="bg-amber-100 text-amber-800" badge="Rustic" />
        <TemplateCard type={TemplateType.EMERALD_LEAF} name="Emerald Leaf" colorClass="bg-emerald-50 text-emerald-700" badge="Nature" />
        <TemplateCard type={TemplateType.BLUSH_MARBLE} name="Blush Marble" colorClass="bg-rose-100 text-rose-800" badge="Elegant" />
        <TemplateCard type={TemplateType.DESERT_SANDS} name="Desert Sands" colorClass="bg-amber-200 text-amber-900" badge="Warm" />
        <TemplateCard type={TemplateType.LAVENDER_MIST} name="Lavender Mist" colorClass="bg-purple-50 text-purple-700" badge="Calm" />
        <TemplateCard type={TemplateType.NOIR_ELEGANT} name="Noir Elegant" colorClass="bg-neutral-900 text-neutral-50" badge="Luxury" />
        <TemplateCard type={TemplateType.AQUA_GLASS} name="Aqua Glass" colorClass="bg-cyan-50 text-cyan-700" badge="Fresh" />
        <TemplateCard type={TemplateType.IVORY_MODERN} name="Ivory Modern" colorClass="bg-gray-50 text-gray-800" badge="Minimal" />
        <TemplateCard type={TemplateType.KALYAN_MANDAP} name="Kalyan Mandap" colorClass="bg-orange-50 text-orange-800" badge="Hindu" />
        <TemplateCard type={TemplateType.ZEHRA_CRESCENT} name="Zehra Crescent" colorClass="bg-emerald-900 text-emerald-50" badge="Muslim" />
        <TemplateCard type={TemplateType.GRACE_CHAPEL} name="Grace Chapel" colorClass="bg-indigo-50 text-indigo-800" badge="Christian" />
        <TemplateCard type={TemplateType.KHALSA_HERITAGE} name="Khalsa Heritage" colorClass="bg-amber-50 text-amber-800" badge="Sikh" />
        <TemplateCard type={TemplateType.SHANTI_JAIN} name="Shanti Jain" colorClass="bg-rose-50 text-rose-700" badge="Jain" />
        <TemplateCard type={TemplateType.LOTUS_SERENITY} name="Lotus Serenity" colorClass="bg-emerald-50 text-emerald-800" badge="Buddhist" />
        <TemplateCard type={TemplateType.RANGOLI_FESTIVE} name="Rangoli Festive" colorClass="bg-pink-100 text-pink-900" badge="Festive" />
        <TemplateCard type={TemplateType.HERITAGE_PEACOCK} name="Heritage Peacock" colorClass="bg-blue-50 text-blue-800" badge="Heritage" />
        <TemplateCard type={TemplateType.MONSOON_TEAL} name="Monsoon Teal" colorClass="bg-teal-50 text-teal-800" badge="Monsoon" />
    </div>
  );

  return (
    <aside className="hidden md:flex w-[480px] bg-white border-r border-slate-100 flex-col z-30 shrink-0 h-full shadow-[4px_0_32px_rgba(0,0,0,0.02)] relative">
        
        {/* Header Area */}
        <div className="px-6 pt-6 pb-0 border-b border-slate-100">
            {/* Minimal Tabs */}
            <div className="flex items-center gap-6">
                <button 
                    onClick={() => setDesktopTab('templates')}
                    className={`pb-3 px-1 text-sm font-medium transition-all relative ${desktopTab === 'templates' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                    <span className="flex items-center gap-2"><LayoutGrid size={16} /> Templates</span>
                    {desktopTab === 'templates' && (
                        <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-t-full" />
                    )}
                </button>
                <button 
                    onClick={() => setDesktopTab('edit')}
                    className={`pb-3 px-1 text-sm font-medium transition-all relative ${desktopTab === 'edit' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                    <span className="flex items-center gap-2"><PenTool size={16} /> Edit Details</span>
                    {desktopTab === 'edit' && (
                        <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-t-full" />
                    )}
                </button>
            </div>
        </div>

        {/* Desktop Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-white px-6 py-6">
            <AnimatePresence mode="wait">
                {desktopTab === 'templates' && (
                    <motion.div 
                        key="templates"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                         <div className="mb-6 flex items-end justify-between">
                             <div>
                                <h2 className="text-base font-bold text-slate-900 mb-0.5">Choose Design</h2>
                                <p className="text-xs text-slate-500">30 premium layouts</p>
                             </div>
                             <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded">V 1.0</span>
                         </div>
                        <TemplatesGrid />
                    </motion.div>
                )}
                {desktopTab === 'edit' && (
                    <motion.div 
                        key="edit"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                         <EditorContent 
                            onGenerateBio={onGenerateBio} 
                            isGeneratingBio={isGeneratingBio}
                            handleImageUpload={handleImageUpload}
                         />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </aside>
  );
};

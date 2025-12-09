import React from 'react';
import { LayoutGrid, PenTool, Heart, ChevronRight } from 'lucide-react';
import { TemplateType } from '@/types';
import { BiodataProfile } from '@/types';
import { EditorContent } from './editor-content';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  desktopTab: 'templates' | 'edit';
  setDesktopTab: (tab: 'templates' | 'edit') => void;
  activeTemplate: TemplateType;
  setActiveTemplate: (type: TemplateType) => void;
  profile: BiodataProfile;
  setProfile: React.Dispatch<React.SetStateAction<BiodataProfile>>;
  onGenerateBio: () => void;
  isGeneratingBio: boolean;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  desktopTab, 
  setDesktopTab, 
  activeTemplate, 
  setActiveTemplate,
  profile,
  setProfile,
  onGenerateBio,
  isGeneratingBio,
  handleImageUpload
}) => {
  
  const TemplateCard = ({ type, name, colorClass }: { type: TemplateType, name: string, colorClass: string }) => (
    <motion.button 
        whileHover={{ scale: 1.01, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setActiveTemplate(type)}
        className="group flex flex-col text-left transition-all duration-300 w-full"
    >
        <div className={`w-full aspect-[1/1.4] rounded-xl mb-3 overflow-hidden relative transition-all shadow-sm group-hover:shadow-xl ${activeTemplate === type ? 'ring-2 ring-indigo-600 shadow-indigo-100' : 'ring-1 ring-slate-200 group-hover:ring-indigo-100'}`}>
             <div className={`w-full h-full ${colorClass} p-4 flex flex-col`}>
                 <div className="w-full h-1/4 bg-current opacity-10 rounded-md mb-3" />
                 <div className="flex gap-2 mb-2 grow">
                     <div className="w-full h-full bg-current opacity-5 rounded-md border border-current/10" />
                 </div>
             </div>
             
             {activeTemplate === type && (
                 <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 bg-indigo-600 text-white p-1.5 rounded-full shadow-lg shadow-indigo-200"
                 >
                     <Heart size={12} fill="currentColor" />
                 </motion.div>
             )}

             {/* Hover Overlay */}
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
        <div className="flex items-center justify-between px-1">
            <span className={`text-sm font-semibold transition-colors ${activeTemplate === type ? 'text-indigo-600' : 'text-slate-600 group-hover:text-slate-900'}`}>{name}</span>
            {activeTemplate === type && <motion.div layoutId="active-dot" className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
        </div>
    </motion.button>
  );

  const TemplatesGrid = () => (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 pb-20 md:pb-0">
        <TemplateCard type={TemplateType.SKY_BLOSSOM} name="Sky Blossom" colorClass="bg-sky-50 text-sky-600" />
        <TemplateCard type={TemplateType.REGAL_ANVIKA} name="Regal Anvika" colorClass="bg-amber-50 text-amber-700" />
        <TemplateCard type={TemplateType.IVORY_LINES} name="Ivory Lines" colorClass="bg-stone-50 text-stone-600" />
        <TemplateCard type={TemplateType.MINT_BLOSSOM} name="Mint Blossom" colorClass="bg-emerald-50 text-emerald-700" />
        <TemplateCard type={TemplateType.ROYAL_RED} name="Royal Red" colorClass="bg-rose-50 text-rose-900" />
        <TemplateCard type={TemplateType.MINIMALIST} name="Minimalist" colorClass="bg-white text-slate-900 border border-slate-100" />
    </div>
  );

  return (
    <aside className="hidden md:flex w-[480px] bg-white border-r border-slate-100 flex-col z-30 shrink-0 h-full shadow-[4px_0_32px_rgba(0,0,0,0.02)] relative">
        
        {/* Header Area */}
        <div className="px-8 pt-8 pb-4">
            <h1 className="text-2xl font-serif font-bold text-slate-900 mb-6">Editor</h1>
            
            {/* Minimal Tabs */}
            <div className="flex items-center gap-6 border-b border-slate-100">
                <button 
                    onClick={() => setDesktopTab('templates')}
                    className={`pb-3 text-sm font-medium transition-all relative ${desktopTab === 'templates' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                    <span className="flex items-center gap-2"><LayoutGrid size={16} /> Templates</span>
                    {desktopTab === 'templates' && (
                        <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-t-full" />
                    )}
                </button>
                <button 
                    onClick={() => setDesktopTab('edit')}
                    className={`pb-3 text-sm font-medium transition-all relative ${desktopTab === 'edit' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
                >
                    <span className="flex items-center gap-2"><PenTool size={16} /> Edit Details</span>
                    {desktopTab === 'edit' && (
                        <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-t-full" />
                    )}
                </button>
            </div>
        </div>

        {/* Desktop Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-white px-8 py-6">
            <AnimatePresence mode="wait">
                {desktopTab === 'templates' && (
                    <motion.div 
                        key="templates"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                         <div className="mb-8 flex items-end justify-between">
                             <div>
                                <h2 className="text-base font-bold text-slate-900 mb-1">Choose Design</h2>
                                <p className="text-sm text-slate-500">Six premium layouts available.</p>
                             </div>
                             <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">V 1.0</span>
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
                            profile={profile} 
                            setProfile={setProfile} 
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

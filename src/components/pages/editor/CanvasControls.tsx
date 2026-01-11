import React from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Palette, X, Check } from 'lucide-react';
import { useProfileStore } from '@/store/profileStore';
import { motion, AnimatePresence } from 'motion/react';

interface CanvasControlsProps {
    zoom: number;
    setZoom: (zoom: number | ((prev: number) => number)) => void;
    autoScale: () => void;
    showStyleMenu: boolean;
    setShowStyleMenu: (show: boolean) => void;
}

const FONTS = [
    { name: 'Fraunces', value: "'Fraunces', serif" },
    { name: 'Manrope', value: "'Manrope', sans-serif" },
    { name: 'Playfair', value: "'Playfair Display', serif" },
    { name: 'Cormorant', value: "'Cormorant Garamond', serif" },
    { name: 'Cinzel', value: "'Cinzel', serif" },
    { name: 'Crimson', value: "'Crimson Pro', serif" },
];

const COLORS = [
    '#831843', '#9d174d', '#78350f', '#92400e', '#14532d', '#15803d',
    '#1e3a8a', '#1e40af', '#4a1c2e', '#451a03', '#000000', '#333333'
];

export const CanvasControls: React.FC<CanvasControlsProps> = ({
    zoom,
    setZoom,
    autoScale,
    showStyleMenu,
    setShowStyleMenu
}) => {
    const { updateCustomStyle, customStyles } = useProfileStore();

    return (
        <>
            {/* Style Editor Overlay */}
            <AnimatePresence>
                {showStyleMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20 ring-1 ring-black/5 w-[90%] max-w-sm"
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-slate-800 text-sm">Customize Style</h3>
                            <button onClick={() => setShowStyleMenu(false)} className="p-1 hover:bg-slate-100 rounded-full"><X size={16} /></button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-[10px] uppercase font-bold text-slate-400 mb-2 block">Typography</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {FONTS.map(f => (
                                        <button
                                            key={f.name}
                                            onClick={() => updateCustomStyle({ fontFamily: f.value, headingFontFamily: f.value })}
                                            className={`text-xs p-2 rounded border transition-all ${customStyles.fontFamily === f.value ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 hover:border-slate-300'}`}
                                        >
                                            {f.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] uppercase font-bold text-slate-400 mb-2 block">Theme Colors</label>
                                <div className="flex flex-wrap gap-2">
                                    {COLORS.map(c => (
                                        <button
                                            key={c}
                                            onClick={() => updateCustomStyle({ headingColor: c, labelColor: c, borderColor: c })}
                                            className="w-8 h-8 rounded-full border border-black/5 shadow-sm hover:scale-110 transition-transform relative"
                                            style={{ backgroundColor: c }}
                                        >
                                            {customStyles.headingColor === c && <Check size={14} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={3} />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toolbar */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-2xl border border-white/50 ring-1 ring-slate-900/5 text-slate-600"
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setShowStyleMenu(!showStyleMenu)}
                    className={`p-2 rounded-full transition-colors active:scale-95 flex items-center gap-2 ${showStyleMenu ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-slate-100 text-slate-600'}`}
                >
                    <Palette size={18} />
                    <span className="text-xs font-bold hidden md:inline">Style</span>
                </button>
                <div className="w-px h-4 bg-slate-200 mx-1"></div>
                <button onClick={() => setZoom(z => Math.max(0.2, z - 0.1))} className="p-1.5 hover:bg-slate-100 rounded-full"><ZoomOut size={18} /></button>
                <span className="text-xs font-mono w-10 text-center font-bold text-slate-800">{Math.round(zoom * 100)}%</span>
                <button onClick={() => setZoom(z => Math.min(3.0, z + 0.1))} className="p-1.5 hover:bg-slate-100 rounded-full"><ZoomIn size={18} /></button>
                <button onClick={autoScale} className="p-1.5 hover:bg-slate-100 rounded-full ml-1" title="Fit to Screen"><RotateCcw size={16} /></button>
            </div>
        </>
    );
};

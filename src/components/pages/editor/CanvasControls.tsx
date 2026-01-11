import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Palette, X, Check, RefreshCw } from 'lucide-react';
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
    { name: 'Great Vibes', value: "'Great Vibes', cursive" },
    { name: 'Montserrat', value: "'Montserrat', sans-serif" },
    { name: 'Lato', value: "'Lato', sans-serif" },
    { name: 'Merriweather', value: "'Merriweather', serif" },
];

const PRESET_COLORS = [
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

    const handleReset = () => {
        updateCustomStyle({
            fontFamily: undefined,
            headingFontFamily: undefined,
            headingColor: undefined,
            labelColor: undefined,
            borderColor: undefined,
            textColor: undefined
        });
    };

    return (
        <>
            {/* Style Editor Overlay */}
            <AnimatePresence>
                {showStyleMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        // Lifted higher on mobile (bottom-24) to avoid nav overlap
                        className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-30 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20 ring-1 ring-black/5 w-[90%] max-w-sm max-h-[60vh] overflow-y-auto"
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4 sticky top-0 bg-white/95 backdrop-blur-sm z-10 pb-2 border-b border-slate-100">
                            <h3 className="font-bold text-slate-800 text-sm">Customize Style</h3>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleReset}
                                    className="p-1.5 hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 transition-colors"
                                    title="Reset to Default"
                                >
                                    <RefreshCw size={14} />
                                </button>
                                <button onClick={() => setShowStyleMenu(false)} className="p-1 hover:bg-slate-100 rounded-full"><X size={16} /></button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Fonts */}
                            <div>
                                <label className="text-[10px] uppercase font-bold text-slate-400 mb-2 block">Typography</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {FONTS.map(f => (
                                        <button
                                            key={f.name}
                                            onClick={() => updateCustomStyle({ fontFamily: f.value, headingFontFamily: f.value })}
                                            className={`text-xs p-2 rounded border transition-all truncate ${customStyles.fontFamily === f.value ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-medium' : 'border-slate-200 hover:border-slate-300 text-slate-600'}`}
                                            style={{ fontFamily: f.value }}
                                        >
                                            {f.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Colors */}
                            <div>
                                <label className="text-[10px] uppercase font-bold text-slate-400 mb-2 block">Theme Colors</label>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {PRESET_COLORS.map(c => (
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

                                {/* Custom Color Picker */}
                                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200">
                                    <input
                                        type="color"
                                        value={customStyles.headingColor || '#000000'}
                                        onChange={(e) => updateCustomStyle({ headingColor: e.target.value, labelColor: e.target.value, borderColor: e.target.value })}
                                        className="w-8 h-8 rounded cursor-pointer bg-transparent border-0 p-0"
                                    />
                                    <span className="text-xs font-medium text-slate-600">Custom Color</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toolbar - Higher on Mobile */}
            <div
                className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-2xl border border-white/50 ring-1 ring-slate-900/5 text-slate-600"
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

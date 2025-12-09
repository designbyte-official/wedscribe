
import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, Maximize, Move } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

export const CanvasWorkspace: React.FC<Props> = ({ children }) => {
  const [zoom, setZoom] = useState(0.65);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Initial Center on mount
  useEffect(() => {
    // Simple centering for desktop defaults
    if(window.innerWidth > 768) {
        setPan({ x: 0, y: 20 });
    } else {
        // Mobile fit
        setZoom(0.45);
        setPan({ x: 0, y: 10 });
    }
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.05 : 0.05;
        const newZoom = Math.min(Math.max(0.2, zoom + delta), 3.0);
        setZoom(newZoom);
    } else {
        // Allow normal scrolling if not zooming, or pan if zoomed in? 
        // Best practice for canvas apps: Wheel pans vertically, Shift+Wheel pans horizontally
        // But for this "infinite canvas" feel, we'll map wheel to pan.
        setPan(prev => ({ x: prev.x - e.deltaX, y: prev.y - e.deltaY }));
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // Allow middle click or left click if holding space (common design tool UX)
    // Or just simple left click drag for this consumer app
    if (e.button === 0 || e.button === 1) { 
        setIsDragging(true);
        setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
        setIsDragging(true);
        setLastMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (isDragging) {
        const dx = clientX - lastMousePos.x;
        const dy = clientY - lastMousePos.y;
        setPan(prev => ({ x: prev.x + dx, y: prev.y + dy }));
        setLastMousePos({ x: clientX, y: clientY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
      // Prevent scrolling the page while dragging canvas
      // e.preventDefault(); // Warning: Passive event listener
      if(e.touches.length === 1) {
          handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const fitToScreen = () => {
      const isMobile = window.innerWidth < 768;
      setZoom(isMobile ? 0.45 : 0.65);
      setPan({ x: 0, y: 0 });
  };

  return (
    <div 
        className="w-full h-full relative overflow-hidden bg-slate-100 flex flex-col cursor-grab active:cursor-grabbing touch-none"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
        ref={containerRef}
        style={{ 
            backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', 
            backgroundSize: '24px 24px',
            cursor: isDragging ? 'grabbing' : 'grab'
        }}
    >
        {/* Floating Toolbar */}
        <div 
            className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-white/90 backdrop-blur px-2 py-1.5 rounded-full shadow-xl border border-white/40 ring-1 ring-black/5 text-slate-600"
            onMouseDown={(e) => e.stopPropagation()} 
            onTouchStart={(e) => e.stopPropagation()}
        >
            <button 
                onClick={() => setZoom(Math.max(0.2, zoom - 0.1))} 
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                title="Zoom Out"
            >
                <ZoomOut size={16} />
            </button>
            <span className="text-xs font-mono w-10 text-center font-bold text-slate-800">{Math.round(zoom * 100)}%</span>
            <button 
                onClick={() => setZoom(Math.min(3.0, zoom + 0.1))} 
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                title="Zoom In"
            >
                <ZoomIn size={16} />
            </button>
            <div className="w-px h-4 bg-slate-200 mx-1"></div>
            <button 
                onClick={fitToScreen}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-800"
                title="Fit to Screen"
            >
                <Maximize size={16} />
            </button>
        </div>

        {/* Transform Container */}
        <div className="w-full h-full flex items-center justify-center pointer-events-none">
            <div 
                style={{ 
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                    transition: isDragging ? 'none' : 'transform 0.1s cubic-bezier(0.1, 0.7, 1.0, 0.1)',
                    width: '210mm', 
                    height: '297mm',
                    willChange: 'transform' // Hardware acceleration hint
                }}
                className="bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] origin-center pointer-events-auto print:shadow-none print:transform-none"
                id="canvas-container"
            >
                    {children}
            </div>
        </div>
    </div>
  );
};

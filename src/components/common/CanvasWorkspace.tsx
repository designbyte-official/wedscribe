import React, { useState, useRef, useEffect } from 'react';
import { CanvasControls } from '../pages/editor/CanvasControls';

interface Props {
    children: React.ReactNode;
}

export const CanvasWorkspace: React.FC<Props> = ({ children }) => {
    const [zoom, setZoom] = useState(0.65);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
    const [showStyleMenu, setShowStyleMenu] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-Scale Logic
    const autoScale = () => {
        if (!containerRef.current) return;
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;

        // A4 Dimensions in px (approx at 96dpi)
        const A4_WIDTH = 794; // 210mm
        const A4_HEIGHT = 1123; // 297mm

        const padding = window.innerWidth < 768 ? 20 : 80;

        const scaleX = (containerWidth - padding) / A4_WIDTH;
        const scaleY = (containerHeight - padding) / A4_HEIGHT;

        // Use the smaller scale to fit entirely, but clamp min/max
        const fitScale = Math.min(scaleX, scaleY);

        setZoom(Math.max(0.3, Math.min(fitScale, 1.5)));
        setPan({ x: 0, y: window.innerWidth < 768 ? 10 : 20 });
    };

    // Initial Scale & Resize Listener
    useEffect(() => {
        autoScale();
        window.addEventListener('resize', autoScale);
        return () => window.removeEventListener('resize', autoScale);
    }, []);

    const handleWheel = (e: React.WheelEvent) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.05 : 0.05;
            setZoom(Math.min(Math.max(0.2, zoom + delta), 3.0));
        } else {
            setPan(prev => ({ x: prev.x - e.deltaX, y: prev.y - e.deltaY }));
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button === 0 || e.button === 1) {
            setIsDragging(true);
            setLastMousePos({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            const dx = e.clientX - lastMousePos.x;
            const dy = e.clientY - lastMousePos.y;
            setPan(prev => ({ x: prev.x + dx, y: prev.y + dy }));
            setLastMousePos({ x: e.clientX, y: e.clientY });
        }
    };

    const handleMouseUp = () => setIsDragging(false);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 1) {
            setIsDragging(true);
            setLastMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length === 1) {
            const dx = e.touches[0].clientX - lastMousePos.x;
            const dy = e.touches[0].clientY - lastMousePos.y;
            setPan(prev => ({ x: prev.x + dx, y: prev.y + dy }));
            setLastMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        }
    };

    return (
        <div
            className="w-full h-full relative overflow-hidden bg-slate-50/50 flex flex-col cursor-grab active:cursor-grabbing touch-none select-none"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            ref={containerRef}
            style={{
                backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                backgroundSize: '24px 24px',
            }}
        >
            <CanvasControls
                zoom={zoom}
                setZoom={setZoom}
                autoScale={autoScale}
                showStyleMenu={showStyleMenu}
                setShowStyleMenu={setShowStyleMenu}
            />

            {/* Transform Container */}
            <div className="w-full h-full flex items-center justify-center pointer-events-none">
                <div
                    style={{
                        transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                        width: '210mm',
                        height: '297mm',
                    }}
                    className="bg-white shadow-2xl ring-1 ring-slate-900/5 origin-center pointer-events-auto print:shadow-none print:transform-none transition-transform duration-200 ease-out"
                    id="canvas-container"
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

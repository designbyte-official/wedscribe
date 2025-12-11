import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TemplateType } from '../../types';
import { TemplateRenderer } from '../../components/common/TemplateRenderer';
import { generateProfessionalBio } from '../../services/geminiService';
import { CanvasWorkspace } from '../../components/common/CanvasWorkspace';
import { Header } from '../../components/pages/editor/header';
import { Sidebar } from '../../components/pages/editor/sidebar';
import { MobileNav } from '../../components/pages/editor/mobile-nav';
import { EditorContent } from '../../components/pages/editor/editor-content';
import { Heart } from 'lucide-react';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { toast } from 'sonner';
import { useProfileStore } from '../../store/profileStore';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export const EditorPage: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate('/');
  const profile = useProfileStore((state) => state.profile);
  const updateSection = useProfileStore((state) => state.updateSection);
  const activeTemplate = useProfileStore((state) => state.activeTemplate);
  const setActiveTemplate = useProfileStore((state) => state.setActiveTemplate);
  const backgroundIndex = useProfileStore((state) => state.backgroundIndex);
  const setBackgroundIndex = useProfileStore((state) => state.setBackgroundIndex);
  const [isGeneratingBio, setIsGeneratingBio] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const downloadTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Desktop Tab State (Sidebar)
  const [desktopTab, setDesktopTab] = useState<'templates' | 'edit'>('edit');
  
  // Mobile Tab State (Bottom Nav)
  // 'designs' | 'edit' | 'preview'
  const [mobileTab, setMobileTab] = useState<'designs' | 'edit' | 'preview'>('edit');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      useProfileStore.getState().updateSection('personal', 'photoUrl', dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleGenerateBio = async () => {
    if (!process.env.API_KEY) {
        toast.error("API Key missing", {
          description: "Cannot generate bio without API key."
        });
        return;
    }
    setIsGeneratingBio(true);
    try {
      const bio = await generateProfessionalBio(profile);
      updateSection('education', 'aboutMe', bio);
      toast.success("Bio generated successfully!");
    } catch (error) {
      toast.error("Failed to generate bio", {
        description: "Please check your internet connection or API key."
      });
    } finally {
      setIsGeneratingBio(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async (type: 'png' | 'pdf') => {
      // Find the template content directly, not the canvas container
      const element = document.getElementById('template-content');
      if (!element) {
        toast.error("Template not found", {
          description: "Please refresh the page and try again."
        });
        return;
      }

      setIsDownloading(true);

      // Clear any existing timeout
      if (downloadTimeoutRef.current) {
        clearTimeout(downloadTimeoutRef.current);
      }

      // Safety timeout to force-clear loading state if something hangs
      downloadTimeoutRef.current = setTimeout(() => {
        setIsDownloading(false);
        toast.error("Download timed out", {
          description: "The download process took too long. Please try again."
        });
      }, 30000); // 30 seconds max wait

      try {
        // Use setTimeout to allow UI to update with loading state before heavy processing
        await new Promise(resolve => setTimeout(resolve, 100));

        if (type === 'png') {
          const dataUrl = await htmlToImage.toPng(element, { 
            quality: 1.0, 
            pixelRatio: 2,
            backgroundColor: '#ffffff'
          });
          download(dataUrl, `biodata-${profile.personal.fullName || 'untitled'}.png`);
          toast.success("Image downloaded successfully!");
        } else if (type === 'pdf') {
          // Use html2canvas - browser already converts oklch to RGB for computed styles
          const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false,
            allowTaint: false,
            onclone: (clonedDoc) => {
              // Inject CSS to override oklch CSS variables with hex equivalents for better PDF rendering
              const style = clonedDoc.createElement('style');
              style.textContent = `
                :root, :root * {
                  --background: #ffffff !important;
                  --foreground: #0a0a0a !important;
                  --card: #fafafa !important;
                  --card-foreground: #0a0a0a !important;
                  --popover: #ffffff !important;
                  --popover-foreground: #0a0a0a !important;
                  --primary: #6366f1 !important;
                  --primary-foreground: #ffffff !important;
                  --secondary: #0a0a0a !important;
                  --secondary-foreground: #ffffff !important;
                  --muted: #f4f4f5 !important;
                  --muted-foreground: #0a0a0a !important;
                  --accent: #f4f4f5 !important;
                  --accent-foreground: #6366f1 !important;
                  --destructive: #ef4444 !important;
                  --destructive-foreground: #ffffff !important;
                  --border: #e4e4e7 !important;
                  --input: #fafafa !important;
                  --ring: #6366f1 !important;
                }
              `;
              clonedDoc.head.insertBefore(style, clonedDoc.head.firstChild);
            }
          });

          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
          });

          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const imgWidth = canvas.width;
          const imgHeight = canvas.height;
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          const imgX = (pdfWidth - imgWidth * ratio) / 2;
          const imgY = 0;

          pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
          pdf.save(`biodata-${profile.personal.fullName || 'untitled'}.pdf`);
          toast.success("PDF downloaded successfully!");
        }
      } catch (error) {
        console.error('Error downloading:', error);
        toast.error("Download failed", {
          description: error instanceof Error ? error.message : "Please try again or check your browser console."
        });
      } finally {
        if (downloadTimeoutRef.current) {
          clearTimeout(downloadTimeoutRef.current);
          downloadTimeoutRef.current = null;
        }
        setIsDownloading(false);
      }
  };

  const resetData = () => {
      setShowResetDialog(true);
  };

  const handleResetConfirm = () => {
      useProfileStore.getState().resetProfile();
      setShowResetDialog(false);
      toast.success("Data reset successfully", {
        description: "All details have been reset to sample data."
      });
  };

  const TemplateCard = ({ type, name, colorClass, badge }: { type: TemplateType, name: string, colorClass: string, badge?: string }) => (
    <button 
        onClick={() => {
            setActiveTemplate(type);
            // On mobile, switch to preview after selection for better UX
            if(window.innerWidth < 768) setMobileTab('preview');
        }}
        className="group flex flex-col text-left transition-all duration-300 w-full"
    >
        <div className={`w-full aspect-[1/1.4] rounded-lg border-2 mb-2 overflow-hidden relative transition-all shadow-sm group-hover:shadow-md ${activeTemplate === type ? 'border-primary ring-2 ring-primary/10' : 'border-slate-100 group-hover:border-primary/30'}`}>
             <div className={`w-full h-full ${colorClass} p-3 flex flex-col`}>
                 <div className="w-full h-1/4 bg-current opacity-10 rounded-sm mb-2" />
                 <div className="flex gap-2 mb-2 grow">
                     <div className="w-full h-full bg-current opacity-5 rounded-sm border border-current/10" />
                 </div>
             </div>
             
             {activeTemplate === type && (
                 <div className="absolute top-2 right-2 bg-primary text-white p-1 rounded-full shadow-lg animate-in zoom-in duration-200">
                     <Heart size={10} fill="currentColor" />
                 </div>
             )}
             {badge && (
                <div className="absolute bottom-2 left-2 bg-white/90 text-[10px] font-semibold text-slate-600 px-2 py-1 rounded-full shadow-sm border border-slate-100">
                  {badge}
                </div>
             )}
        </div>
        <span className={`text-xs font-bold uppercase tracking-wider text-center transition-colors ${activeTemplate === type ? 'text-primary' : 'text-slate-500 group-hover:text-slate-700'}`}>{name}</span>
    </button>
  );

  const TemplatesGrid = () => (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 pb-20 md:pb-0 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
        <TemplateCard type={TemplateType.SKY_BLOSSOM} name="Sky Blossom" colorClass="bg-sky-50 text-sky-600" badge="Modern" />
        <TemplateCard type={TemplateType.REGAL_ANVIKA} name="Regal Anvika" colorClass="bg-regal-bg text-regal-gold" badge="Royal" />
        <TemplateCard type={TemplateType.IVORY_LINES} name="Ivory Lines" colorClass="bg-stone-50 text-stone-600" badge="Minimal" />
        <TemplateCard type={TemplateType.MINT_BLOSSOM} name="Mint Blossom" colorClass="bg-mint-bg text-mint-dark" badge="Floral" />
        <TemplateCard type={TemplateType.ROYAL_RED} name="Royal Red" colorClass="bg-red-50 text-red-900" badge="Festive" />
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
    <>
      <Helmet>
        <title>Create Biodata - WedScribe Editor | Premium Biodata Maker</title>
        <meta name="description" content="Create and customize your wedding biodata with WedScribe editor. Choose from 30+ premium templates, edit details, and download as PDF or PNG instantly." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Create Biodata - WedScribe Editor" />
        <meta property="og:description" content="Create and customize your wedding biodata with WedScribe editor. Choose from 30+ premium templates and download instantly." />
        <meta property="og:url" content="https://studio.designbyte.dev/editor" />
        <link rel="canonical" href="https://studio.designbyte.dev/editor" />
      </Helmet>
      <div className="h-screen bg-slate-50 flex flex-col font-sans overflow-hidden text-slate-800">
      
      <div className="no-print">
        <Header onBack={handleBack} onReset={resetData} onPrint={handlePrint} onDownload={handleDownload} />
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        
        <div className="no-print h-full shrink-0">
          <Sidebar 
              desktopTab={desktopTab} 
              setDesktopTab={setDesktopTab} 
              activeTemplate={activeTemplate} 
              setActiveTemplate={setActiveTemplate}
              onGenerateBio={handleGenerateBio}
              isGeneratingBio={isGeneratingBio}
              handleImageUpload={handleImageUpload}
          />
        </div>

        {/* MAIN CANVAS AREA (Desktop: Always Visible | Mobile: Conditional) */}
        <main 
            className={`flex-1 bg-slate-100 relative overflow-hidden flex-col ${mobileTab === 'preview' ? 'flex' : 'hidden md:flex'}`}
        >
            <CanvasWorkspace>
                 <TemplateRenderer profile={profile} template={activeTemplate} />
            </CanvasWorkspace>

            {activeTemplate === TemplateType.BACKGROUND_SHOWCASE && (
              <div className="no-print absolute bottom-8 left-8 z-30 flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg rounded-full px-3 py-1.5">
                <button
                  onClick={() => setBackgroundIndex((backgroundIndex - 1 + 26) % 26)}
                  className="px-3 py-1 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                  aria-label="Previous background"
                >
                  Prev
                </button>
                <span className="px-2 font-mono">
                  {String((backgroundIndex % 26) + 1).padStart(2, '0')}/26
                </span>
                <button
                  onClick={() => setBackgroundIndex((backgroundIndex + 1) % 26)}
                  className="px-3 py-1 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                  aria-label="Next background"
                >
                  Next
                </button>
              </div>
            )}
        </main>

        {/* MOBILE CONTENT AREAS */}
        {mobileTab === 'designs' && (
            <div className="md:hidden absolute inset-0 bg-white z-20 overflow-y-auto p-6 pb-24 animate-in slide-in-from-bottom-4 no-print">
                 <h2 className="text-lg font-bold font-serif mb-6">Choose Template</h2>
                 <TemplatesGrid />
            </div>
        )}

        {mobileTab === 'edit' && (
            <div className="md:hidden absolute inset-0 bg-white z-20 overflow-y-auto p-4 pb-24 animate-in slide-in-from-bottom-4 no-print">
                <h2 className="text-lg font-bold font-serif mb-6 px-1">Edit Biodata</h2>
                <EditorContent 
                    onGenerateBio={handleGenerateBio} 
                    isGeneratingBio={isGeneratingBio}
                    handleImageUpload={handleImageUpload}
                />
            </div>
        )}

        <div className="no-print">
          <MobileNav mobileTab={mobileTab} setMobileTab={setMobileTab} />
        </div>

      </div>
        
      {/* Download Loading Overlay */}
      {isDownloading && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={(e) => {
            // Allow clicking to close if user wants to cancel
            if (e.target === e.currentTarget) {
              setIsDownloading(false);
              if (downloadTimeoutRef.current) {
                clearTimeout(downloadTimeoutRef.current);
                downloadTimeoutRef.current = null;
              }
              toast.info("Download cancelled");
            }
          }}
        >
            <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center max-w-sm text-center animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-6"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Generating Files...</h3>
                <p className="text-slate-500 mb-4">Please wait while we prepare your high-quality download. This may take a moment.</p>
                <button
                  onClick={() => {
                    setIsDownloading(false);
                    if (downloadTimeoutRef.current) {
                      clearTimeout(downloadTimeoutRef.current);
                      downloadTimeoutRef.current = null;
                    }
                    toast.info("Download cancelled");
                  }}
                  className="text-sm text-slate-500 hover:text-slate-700 underline"
                >
                  Cancel
                </button>
            </div>
        </div>
      )}

      {/* Reset Confirmation Dialog */}
      <AlertDialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reset All Data?</AlertDialogTitle>
            <AlertDialogDescription>
              This will reset all details to the sample data. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleResetConfirm} className="bg-red-600 hover:bg-red-700">
              Reset
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
    </>
  );
};
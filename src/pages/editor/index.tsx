import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { INITIAL_PROFILE, BiodataProfile, TemplateType } from '../../types';
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
// @ts-ignore
import html2pdf from 'html2pdf.js';

export const EditorPage: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate('/');
  const [profile, setProfile] = useState<BiodataProfile>(INITIAL_PROFILE);
  const [activeTemplate, setActiveTemplate] = useState<TemplateType>(TemplateType.SKY_BLOSSOM);
  const [isGeneratingBio, setIsGeneratingBio] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Desktop Tab State (Sidebar)
  const [desktopTab, setDesktopTab] = useState<'templates' | 'edit'>('templates');
  
  // Mobile Tab State (Bottom Nav)
  // 'designs' | 'edit' | 'preview'
  const [mobileTab, setMobileTab] = useState<'designs' | 'edit' | 'preview'>('preview');

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('weds_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if(parsed && parsed.personal) {
            setProfile(parsed);
        }
      } catch (e) {
        console.error("Failed to load profile", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('weds_profile', JSON.stringify(profile));
  }, [profile]);

  const updateSection = (section: keyof BiodataProfile, field: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      updateSection('personal', 'photoUrl', url);
    }
  };

  const handleGenerateBio = async () => {
    if (!process.env.API_KEY) {
        alert("API Key missing. Cannot generate bio.");
        return;
    }
    setIsGeneratingBio(true);
    try {
      const bio = await generateProfessionalBio(profile);
      updateSection('education', 'aboutMe', bio);
    } catch (error) {
      alert("Failed to generate bio. Please check your internet connection or API key.");
    } finally {
      setIsGeneratingBio(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async (type: 'png' | 'pdf') => {
      const element = document.getElementById('canvas-container');
      if (!element) return;

      setIsDownloading(true);

      // Safety timeout to force-clear loading state if something hangs
      const safetyTimeout = setTimeout(() => {
        if (isDownloading) {
            setIsDownloading(false);
            alert("Download process timed out. Please try again or check your browser console.");
        }
      }, 15000); // 15 seconds max wait

      // Use setTimeout to allow UI to update with loading state before heavy processing
      setTimeout(async () => {
        try {
            if (type === 'png') {
                const dataUrl = await htmlToImage.toPng(element, { quality: 1.0, pixelRatio: 2 });
                download(dataUrl, `biodata-${profile.personal.fullName || 'untitled'}.png`);
            } else if (type === 'pdf') {
                const opt = {
                    margin: 0,
                    filename: `biodata-${profile.personal.fullName || 'untitled'}.pdf`,
                    image: { type: 'jpeg' as const, quality: 0.98 },
                    html2canvas: { scale: 2, useCORS: true },
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
                };
                
                // Wrap html2pdf in a promise to handle errors better if needed, 
                // though await should catch standard rejections.
                // @ts-ignore
                await html2pdf().set(opt).from(element).save();
            }
        } catch (error) {
            console.error('Error downloading:', error);
            alert('Failed to download. Please try again.');
        } finally {
            clearTimeout(safetyTimeout);
            setIsDownloading(false);
        }
      }, 100);
  };

  const resetData = () => {
      if(window.confirm("This will reset all details to the sample data. Continue?")) {
        setProfile(INITIAL_PROFILE);
      }
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
              profile={profile}
              setProfile={setProfile}
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
                    profile={profile} 
                    setProfile={setProfile} 
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
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center max-w-sm text-center animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-6"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Generating Files...</h3>
                <p className="text-slate-500">Please wait while we prepare your high-quality download. This may take a moment.</p>
            </div>
        </div>
      )}
    </div>
  );
};
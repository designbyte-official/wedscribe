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

      if (type === 'png') {
          try {
              const dataUrl = await htmlToImage.toPng(element, { quality: 1.0, pixelRatio: 2 });
              download(dataUrl, `biodata-${profile.personal.fullName || 'untitled'}.png`);
          } catch (error) {
              console.error('Error generating PNG', error);
              alert('Failed to generate image. Please try again.');
          }
      } else if (type === 'pdf') {
          const opt = {
              margin: 0,
              filename: `biodata-${profile.personal.fullName || 'untitled'}.pdf`,
              image: { type: 'jpeg' as const, quality: 0.98 },
              html2canvas: { scale: 2, useCORS: true },
              jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
          };
          html2pdf().set(opt).from(element).save();
      }
  };

  const resetData = () => {
      if(window.confirm("This will reset all details to the sample data. Continue?")) {
        setProfile(INITIAL_PROFILE);
      }
  };

  const TemplateCard = ({ type, name, colorClass }: { type: TemplateType, name: string, colorClass: string }) => (
    <button 
        onClick={() => {
            setActiveTemplate(type);
            // On mobile, switch to preview after selection for better UX
            if(window.innerWidth < 768) setMobileTab('preview');
        }}
        className="group flex flex-col text-left transition-all duration-300 w-full"
    >
        <div className={`w-full aspect-[1/1.4] rounded-lg border-2 mb-3 overflow-hidden relative transition-all shadow-sm group-hover:shadow-md ${activeTemplate === type ? 'border-primary ring-2 ring-primary/10' : 'border-slate-100 group-hover:border-primary/30'}`}>
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
        </div>
        <span className={`text-xs font-bold uppercase tracking-wider text-center transition-colors ${activeTemplate === type ? 'text-primary' : 'text-slate-500 group-hover:text-slate-700'}`}>{name}</span>
    </button>
  );

  const TemplatesGrid = () => (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 pb-20 md:pb-0">
        <TemplateCard type={TemplateType.SKY_BLOSSOM} name="Sky Blossom" colorClass="bg-sky-50 text-sky-600" />
        <TemplateCard type={TemplateType.REGAL_ANVIKA} name="Regal Anvika" colorClass="bg-regal-bg text-regal-gold" />
        <TemplateCard type={TemplateType.IVORY_LINES} name="Ivory Lines" colorClass="bg-stone-50 text-stone-600" />
        <TemplateCard type={TemplateType.MINT_BLOSSOM} name="Mint Blossom" colorClass="bg-mint-bg text-mint-dark" />
        <TemplateCard type={TemplateType.ROYAL_RED} name="Royal Red" colorClass="bg-red-50 text-red-900" />
        <TemplateCard type={TemplateType.MINIMALIST} name="Minimalist" colorClass="bg-white text-slate-900 border border-slate-100" />
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
    </div>
  );
};
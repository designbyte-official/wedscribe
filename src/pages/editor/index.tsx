import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Download, 
  LayoutGrid,
  PenTool,
  UserCircle, 
  GraduationCap, 
  Users, 
  Phone, 
  RefreshCw,
  Wand2,
  Eye,
} from 'lucide-react';
import { INITIAL_PROFILE, BiodataProfile, TemplateType } from '../../types';
import { FormSection } from '../../components/common/FormSection';
import { TemplateRenderer } from '../../components/common/TemplateRenderer';
import { generateProfessionalBio } from '../../services/geminiService';
import { CanvasWorkspace } from '../../components/common/CanvasWorkspace';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/Input';
import { Textarea } from '../../components/ui/Textarea';
import { Select } from '../../components/ui/Select';

interface EditorPageProps {
  onBack: () => void;
}

export const EditorPage: React.FC<EditorPageProps> = ({ onBack }) => {
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

  const resetData = () => {
      if(window.confirm("This will reset all details to the sample data. Continue?")) {
        setProfile(INITIAL_PROFILE);
      }
  };

  // --- SUB-COMPONENTS ---

  const InputGroup = ({ label, value, section, field, type = "text", placeholder = "", options = [] as string[] }: any) => {
    const commonProps = {
      label,
      value,
      placeholder,
      onChange: (e: any) => updateSection(section as any, field, e.target.value),
    };

    if (type === 'select') {
      return <Select {...commonProps} options={options} />;
    } else if (type === 'textarea') {
      return <Textarea {...commonProps} className="h-24" />;
    } else {
      return <Input {...commonProps} type={type} />;
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

  const EditorContent = () => (
      <div className="space-y-4 pb-20 md:pb-0">
          {/* Photo Upload Card */}
          <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-xl border border-slate-100 mb-6">
            <div className="relative group shrink-0">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                    {profile.personal.photoUrl ? (
                        <img src={profile.personal.photoUrl} className="w-full h-full object-cover" />
                    ) : <UserCircle className="text-slate-200" size={48} />}
                </div>
                <label className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 rounded-full cursor-pointer transition-all duration-200 backdrop-blur-[1px]">
                    <PenTool size={16} />
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
            </div>
            <div>
                <h3 className="text-sm font-bold text-slate-900">Profile Photo</h3>
                <p className="text-xs text-slate-500 mt-1 mb-2">Recommended: Portrait mode</p>
                <label className="text-xs font-bold text-primary cursor-pointer hover:underline">
                    Change Photo
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
            </div>
            </div>

            <FormSection title="Personal Information" icon={<UserCircle size={18} />} defaultOpen={true}>
                <InputGroup label="Full Name" value={profile.personal.fullName} section="personal" field="fullName" placeholder="e.g. Vikram Singh" />
                <div className="grid grid-cols-2 gap-4">
                <InputGroup label="DOB" value={profile.personal.dateOfBirth} section="personal" field="dateOfBirth" type="date" />
                <InputGroup label="Time" value={profile.personal.timeOfBirth} section="personal" field="timeOfBirth" type="time" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Height" value={profile.personal.height} section="personal" field="height" placeholder="e.g. 5ft 11in" />
                <InputGroup label="Weight" value={profile.personal.weight} section="personal" field="weight" placeholder="e.g. 70 kg" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Complexion" value={profile.personal.complexion} section="personal" field="complexion" placeholder="e.g. Fair" />
                <InputGroup label="Blood Group" value={profile.personal.bloodGroup} section="personal" field="bloodGroup" placeholder="O+" />
                </div>
            </FormSection>

            <FormSection title="Career & Education" icon={<GraduationCap size={18} />}>
            <div className="space-y-4">
                <InputGroup label="Highest Degree" value={profile.education.education} section="education" field="education" placeholder="e.g. MBA, IIM Bangalore" type="textarea" />
                <InputGroup label="Occupation" value={profile.education.occupation} section="education" field="occupation" placeholder="e.g. Senior Manager" />
                <div className="grid grid-cols-2 gap-4">
                    <InputGroup label="Company" value={profile.education.company} section="education" field="company" />
                    <InputGroup label="Income" value={profile.education.income} section="education" field="income" placeholder="e.g. 25 LPA" />
                </div>
                
                <div className="pt-2">
                    <div className="flex justify-between items-center mb-2">
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Professional Summary</label>
                        <Button 
                            onClick={handleGenerateBio}
                            disabled={isGeneratingBio}
                            size="sm"
                            variant="ghost"
                            className="text-[10px] flex items-center gap-1.5 text-primary font-bold uppercase tracking-wider bg-primary/5 hover:bg-primary/10 px-2 py-1 rounded transition-colors disabled:opacity-50"
                        >
                            <Wand2 size={12} /> {isGeneratingBio ? 'Writing...' : 'AI Enhance'}
                        </Button>
                    </div>
                    <Textarea
                    value={profile.education.aboutMe}
                    onChange={(e) => updateSection('education', 'aboutMe', e.target.value)}
                    className="h-32 leading-relaxed"
                    placeholder="Write a brief summary about yourself..."
                    />
                </div>
            </div>
            </FormSection>

            <FormSection title="Family Details" icon={<Users size={18} />}>
                <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Religion" value={profile.personal.religion} section="personal" field="religion" />
                <InputGroup label="Caste" value={profile.personal.caste} section="personal" field="caste" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Gothra" value={profile.personal.gothra} section="personal" field="gothra" />
                <InputGroup label="Manglik" value={profile.personal.manglik} section="personal" field="manglik" type="select" options={['No', 'Yes', 'Anshik', 'Don\'t Know']} />
                </div>
                <InputGroup label="Rashi" value={profile.personal.rashi} section="personal" field="rashi" />
                
                <div className="my-4 border-t border-slate-100"></div>
                
                <div className="space-y-4">
                <InputGroup label="Father's Name" value={profile.family.fatherName} section="family" field="fatherName" />
                <InputGroup label="Father's Job" value={profile.family.fatherOccupation} section="family" field="fatherOccupation" />
                <InputGroup label="Mother's Name" value={profile.family.motherName} section="family" field="motherName" />
                <InputGroup label="Mother's Job" value={profile.family.motherOccupation} section="family" field="motherOccupation" />
                <InputGroup label="Siblings" value={profile.family.siblings} section="family" field="siblings" placeholder="e.g. 1 Brother, 1 Sister" type="textarea" />
                <InputGroup label="Native Place" value={profile.family.nativePlace} section="family" field="nativePlace" />
                </div>
            </FormSection>
            
            <FormSection title="Contact Information" icon={<Phone size={18} />}>
            <div className="space-y-4">
                <InputGroup label="Mobile Number" value={profile.contact.contactNumber} section="contact" field="contactNumber" />
                <InputGroup label="Email ID" value={profile.contact.email} section="contact" field="email" />
                <InputGroup label="Address" value={profile.contact.address} section="contact" field="address" type="textarea" />
            </div>
            </FormSection>
      </div>
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
      
      {/* HEADER */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 z-40 shrink-0">
        <div className="flex items-center gap-4">
            <button onClick={onBack} className="group flex items-center gap-2 hover:bg-slate-50 pr-3 py-1.5 rounded-full transition-colors">
                <div className="bg-primary text-white p-1.5 rounded-lg shadow-sm">
                    <Heart size={18} fill="currentColor" />
                </div>
                <h1 className="text-lg font-bold text-slate-900 tracking-tight leading-none font-playfair hidden md:block">WedScribe</h1>
            </button>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
             <Button 
                onClick={resetData}
                variant="ghost"
                className={`w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-sm text-slate-700 font-medium focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all`}
            >
                <RefreshCw size={14} /> <span className="hidden sm:inline">Reset</span>
            </Button>
            <div className="h-6 w-px bg-slate-200 mx-1 hidden md:block"></div>
            <Button 
                onClick={handlePrint}
                className="px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 transition-all hover:shadow-primary/30"
            >
                <Download size={16} /> <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">Save</span>
            </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        
        {/* DESKTOP SIDEBAR */}
        <aside className="hidden md:flex w-[400px] bg-white border-r border-slate-200 flex-col z-30 shrink-0 h-full shadow-[4px_0_24px_rgba(0,0,0,0.01)]">
            {/* Desktop Tabs */}
            <div className="px-5 pt-5 pb-4 border-b border-slate-100">
                <div className="flex p-1 bg-slate-100 rounded-lg">
                    <button 
                        onClick={() => setDesktopTab('templates')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-xs font-bold uppercase tracking-wide transition-all ${desktopTab === 'templates' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <LayoutGrid size={14} /> Templates
                    </button>
                    <button 
                        onClick={() => setDesktopTab('edit')}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-xs font-bold uppercase tracking-wide transition-all ${desktopTab === 'edit' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <PenTool size={14} /> Edit Details
                    </button>
                </div>
            </div>

            {/* Desktop Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-white">
                {desktopTab === 'templates' && (
                    <div className="p-6 animate-in fade-in slide-in-from-left-4 duration-300">
                         <div className="mb-6">
                             <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Select Design</h2>
                             <p className="text-xs text-slate-500">Choose a layout to get started.</p>
                         </div>
                        <TemplatesGrid />
                    </div>
                )}
                {desktopTab === 'edit' && (
                    <div className="p-5 animate-in fade-in slide-in-from-right-4 duration-300">
                         <EditorContent />
                    </div>
                )}
            </div>
        </aside>

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
            <div className="md:hidden absolute inset-0 bg-white z-20 overflow-y-auto p-6 pb-24 animate-in slide-in-from-bottom-4">
                 <h2 className="text-lg font-bold font-playfair mb-6">Choose Template</h2>
                 <TemplatesGrid />
            </div>
        )}

        {mobileTab === 'edit' && (
            <div className="md:hidden absolute inset-0 bg-white z-20 overflow-y-auto p-4 pb-24 animate-in slide-in-from-bottom-4">
                <h2 className="text-lg font-bold font-playfair mb-6 px-1">Edit Biodata</h2>
                <EditorContent />
            </div>
        )}

        {/* MOBILE BOTTOM NAVIGATION */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-50 flex items-center justify-around h-16 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <button 
                onClick={() => setMobileTab('designs')}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${mobileTab === 'designs' ? 'text-primary' : 'text-slate-400'}`}
            >
                <LayoutGrid size={20} />
                <span className="text-[10px] font-bold uppercase tracking-wide">Designs</span>
            </button>
            <button 
                onClick={() => setMobileTab('edit')}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${mobileTab === 'edit' ? 'text-primary' : 'text-slate-400'}`}
            >
                <PenTool size={20} />
                <span className="text-[10px] font-bold uppercase tracking-wide">Edit</span>
            </button>
            <button 
                onClick={() => setMobileTab('preview')}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${mobileTab === 'preview' ? 'text-primary' : 'text-slate-400'}`}
            >
                <Eye size={20} />
                <span className="text-[10px] font-bold uppercase tracking-wide">Preview</span>
            </button>
        </div>

      </div>
    </div>
  );
};
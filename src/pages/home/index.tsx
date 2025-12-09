import React from 'react';
import { Heart, Shield, Download, Sparkles, Layout, Zap, CheckCircle, ArrowRight, Lock, Printer, PenTool } from 'lucide-react';
import { Button } from '../../components/ui/button';
interface Props {
  onStart: () => void;
}

export const LandingPage: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <Heart size={28} fill="currentColor" className="drop-shadow-sm" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight leading-none font-playfair">WedScribe</h1>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#templates" className="hover:text-primary transition-colors">Templates</a>
          </div>
          <Button 
            onClick={onStart}
            size="sm"
            className="gap-2 group"
          >
            Create Now <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-accent rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
          <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-rose-100 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
          <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-amber-50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-100 text-secondary-foreground text-xs font-bold uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles size={14} className="text-primary" /> India's Premium Biodata Maker
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 font-playfair leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Craft the Perfect <br/>
            <span className="text-primary italic">Introduction</span> to Your Future
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Design elegant matrimonial biodatas in minutes. Professional templates, AI-assisted writing, and complete privacy — all in your browser.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button 
              onClick={onStart}
              size="lg"
              className="w-full sm:w-auto px-10 py-4 text-lg hover:-translate-y-1 gap-2"
            >
              Start Creating for Free <PenTool size={18} />
            </Button>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium px-6 py-4 bg-white/50 backdrop-blur rounded-full border border-slate-200 shadow-sm">
              <CheckCircle size={16} className="text-emerald-500" /> No Login Required
            </div>
          </div>
        </div>
      </header>

      {/* Feature Grid */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold font-playfair text-slate-900 mb-4">Refined Features</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-slate-500 max-w-lg mx-auto">We've stripped away the complexity to give you a tool that focuses purely on aesthetics and ease of use.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<Shield size={28} className="text-primary" />}
              title="Privacy First"
              description="Your personal details never leave your device. We process everything locally in your browser for 100% security."
            />
            <FeatureCard 
              icon={<Layout size={28} className="text-amber-600" />}
              title="Curated Templates"
              description="Choose from a collection of professionally typeset layouts designed specifically for modern Indian arranged marriages."
            />
            <FeatureCard 
              icon={<Printer size={28} className="text-slate-700" />}
              title="Print Ready"
              description="Download industry-standard A4 PDFs that look crisp on screen and perfect on paper. No watermarks."
            />
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20">
                <Zap size={32} className="text-amber-400" fill="currentColor" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 leading-tight">Struggling with words?</h2>
            <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto font-light">
                Our integrated AI writing assistant helps you craft a humble yet impressive professional summary based on your career and values.
            </p>
            
            <div className="bg-white text-slate-800 rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto text-left relative transform hover:scale-[1.01] transition-transform duration-500">
                <div className="absolute -top-4 -right-4 bg-amber-400 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">AI Generated</div>
                <p className="font-serif italic text-lg leading-relaxed text-slate-700">
                    "<span className="text-primary font-bold">I am a grounded and ambitious individual</span> who values family traditions while embracing modern progressive thinking. With a Master's in Computer Science and a passion for travel, I seek a partner who is intellectual, kind-hearted, and ready to share a journey of mutual growth."
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                     <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <Sparkles size={14} className="text-primary" />
                     </div>
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Generative AI Preview</span>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2">
              <div className="text-primary">
                 <Heart size={20} fill="currentColor" />
              </div>
              <span className="font-bold font-playfair text-xl text-slate-900">WedScribe</span>
           </div>
           <p className="text-slate-400 text-sm">
             © {new Date().getFullYear()} WedScribe. Crafted with care.
           </p>
           <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
             <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"><Lock size={14} /> Secure</span>
             <span className="opacity-20">|</span>
             <span className="hover:text-primary transition-colors cursor-pointer">Free Forever</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300">
    <div className="mb-6 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
        {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 font-playfair">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
  </div>
);
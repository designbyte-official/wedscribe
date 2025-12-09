
import React from 'react';
import { BiodataProfile, TemplateType } from '../../types';
import { 
  Phone, Mail, MapPin, User, Star, Briefcase, GraduationCap, 
  Heart, Users, Calendar, Clock, Ruler, Scale, Droplet, 
  BookOpen, Home, Globe, Award, Sparkles 
} from 'lucide-react';

interface Props {
  profile: BiodataProfile;
  template: TemplateType;
}

const PlaceholderImage = ({ className = "" }: { className?: string }) => (
  <div className={`bg-gray-100 flex items-center justify-center text-gray-300 ${className}`}>
    <User size="40%" />
  </div>
);

// --- SHARED HELPERS ---

const SectionTitle = ({ title, className = "", lineClass = "bg-gray-200" }: any) => (
    <div className={`flex items-center gap-3 mb-5 ${className}`}>
        <h3 className="uppercase tracking-[0.15em] font-bold text-sm shrink-0">{title}</h3>
        <div className={`h-px w-full ${lineClass}`}></div>
    </div>
);

const DetailItem = ({ label, value, icon: Icon, className = "", labelClass = "", valueClass = "" }: any) => {
    if (!value) return null;
    return (
        <div className={`flex flex-col ${className}`}>
            <div className="flex items-center gap-1.5 mb-1 opacity-70">
                {Icon && <Icon size={12} />}
                <span className={`text-[10px] uppercase tracking-wider font-semibold ${labelClass}`}>{label}</span>
            </div>
            <span className={`text-sm font-medium leading-relaxed whitespace-pre-line ${valueClass}`}>{value}</span>
        </div>
    );
};

const ContactRow = ({ icon: Icon, value }: any) => {
    if(!value) return null;
    return (
        <div className="flex items-start gap-3 text-sm">
            <div className="p-1.5 rounded-full bg-white/10 shrink-0 mt-0.5">
                <Icon size={14} />
            </div>
            <span className="opacity-90 whitespace-pre-line leading-relaxed">{value}</span>
        </div>
    )
}

export const TemplateRenderer: React.FC<Props> = ({ profile, template }) => {
  const { personal, education, family, contact } = profile;

  // 1. SKY BLOSSOM
  // Structure: Left Sidebar (35%) Dark Blue | Right Content (65%) White
  if (template === TemplateType.SKY_BLOSSOM) {
    return (
      <div className="w-full h-full bg-white flex flex-row font-lato overflow-hidden">
        {/* Left Sidebar - 35% */}
        <div className="w-[35%] bg-sky-900 text-white p-8 flex flex-col items-center text-center relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-sky-800 to-sky-900 opacity-50"></div>
            
            <div className="relative z-10 w-full flex flex-col items-center h-full">
                <div className="w-40 h-40 rounded-full border-4 border-sky-400/30 p-1 mb-6 mt-8 shrink-0">
                    {personal.photoUrl ? (
                        <img src={personal.photoUrl} className="w-full h-full rounded-full object-cover shadow-lg" />
                    ) : <PlaceholderImage className="w-full h-full rounded-full bg-sky-800 text-sky-400/50" />}
                </div>

                <div className="w-full space-y-8 grow flex flex-col justify-center">
                    <div>
                        <h2 className="text-2xl font-cinzel font-bold text-sky-100 mb-6 border-b border-sky-700 pb-4 w-full">Contact</h2>
                        <div className="w-full space-y-4 text-left px-2">
                            <ContactRow icon={Phone} value={contact.contactNumber} />
                            <ContactRow icon={Mail} value={contact.email} />
                            <ContactRow icon={MapPin} value={contact.address} />
                        </div>
                    </div>

                    <div className="w-full text-left px-2">
                        <h2 className="text-xl font-cinzel font-bold text-sky-100 mb-4 flex items-center gap-2">
                            <Star size={18} className="text-sky-400"/> Habits
                        </h2>
                        <div className="space-y-3 text-sm text-sky-100/80">
                            {personal.manglik === 'Yes' && <p>• Manglik</p>}
                            <p>• {profile.family.familyValues} Values</p>
                            <p>• {profile.family.familyType} Family</p>
                            <p>• {personal.religion}, {personal.caste}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Content - 65% */}
        <div className="w-[65%] p-10 flex flex-col">
            <div className="mb-10 border-b-2 border-sky-100 pb-6">
                <h1 className="text-5xl font-cinzel text-sky-900 mb-2 uppercase tracking-wide leading-tight">{personal.fullName}</h1>
                <p className="text-lg tracking-[0.2em] text-sky-500 uppercase font-bold">{education.occupation}</p>
            </div>

            <div className="space-y-8 grow">
                {/* About Section */}
                {education.aboutMe && (
                    <div className="bg-sky-50 p-5 border-l-4 border-sky-500 rounded-r-lg">
                        <p className="italic text-slate-600 leading-relaxed text-sm whitespace-pre-line">"{education.aboutMe}"</p>
                    </div>
                )}

                {/* Personal Grid */}
                <div>
                    <SectionTitle title="Personal Details" lineClass="bg-sky-100" />
                    <div className="grid grid-cols-3 gap-6">
                        <DetailItem label="Age/DOB" value={`${personal.dateOfBirth}`} icon={Calendar} />
                        <DetailItem label="Time" value={personal.timeOfBirth} icon={Clock} />
                        <DetailItem label="Height" value={personal.height} icon={Ruler} />
                        <DetailItem label="Religion" value={personal.religion} icon={Star} />
                        <DetailItem label="Caste" value={personal.caste} icon={Users} />
                        <DetailItem label="Gothra" value={personal.gothra} icon={User} />
                    </div>
                </div>

                {/* Professional Grid */}
                <div>
                    <SectionTitle title="Education & Career" lineClass="bg-sky-100" />
                    <div className="grid grid-cols-2 gap-6">
                        <DetailItem label="Education" value={education.education} icon={GraduationCap} className="col-span-2" />
                        <DetailItem label="Occupation" value={education.occupation} icon={Briefcase} />
                        <DetailItem label="Company" value={education.company} icon={Globe} />
                        <DetailItem label="Income" value={education.income} icon={Award} />
                    </div>
                </div>

                {/* Family Grid */}
                <div>
                    <SectionTitle title="Family Background" lineClass="bg-sky-100" />
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        <DetailItem label="Father" value={family.fatherName} valueClass="font-bold text-sky-900" />
                        <DetailItem label="Occupation" value={family.fatherOccupation} />
                        <DetailItem label="Mother" value={family.motherName} valueClass="font-bold text-sky-900" />
                        <DetailItem label="Occupation" value={family.motherOccupation} />
                        <DetailItem label="Siblings" value={family.siblings} className="col-span-2 mt-2" />
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <div className="mt-auto pt-6 text-center text-xs text-sky-300 uppercase tracking-widest">
                Biodata • {personal.fullName}
            </div>
        </div>
      </div>
    );
  }

  // 2. REGAL ANVIKA
  // Structure: 40% Left Patterned Sidebar | 60% Content. High contrast.
  if (template === TemplateType.REGAL_ANVIKA) {
    return (
      <div className="w-full h-full bg-[#3d1024] flex text-[#fdf2f8] font-cormorant relative">
         {/* Decorative Border */}
         <div className="absolute inset-3 border border-[#d4af37]/40 pointer-events-none z-20"></div>
         <div className="absolute inset-5 border border-[#d4af37]/20 pointer-events-none z-20"></div>

         {/* Left Side - 40% */}
         <div className="w-[40%] border-r border-[#d4af37]/30 p-8 flex flex-col items-center bg-[#2a0a18] relative">
            {/* Mandala Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#d4af37] to-transparent"></div>
            
            <div className="relative z-10 flex flex-col items-center w-full h-full">
                <div className="w-48 h-56 border-2 border-[#d4af37] p-2 mt-12 mb-8 rotate-1 shadow-2xl bg-[#3d1024]">
                     <div className="w-full h-full border border-[#d4af37]/50 bg-[#3d1024] overflow-hidden">
                        {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover" /> : <PlaceholderImage className="w-full h-full bg-[#3d1024] text-[#d4af37]" />}
                     </div>
                </div>

                <div className="w-full mt-8 space-y-10 text-center">
                    <div>
                        <h3 className="text-[#d4af37] uppercase tracking-[0.2em] text-xs mb-4 border-b border-[#d4af37]/30 inline-block pb-1">Astrology</h3>
                        <div className="space-y-2 text-lg leading-relaxed">
                            <p><span className="text-[#d4af37]/60 text-sm block">Rashi</span> {personal.rashi}</p>
                            <p><span className="text-[#d4af37]/60 text-sm block">Nakshatra</span> {personal.nakshatra}</p>
                            <p><span className="text-[#d4af37]/60 text-sm block">Manglik</span> {personal.manglik === 'Yes' ? 'Manglik' : 'Non-Manglik'}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[#d4af37] uppercase tracking-[0.2em] text-xs mb-4 border-b border-[#d4af37]/30 inline-block pb-1">Contact</h3>
                        <div className="space-y-3 text-sm font-sans tracking-wide opacity-90">
                            <p>{contact.contactNumber}</p>
                            <p>{contact.email}</p>
                            <p className="opacity-70 px-4 whitespace-pre-line leading-relaxed">{contact.address}</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>

         {/* Right Side - 60% */}
         <div className="w-[60%] p-12 flex flex-col justify-center relative">
            <h1 className="text-6xl text-[#d4af37] font-great-vibes mb-3 leading-tight">{personal.fullName}</h1>
            <p className="text-sm uppercase tracking-[0.3em] mb-12 text-[#fbcfe8] opacity-80">{education.occupation}</p>

            <div className="space-y-12">
                <section>
                    <h3 className="font-cinzel text-2xl text-[#d4af37] mb-6 flex items-center gap-2">
                        <span className="h-px w-8 bg-[#d4af37]/50"></span> Personal
                    </h3>
                    <div className="grid grid-cols-2 gap-y-4 text-lg">
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">DOB</span> {personal.dateOfBirth}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">Time</span> {personal.timeOfBirth}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">Height</span> {personal.height}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">Caste</span> {personal.caste}, {personal.subCaste}</div>
                         <div className="flex flex-col col-span-2"><span className="text-[#d4af37] text-sm uppercase opacity-70">Education</span> {education.education}</div>
                    </div>
                </section>

                <section>
                    <h3 className="font-cinzel text-2xl text-[#d4af37] mb-6 flex items-center gap-2">
                        <span className="h-px w-8 bg-[#d4af37]/50"></span> Family
                    </h3>
                    <div className="space-y-4 text-lg border-l-2 border-[#d4af37]/30 pl-6">
                         <div>
                            <span className="text-[#d4af37] text-sm uppercase block tracking-wider opacity-70">Father</span>
                            {family.fatherName} <span className="text-sm opacity-60 block mt-0.5">{family.fatherOccupation}</span>
                         </div>
                         <div>
                            <span className="text-[#d4af37] text-sm uppercase block tracking-wider opacity-70">Mother</span>
                            {family.motherName} <span className="text-sm opacity-60 block mt-0.5">{family.motherOccupation}</span>
                         </div>
                         <div>
                            <span className="text-[#d4af37] text-sm uppercase block tracking-wider opacity-70">Siblings</span>
                            <span className="whitespace-pre-line text-base">{family.siblings}</span>
                         </div>
                    </div>
                </section>
            </div>
         </div>
      </div>
    );
  }

  // 3. IVORY LINES
  // Structure: 30% Grey Sidebar | 70% White Main. Professional Resume Style.
  if (template === TemplateType.IVORY_LINES) {
    return (
      <div className="w-full h-full bg-white flex text-stone-800 font-montserrat">
        {/* Left Sidebar - 30% */}
        <div className="w-[30%] bg-stone-100 p-8 flex flex-col border-r border-stone-200">
            <div className="w-full aspect-square bg-stone-200 mb-8 overflow-hidden grayscale border border-stone-300">
                {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover" /> : <PlaceholderImage className="w-full h-full" />}
            </div>

            <div className="space-y-8">
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4 border-b border-stone-300 pb-2">Details</h4>
                    <div className="space-y-3 text-sm font-medium">
                        <div className="flex justify-between"><span>DOB</span> <span>{personal.dateOfBirth}</span></div>
                        <div className="flex justify-between"><span>Height</span> <span>{personal.height}</span></div>
                        <div className="flex justify-between"><span>Weight</span> <span>{personal.weight}</span></div>
                        <div className="flex justify-between"><span>Blood</span> <span>{personal.bloodGroup}</span></div>
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4 border-b border-stone-300 pb-2">Social</h4>
                    <div className="space-y-3 text-sm font-medium">
                        <div className="flex justify-between"><span>Religion</span> <span>{personal.religion}</span></div>
                        <div className="flex justify-between"><span>Caste</span> <span>{personal.caste}</span></div>
                        <div className="flex justify-between"><span>Manglik</span> <span>{personal.manglik}</span></div>
                    </div>
                </div>

                <div className="mt-auto">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4 border-b border-stone-300 pb-2">Contact</h4>
                    <div className="text-sm space-y-2 break-all">
                        <p className="font-bold">{contact.contactNumber}</p>
                        <p>{contact.email}</p>
                        <p className="text-stone-500 text-xs mt-2 whitespace-pre-line leading-relaxed">{contact.address}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Content - 70% */}
        <div className="w-[70%] p-12 flex flex-col">
            <div className="mb-12">
                <h1 className="text-4xl font-playfair font-bold uppercase tracking-wide mb-2 leading-tight">{personal.fullName}</h1>
                <p className="text-stone-500 text-sm font-bold uppercase tracking-[0.2em]">{education.occupation}</p>
            </div>

            <div className="space-y-10 grow">
                <section>
                    <h3 className="font-playfair font-bold text-xl mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-stone-800 rotate-45"></span> Profile
                    </h3>
                    <p className="text-sm leading-7 text-stone-600 border-l-2 border-stone-200 pl-4 whitespace-pre-line">
                        {education.aboutMe || "Brief summary about the profile..."}
                    </p>
                </section>

                <section>
                    <h3 className="font-playfair font-bold text-xl mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-stone-800 rotate-45"></span> Professional Info
                    </h3>
                    <div className="grid grid-cols-2 gap-6 align-top">
                        <DetailItem label="Qualification" value={education.education} labelClass="text-stone-400" />
                        <DetailItem label="Occupation" value={education.occupation} labelClass="text-stone-400" />
                        <DetailItem label="Employer" value={education.company} labelClass="text-stone-400" />
                        <DetailItem label="Annual Income" value={education.income} labelClass="text-stone-400" />
                    </div>
                </section>

                <section>
                    <h3 className="font-playfair font-bold text-xl mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-stone-800 rotate-45"></span> Family Background
                    </h3>
                    <div className="bg-stone-50 p-6 border border-stone-100 grid grid-cols-2 gap-y-6 gap-x-8">
                         <DetailItem label="Father" value={family.fatherName} valueClass="font-bold" />
                         <DetailItem label="Job" value={family.fatherOccupation} />
                         <DetailItem label="Mother" value={family.motherName} valueClass="font-bold" />
                         <DetailItem label="Job" value={family.motherOccupation} />
                         <div className="col-span-2 pt-2 border-t border-stone-200 mt-2">
                            <DetailItem label="Siblings" value={family.siblings} />
                         </div>
                         <div className="col-span-2">
                             <DetailItem label="Native Place" value={family.nativePlace} />
                         </div>
                    </div>
                </section>
            </div>
        </div>
      </div>
    );
  }

  // 4. MINT BLOSSOM
  // Structure: 40% Left Image/Contact | 60% Right Details. Floating Card Style.
  if (template === TemplateType.MINT_BLOSSOM) {
    return (
      <div className="w-full h-full bg-[#f0fdf4] p-8 flex font-lato relative overflow-hidden">
        {/* Decorative Leaves */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 -left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-40"></div>

        <div className="w-full h-full bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white flex overflow-hidden relative z-10">
            {/* Left Side - 40% */}
            <div className="w-[40%] bg-green-50/50 p-8 flex flex-col border-r border-green-100">
                <h1 className="font-playfair text-3xl text-green-900 font-bold mb-1 leading-tight">{personal.fullName}</h1>
                <p className="text-green-600 text-xs font-bold uppercase tracking-widest mb-8">{education.occupation}</p>
                
                <div className="w-full aspect-[3/4] bg-white p-2 shadow-md rounded-lg mb-8 rotate-1">
                     {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover rounded" /> : <PlaceholderImage className="w-full h-full rounded" />}
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 mt-auto">
                    <h3 className="text-green-800 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Contact
                    </h3>
                    <div className="space-y-3 text-sm text-green-900">
                        <div className="flex items-center gap-3"><Phone size={14} className="text-green-500"/> {contact.contactNumber}</div>
                        <div className="flex items-center gap-3"><Mail size={14} className="text-green-500"/> {contact.email}</div>
                        <div className="flex items-start gap-3"><MapPin size={14} className="text-green-500 mt-1"/> <span className="whitespace-pre-line">{contact.address}</span></div>
                    </div>
                </div>
            </div>

            {/* Right Side - 60% */}
            <div className="w-[60%] p-10 flex flex-col gap-10 overflow-y-auto">
                {education.aboutMe && (
                    <div className="relative pl-6">
                        <span className="absolute left-0 top-0 text-4xl text-green-300 font-serif">"</span>
                        <p className="text-green-900/80 italic leading-relaxed text-sm pt-2 whitespace-pre-line">
                            {education.aboutMe}
                        </p>
                    </div>
                )}

                <div className="space-y-8">
                    <div>
                        <h2 className="text-lg font-bold text-green-800 border-b-2 border-green-100 pb-2 mb-4 inline-block pr-8">Personal Information</h2>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                             <DetailItem label="Date of Birth" value={personal.dateOfBirth} labelClass="text-green-600" />
                             <DetailItem label="Time of Birth" value={personal.timeOfBirth} labelClass="text-green-600" />
                             <DetailItem label="Height" value={personal.height} labelClass="text-green-600" />
                             <DetailItem label="Complexion" value={personal.complexion} labelClass="text-green-600" />
                             <DetailItem label="Rashi" value={personal.rashi} labelClass="text-green-600" />
                             <DetailItem label="Manglik" value={personal.manglik} labelClass="text-green-600" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-green-800 border-b-2 border-green-100 pb-2 mb-4 inline-block pr-8">Education & Career</h2>
                        <div className="grid grid-cols-1 gap-y-4">
                             <DetailItem label="Highest Degree" value={education.education} labelClass="text-green-600" />
                             <DetailItem label="Occupation" value={`${education.occupation} at ${education.company}`} labelClass="text-green-600" />
                             <DetailItem label="Income" value={education.income} labelClass="text-green-600" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-green-800 border-b-2 border-green-100 pb-2 mb-4 inline-block pr-8">Family Details</h2>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                             <DetailItem label="Father" value={family.fatherName} labelClass="text-green-600" />
                             <DetailItem label="Mother" value={family.motherName} labelClass="text-green-600" />
                             <div className="col-span-2">
                                <DetailItem label="Siblings" value={family.siblings} labelClass="text-green-600" />
                             </div>
                             <div className="col-span-2">
                                <DetailItem label="Native" value={family.nativePlace} labelClass="text-green-600" />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  // 5. ROYAL RED
  // Structure: Single Column Centered. Wedding Card style.
  if (template === TemplateType.ROYAL_RED) {
    return (
      <div className="w-full h-full bg-[#7f1d1d] p-6 flex items-center justify-center font-cormorant text-[#fff1f2]">
        <div className="w-full h-full border-2 border-[#fcd34d] p-1.5 rounded-lg relative">
             <div className="w-full h-full border border-[#fcd34d] rounded p-8 flex flex-col items-center relative overflow-hidden bg-[#991b1b]">
                
                {/* Ornamental Corners */}
                <div className="absolute top-4 left-4 w-24 h-24 border-t-4 border-l-4 border-[#fcd34d] rounded-tl-3xl opacity-60"></div>
                <div className="absolute top-4 right-4 w-24 h-24 border-t-4 border-r-4 border-[#fcd34d] rounded-tr-3xl opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 border-b-4 border-l-4 border-[#fcd34d] rounded-bl-3xl opacity-60"></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 border-b-4 border-r-4 border-[#fcd34d] rounded-br-3xl opacity-60"></div>

                <div className="text-center z-10 mb-8 mt-4">
                    <span className="text-[#fcd34d] uppercase tracking-[0.4em] text-xs">|| Shree Ganeshay Namah ||</span>
                    <h1 className="font-great-vibes text-6xl mt-4 text-[#fcd34d] drop-shadow-md">{personal.fullName}</h1>
                </div>

                <div className="flex w-full gap-8 z-10 grow px-4">
                    {/* Left Column (Details) */}
                    <div className="w-1/2 flex flex-col items-end text-right gap-8 pt-4">
                        <div>
                             <h3 className="text-[#fcd34d] font-bold uppercase tracking-widest text-sm mb-3 border-b border-[#fcd34d]/30 pb-1 inline-block">Personal</h3>
                             <div className="space-y-1">
                                <p>{personal.dateOfBirth}</p>
                                <p>{personal.height}</p>
                                <p>{personal.religion}, {personal.caste}</p>
                                <p>{personal.gothra}</p>
                             </div>
                        </div>
                        <div>
                             <h3 className="text-[#fcd34d] font-bold uppercase tracking-widest text-sm mb-3 border-b border-[#fcd34d]/30 pb-1 inline-block">Professional</h3>
                             <div className="space-y-1">
                                <p className="font-bold whitespace-pre-line">{education.education}</p>
                                <p>{education.occupation}</p>
                                <p>{education.company}</p>
                             </div>
                        </div>
                        <div>
                             <h3 className="text-[#fcd34d] font-bold uppercase tracking-widest text-sm mb-3 border-b border-[#fcd34d]/30 pb-1 inline-block">Family</h3>
                             <div className="space-y-1">
                                <p>Father: {family.fatherName}</p>
                                <p>Mother: {family.motherName}</p>
                                <p>{family.nativePlace}</p>
                             </div>
                        </div>
                    </div>

                    {/* Center Divider Area */}
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-[#fcd34d]/50 to-transparent self-center"></div>

                    {/* Right Column (Photo & Contact) */}
                    <div className="w-1/2 flex flex-col items-start gap-8 pt-4">
                         <div className="w-40 h-52 border-2 border-[#fcd34d] p-1 shadow-2xl bg-[#7f1d1d]">
                            {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover" /> : <PlaceholderImage className="w-full h-full" />}
                         </div>

                         <div>
                             <h3 className="text-[#fcd34d] font-bold uppercase tracking-widest text-sm mb-3 border-b border-[#fcd34d]/30 pb-1 inline-block">Contact</h3>
                             <div className="space-y-1 text-left">
                                <p>{contact.contactNumber}</p>
                                <p>{contact.email}</p>
                                <p className="text-sm opacity-80 mt-2 max-w-[200px] whitespace-pre-line">{contact.address}</p>
                             </div>
                         </div>
                    </div>
                </div>
                
                <div className="mt-auto pt-8 z-10 text-center opacity-70 text-xs tracking-widest uppercase text-[#fcd34d] pb-4">
                    Marriage Biodata
                </div>
             </div>
        </div>
      </div>
    );
  }

  // 6. MINIMALIST
  // Structure: Swiss Design. 25% Left Title | 75% Right Grid.
  if (template === TemplateType.MINIMALIST) {
    return (
      <div className="w-full h-full bg-white text-black p-12 font-lato flex flex-col">
        {/* Header Block */}
        <div className="flex items-end justify-between border-b-[6px] border-black pb-8 mb-12">
            <div>
                <h1 className="text-7xl font-black uppercase tracking-tighter leading-[0.8]">{personal.fullName?.split(' ')[0]}</h1>
                <h1 className="text-7xl font-black uppercase tracking-tighter leading-[0.8] text-gray-300">{personal.fullName?.split(' ').slice(1).join(' ')}</h1>
            </div>
            <div className="text-right">
                <p className="font-bold text-xl uppercase tracking-widest">{education.occupation}</p>
                <p className="text-gray-500 font-mono text-sm mt-1">{personal.placeOfBirth}</p>
            </div>
        </div>

        <div className="flex grow gap-16">
            {/* Left Column 25% - Photo & Metrics */}
            <div className="w-[25%] flex flex-col">
                 <div className="w-full aspect-square bg-gray-100 mb-8 grayscale contrast-125">
                     {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover" /> : <PlaceholderImage className="w-full h-full" />}
                 </div>

                 <div className="space-y-6">
                    <div className="border-l-4 border-black pl-4">
                        <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Height</span>
                        <span className="text-xl font-bold">{personal.height}</span>
                    </div>
                    <div className="border-l-4 border-black pl-4">
                        <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Age</span>
                        <span className="text-xl font-bold">{new Date().getFullYear() - new Date(personal.dateOfBirth).getFullYear()} Yrs</span>
                    </div>
                    <div className="border-l-4 border-black pl-4">
                        <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Blood</span>
                        <span className="text-xl font-bold">{personal.bloodGroup}</span>
                    </div>
                 </div>
            </div>

            {/* Right Column 75% - The Grid */}
            <div className="w-[75%] grid grid-cols-2 gap-x-12 gap-y-12 content-start">
                <div className="col-span-2">
                    <h3 className="bg-black text-white inline-block px-2 py-1 text-xs font-black uppercase tracking-widest mb-4">About</h3>
                    <p className="text-xl font-light leading-relaxed text-gray-800 whitespace-pre-line">
                        {education.aboutMe || "A brief introduction about personality, values, and what is expected from a partner."}
                    </p>
                </div>

                <div>
                    <h3 className="bg-black text-white inline-block px-2 py-1 text-xs font-black uppercase tracking-widest mb-6">Education</h3>
                    <div className="space-y-4">
                        <DetailItem label="Degree" value={education.education} />
                        <DetailItem label="Profession" value={education.occupation} />
                        <DetailItem label="Organization" value={education.company} />
                    </div>
                </div>

                <div>
                    <h3 className="bg-black text-white inline-block px-2 py-1 text-xs font-black uppercase tracking-widest mb-6">Family</h3>
                    <div className="space-y-4">
                        <DetailItem label="Father" value={family.fatherName} />
                        <DetailItem label="Mother" value={family.motherName} />
                        <DetailItem label="Residence" value={family.nativePlace} />
                    </div>
                </div>

                <div className="col-span-2 border-t border-gray-200 pt-8 flex justify-between items-end">
                    <div>
                        <h3 className="bg-black text-white inline-block px-2 py-1 text-xs font-black uppercase tracking-widest mb-2">Contact</h3>
                        <p className="font-bold text-lg">{contact.contactNumber}</p>
                        <p className="text-gray-500">{contact.email}</p>
                    </div>
                    <div className="text-right max-w-xs">
                        <p className="text-sm text-gray-400 whitespace-pre-line">{contact.address}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  return <div className="p-10 text-center text-gray-500">Select a template</div>;
};

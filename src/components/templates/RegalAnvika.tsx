import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage } from './shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const RegalAnvika: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-[#3d1024] flex text-[#fdf2f8] font-cormorant relative min-h-full">
         {/* Decorative Border */}
         <div className="absolute inset-3 border border-[#d4af37]/40 pointer-events-none z-20"></div>
         <div className="absolute inset-5 border border-[#d4af37]/20 pointer-events-none z-20"></div>

         {/* Left Side - 40% */}
         <div className="w-[38%] border-r border-[#d4af37]/30 p-5 flex flex-col bg-[#2a0a18] relative min-h-full">
            {/* Mandala Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#d4af37] to-transparent"></div>
            
            <div className="relative z-10 flex flex-col w-full h-full gap-3">
                <div className="w-36 h-44 border-2 border-[#d4af37] p-2 mx-auto rotate-1 shadow-2xl bg-[#3d1024]">
                     <div className="w-full h-full border border-[#d4af37]/50 bg-[#3d1024] overflow-hidden">
                        {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover" alt="Profile" /> : <PlaceholderImage className="w-full h-full bg-[#3d1024] text-[#d4af37]" />}
                     </div>
                </div>

                <div className="w-full space-y-3 text-left text-xs leading-relaxed">
                    <div>
                        <h3 className="text-[#d4af37] uppercase tracking-[0.2em] text-[10px] mb-2 border-b border-[#d4af37]/30 pb-1">{t('section.astrology')}</h3>
                        <div className="space-y-1 text-sm">
                            {personal.rashi && <p><span className="text-[#d4af37]/60">{t('field.rashi')}: </span>{personal.rashi}</p>}
                            {personal.nakshatra && <p><span className="text-[#d4af37]/60">{t('field.nakshatra')}: </span>{personal.nakshatra}</p>}
                            {personal.gothra && <p><span className="text-[#d4af37]/60">{t('field.gothra')}: </span>{personal.gothra}</p>}
                            {personal.manglik && <p><span className="text-[#d4af37]/60">{t('field.manglik')}: </span>{personal.manglik}</p>}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[#d4af37] uppercase tracking-[0.2em] text-[10px] mb-2 border-b border-[#d4af37]/30 pb-1">Quick Info</h3>
                        <div className="space-y-1 text-sm">
                            {personal.height && <p><span className="text-[#d4af37]/60">{t('field.height')}: </span>{personal.height}</p>}
                            {personal.weight && <p><span className="text-[#d4af37]/60">{t('field.weight')}: </span>{personal.weight}</p>}
                            {personal.bloodGroup && <p><span className="text-[#d4af37]/60">{t('field.bloodGroup')}: </span>{personal.bloodGroup}</p>}
                            {personal.complexion && <p><span className="text-[#d4af37]/60">{t('field.complexion')}: </span>{personal.complexion}</p>}
                            {personal.maritalStatus && <p><span className="text-[#d4af37]/60">{t('field.maritalStatus')}: </span>{personal.maritalStatus}</p>}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[#d4af37] uppercase tracking-[0.2em] text-[10px] mb-2 border-b border-[#d4af37]/30 pb-1">{t('section.contact')}</h3>
                        <div className="space-y-1.5 text-xs font-sans tracking-wide opacity-90">
                            {contact.contactNumber && <p className="break-words">{contact.contactNumber}</p>}
                            {contact.email && <p className="break-words">{contact.email}</p>}
                            {contact.address && <p className="opacity-70 whitespace-pre-line leading-relaxed">{contact.address}</p>}
                        </div>
                    </div>
                </div>
            </div>
         </div>

         {/* Right Side - 60% */}
         <div className="w-[62%] p-8 flex flex-col justify-start relative gap-6 min-h-full">
            <div className="shrink-0">
              <h1 className="text-5xl text-[#d4af37] font-great-vibes leading-tight">{personal.fullName}</h1>
              <p className="text-xs uppercase tracking-[0.28em] text-[#fbcfe8] opacity-80">{education.occupation}</p>
            </div>

            <div className="space-y-8 flex-1 min-h-0">
                <section>
                    <h3 className="font-cinzel text-xl text-[#d4af37] mb-4 flex items-center gap-2">
                        <span className="h-px w-8 bg-[#d4af37]/50"></span> {t('section.personal')}
                    </h3>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.dob')}</span> {personal.dateOfBirth}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.tob')}</span> {personal.timeOfBirth}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.pob')}</span> {personal.placeOfBirth}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.caste')}</span> {personal.caste}{personal.subCaste ? `, ${personal.subCaste}` : ''}</div>
                         <div className="flex flex-col col-span-2"><span className="text-[#d4af37] text-xs uppercase opacity-70">{t('field.education')}</span> {education.education}</div>
                         <div className="flex flex-col col-span-2"><span className="text-[#d4af37] text-xs uppercase opacity-70">{t('field.company')}</span> {education.company}{education.income ? ` (${education.income})` : ''}</div>
                         {education.aboutMe && <div className="flex flex-col col-span-2"><span className="text-[#d4af37] text-xs uppercase opacity-70">{t('field.aboutMe')}</span> <span className="text-sm italic normal-case opacity-90 leading-relaxed">{education.aboutMe}</span></div>}
                    </div>
                </section>

                <section>
                    <h3 className="font-cinzel text-xl text-[#d4af37] mb-4 flex items-center gap-2">
                        <span className="h-px w-8 bg-[#d4af37]/50"></span> {t('section.family')}
                    </h3>
                    <div className="space-y-3 text-sm border-l-2 border-[#d4af37]/30 pl-4">
                         <div>
                            <span className="text-[#d4af37] text-sm uppercase block tracking-wider opacity-70">{t('field.nativePlace')}</span>
                            {family.nativePlace}
                         </div>
                         <div>
                            <span className="text-[#d4af37] text-sm uppercase block tracking-wider opacity-70">{t('field.fatherName')}</span>
                            {family.fatherName} <span className="text-sm opacity-60 block mt-0.5">{family.fatherOccupation}</span>
                         </div>
                         <div>
                            <span className="text-[#d4af37] text-sm uppercase block tracking-wider opacity-70">{t('field.motherName')}</span>
                            {family.motherName} <span className="text-sm opacity-60 block mt-0.5">{family.motherOccupation}</span>
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-[#d4af37] text-sm uppercase block tracking-wider opacity-70">{t('field.familyType')}</span>
                                {family.familyType}
                            </div>
                            <div>
                                <span className="text-[#d4af37] text-sm uppercase block tracking-wider opacity-70">{t('field.values')}</span>
                                {family.familyValues}
                            </div>
                         </div>
                         <div>
                            <span className="text-[#d4af37] text-sm uppercase block tracking-wider opacity-70">{t('field.siblings')}</span>
                            <span className="whitespace-pre-line text-sm">{family.siblings}</span>
                         </div>
                    </div>
                </section>
            </div>
         </div>
      </div>
  );
};

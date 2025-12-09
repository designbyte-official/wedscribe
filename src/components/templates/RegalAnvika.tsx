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
                        {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover" alt="Profile" /> : <PlaceholderImage className="w-full h-full bg-[#3d1024] text-[#d4af37]" />}
                     </div>
                </div>

                <div className="w-full mt-8 space-y-10 text-center">
                    <div>
                        <h3 className="text-[#d4af37] uppercase tracking-[0.2em] text-xs mb-4 border-b border-[#d4af37]/30 inline-block pb-1">{t('section.astrology')}</h3>
                        <div className="space-y-2 text-lg leading-relaxed">
                            <p><span className="text-[#d4af37]/60 text-sm block">{t('field.rashi')}</span> {personal.rashi}</p>
                            <p><span className="text-[#d4af37]/60 text-sm block">{t('field.nakshatra')}</span> {personal.nakshatra}</p>
                            <p><span className="text-[#d4af37]/60 text-sm block">{t('field.gothra')}</span> {personal.gothra}</p>
                            <p><span className="text-[#d4af37]/60 text-sm block">{t('field.manglik')}</span> {personal.manglik}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[#d4af37] uppercase tracking-[0.2em] text-xs mb-4 border-b border-[#d4af37]/30 inline-block pb-1">{t('section.contact')}</h3>
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
                        <span className="h-px w-8 bg-[#d4af37]/50"></span> {t('section.personal')}
                    </h3>
                    <div className="grid grid-cols-2 gap-y-4 text-lg">
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.dob')}</span> {personal.dateOfBirth}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.tob')}</span> {personal.timeOfBirth}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.pob')}</span> {personal.placeOfBirth}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.height')}</span> {personal.height}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.weight')}</span> {personal.weight}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.bloodGroup')}</span> {personal.bloodGroup}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.complexion')}</span> {personal.complexion}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.maritalStatus')}</span> {personal.maritalStatus}</div>
                         <div className="flex flex-col"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.caste')}</span> {personal.caste}, {personal.subCaste}</div>
                         <div className="flex flex-col col-span-2"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.education')}</span> {education.education}</div>
                         <div className="flex flex-col col-span-2"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.company')}</span> {education.company} ({education.income})</div>
                         <div className="flex flex-col col-span-2"><span className="text-[#d4af37] text-sm uppercase opacity-70">{t('field.aboutMe')}</span> <span className="text-base italic normal-case opacity-90">{education.aboutMe}</span></div>
                    </div>
                </section>

                <section>
                    <h3 className="font-cinzel text-2xl text-[#d4af37] mb-6 flex items-center gap-2">
                        <span className="h-px w-8 bg-[#d4af37]/50"></span> {t('section.family')}
                    </h3>
                    <div className="space-y-4 text-lg border-l-2 border-[#d4af37]/30 pl-6">
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
                            <span className="whitespace-pre-line text-base">{family.siblings}</span>
                         </div>
                    </div>
                </section>
            </div>
         </div>
      </div>
  );
};

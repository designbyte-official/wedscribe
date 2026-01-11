import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage } from '../shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const RoyalRed: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

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
            <span className="text-[#fcd34d] uppercase tracking-[0.4em] text-xs">{t('template.mantra')}</span>
            <h1 className="font-great-vibes text-6xl mt-4 text-[#fcd34d] drop-shadow-md">{personal.fullName}</h1>
          </div>

          <div className="flex w-full gap-8 z-10 grow px-4">
            {/* Left Column (Details) */}
            <div className="w-1/2 flex flex-col items-end text-right gap-8 pt-4">
              <div>
                <h3 className="text-[#fcd34d] font-bold uppercase tracking-widest text-sm mb-3 border-b border-[#fcd34d]/30 pb-1 inline-block">{t('section.personal')}</h3>
                <div className="space-y-1 text-sm">
                  {personal.dateOfBirth && <p>{personal.dateOfBirth}{personal.timeOfBirth ? `, ${personal.timeOfBirth}` : ''}</p>}
                  {personal.placeOfBirth && <p>{personal.placeOfBirth}</p>}
                  {personal.height && personal.weight && <p>{personal.height}, {personal.weight}</p>}
                  {personal.bloodGroup && personal.complexion && <p>{personal.bloodGroup}, {personal.complexion}</p>}
                  {personal.maritalStatus && <p>{personal.maritalStatus}</p>}
                  {personal.religion && <p>{personal.religion}{personal.caste ? `, ${personal.caste}` : ''}{personal.subCaste ? `, ${personal.subCaste}` : ''}</p>}
                  {personal.gothra && <p>{personal.gothra}</p>}
                  {personal.rashi && personal.nakshatra && <p>{personal.rashi}, {personal.nakshatra}</p>}
                  {personal.manglik === 'Yes' && <p>{t('field.manglik')}</p>}
                </div>
              </div>
              <div>
                <h3 className="text-[#fcd34d] font-bold uppercase tracking-widest text-sm mb-3 border-b border-[#fcd34d]/30 pb-1 inline-block">{t('section.education')}</h3>
                <div className="space-y-1 text-sm">
                  {education.education && <p className="font-bold whitespace-pre-line">{education.education}</p>}
                  {education.occupation && <p>{education.occupation}</p>}
                  {education.company && <p>{education.company}</p>}
                  {education.income && <p>{education.income}</p>}
                </div>
              </div>
              <div>
                <h3 className="text-[#fcd34d] font-bold uppercase tracking-widest text-sm mb-3 border-b border-[#fcd34d]/30 pb-1 inline-block">{t('section.family')}</h3>
                <div className="space-y-1 text-sm">
                  {family.fatherName && <p>{t('field.fatherName')}: {family.fatherName}{family.fatherOccupation ? ` (${family.fatherOccupation})` : ''}</p>}
                  {family.motherName && <p>{t('field.motherName')}: {family.motherName}{family.motherOccupation ? ` (${family.motherOccupation})` : ''}</p>}
                  {family.nativePlace && family.familyType && <p>{family.nativePlace}, {family.familyType}</p>}
                  {family.familyValues && <p>{family.familyValues}</p>}
                  {family.siblings && <p className="whitespace-pre-line">{family.siblings}</p>}
                </div>
              </div>
            </div>

            {/* Center Divider Area */}
            <div className="w-px h-full bg-gradient-to-b from-transparent via-[#fcd34d]/50 to-transparent self-center"></div>

            {/* Right Column (Photo & Contact) */}
            <div className="w-1/2 flex flex-col items-start gap-8 pt-4">
              <div className="w-40 h-52 border-2 border-[#fcd34d] p-1 shadow-2xl bg-[#7f1d1d]">
                {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover" alt="Profile" /> : <PlaceholderImage className="w-full h-full" />}
              </div>

              <div>
                <h3 className="text-[#fcd34d] font-bold uppercase tracking-widest text-sm mb-3 border-b border-[#fcd34d]/30 pb-1 inline-block">{t('section.contact')}</h3>
                <div className="space-y-1 text-left text-sm">
                  {contact.contactNumber && <p>{contact.contactNumber}</p>}
                  {contact.email && <p>{contact.email}</p>}
                  {contact.address && <p className="opacity-80 mt-2 max-w-[200px] whitespace-pre-line">{contact.address}</p>}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8 z-10 text-center opacity-70 text-xs tracking-widest uppercase text-[#fcd34d] pb-4">
            {t('common.marriageBiodata')}
          </div>
        </div>
      </div>
    </div>
  );
};

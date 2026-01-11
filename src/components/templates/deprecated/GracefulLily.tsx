import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage, DetailItem, SectionTitle } from '../shared';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const GracefulLily: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-[linear-gradient(to_bottom_right,#f8fafc,#ffffff,#eff6ff)] text-[#0f172a] font-serif relative overflow-hidden min-h-full">
      <div className="absolute inset-8 border border-[#dbeafe] rounded-[26px] pointer-events-none" />
      <div className="absolute top-10 left-16 w-32 h-32 bg-[#bfdbfe]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-6 right-10 w-40 h-40 bg-[#c7d2fe]/30 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-[0.35fr_0.65fr] gap-8 h-full p-10 min-h-full">
        {/* Sidebar - Better Utilized */}
        <div className="bg-white/80 backdrop-blur border border-[#dbeafe] shadow-xl rounded-2xl p-6 flex flex-col gap-4 min-h-full overflow-y-auto">
          <div className="text-center space-y-2 shrink-0">
            <h1 className="text-2xl font-bold tracking-tight">{personal.fullName}</h1>
            <p className="text-[#2563eb] uppercase tracking-[0.25em] text-xs font-semibold">{education.occupation}</p>
            {education.company && <p className="text-[#64748b] text-xs">{education.company}</p>}
          </div>

          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border border-[#dbeafe] shadow-md shrink-0">
            {personal.photoUrl ? (
              <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage className="w-full h-full bg-[#f1f5f9] text-[#cbd5e1]" />
            )}
          </div>

          <div className="rounded-xl border border-[#dbeafe] bg-[#eff6ff]/60 p-4 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#1d4ed8] font-semibold mb-2">Quick Info</p>
            <div className="space-y-1.5 text-xs text-[#334155]">
              {personal.dateOfBirth && <div className="flex justify-between"><span className="text-[#2563eb]">{t('field.dob')}</span><span>{personal.dateOfBirth}</span></div>}
              {personal.timeOfBirth && <div className="flex justify-between"><span className="text-[#2563eb]">{t('field.tob')}</span><span>{personal.timeOfBirth}</span></div>}
              {personal.height && <div className="flex justify-between"><span className="text-[#2563eb]">{t('field.height')}</span><span>{personal.height}</span></div>}
              {personal.weight && <div className="flex justify-between"><span className="text-[#2563eb]">{t('field.weight')}</span><span>{personal.weight}</span></div>}
              {personal.bloodGroup && <div className="flex justify-between"><span className="text-[#2563eb]">{t('field.bloodGroup')}</span><span>{personal.bloodGroup}</span></div>}
              {personal.complexion && <div className="flex justify-between"><span className="text-[#2563eb]">{t('field.complexion')}</span><span>{personal.complexion}</span></div>}
              {personal.maritalStatus && <div className="flex justify-between"><span className="text-[#2563eb]">{t('field.maritalStatus')}</span><span>{personal.maritalStatus}</span></div>}
            </div>
          </div>

          <div className="rounded-xl border border-[#dbeafe] bg-[#eff6ff]/60 p-4 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#1d4ed8] font-semibold mb-2">{t('section.astrology')}</p>
            <div className="space-y-1.5 text-xs text-[#334155]">
              {personal.rashi && <div className="flex justify-between"><span className="text-[#2563eb]">{t('field.rashi')}</span><span>{personal.rashi}</span></div>}
              {personal.nakshatra && <div className="flex justify-between"><span className="text-[#2563eb]">{t('field.nakshatra')}</span><span>{personal.nakshatra}</span></div>}
              {personal.gothra && <div className="flex justify-between"><span className="text-[#2563eb]">{t('field.gothra')}</span><span>{personal.gothra}</span></div>}
              {personal.manglik && <div className="flex justify-between"><span className="text-[#2563eb]">{t('field.manglik')}</span><span>{personal.manglik}</span></div>}
            </div>
          </div>

          <div className="rounded-xl border border-[#dbeafe] bg-[#eff6ff]/60 p-4 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#1d4ed8] font-semibold mb-2">{t('section.contact')}</p>
            <div className="space-y-1.5 text-xs text-[#334155]">
              {contact.contactNumber && <div className="flex items-center gap-2"><Phone size={12} className="text-[#3b82f6] shrink-0" /> <span className="break-words">{contact.contactNumber}</span></div>}
              {contact.email && <div className="flex items-center gap-2"><Mail size={12} className="text-[#3b82f6] shrink-0" /> <span className="break-words">{contact.email}</span></div>}
              {contact.address && <div className="flex items-start gap-2"><MapPin size={12} className="text-[#3b82f6] mt-0.5 shrink-0" /> <span className="whitespace-pre-line leading-relaxed">{contact.address}</span></div>}
            </div>
          </div>
        </div>

        {/* Body - Single Column */}
        <div className="flex flex-col gap-6 min-h-full overflow-y-auto pr-2">
          <div className="bg-white border border-[#dbeafe] rounded-2xl shadow-lg p-8 space-y-6">
            <SectionTitle title={t('section.personal')} lineClass="bg-[#dbeafe]" className="items-center" />
            <div className="grid grid-cols-2 gap-6">
              <DetailItem label={t('field.religion')} value={personal.religion} />
              <DetailItem label={t('field.caste')} value={`${personal.caste}${personal.subCaste ? `, ${personal.subCaste}` : ''}`} />
              <DetailItem label={t('field.pob')} value={personal.placeOfBirth} />
              <DetailItem label={t('field.gothra')} value={personal.gothra} />
            </div>
          </div>

          <div className="bg-white border border-[#dbeafe] rounded-2xl shadow-lg p-8 space-y-6">
            <SectionTitle title={t('section.education')} lineClass="bg-[#dbeafe]" className="items-center" />
            <div className="space-y-4">
              <DetailItem label={t('field.education')} value={education.education} />
              <DetailItem label={t('field.occupation')} value={education.occupation} />
              <DetailItem label={t('field.company')} value={education.company} />
              <DetailItem label={t('field.income')} value={education.income} />
            </div>
            {education.aboutMe && (
              <div className="mt-6 pt-6 border-t border-[#dbeafe]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#2563eb] font-semibold mb-3">{t('field.aboutMe')}</p>
                <p className="text-[#334155] leading-relaxed whitespace-pre-line text-sm">
                  {education.aboutMe}
                </p>
              </div>
            )}
          </div>

          <div className="bg-white border border-[#dbeafe] rounded-2xl shadow-lg p-8 space-y-6">
            <SectionTitle title={t('section.family')} lineClass="bg-[#dbeafe]" className="items-center" />
            <div className="space-y-4">
              <DetailItem label={t('field.fatherName')} value={family.fatherName && family.fatherOccupation ? `${family.fatherName} (${family.fatherOccupation})` : family.fatherName || family.fatherOccupation} />
              <DetailItem label={t('field.motherName')} value={family.motherName && family.motherOccupation ? `${family.motherName} (${family.motherOccupation})` : family.motherName || family.motherOccupation} />
              <div className="grid grid-cols-2 gap-4">
                <DetailItem label={t('field.familyType')} value={family.familyType} />
                <DetailItem label={t('field.values')} value={family.familyValues} />
              </div>
              <DetailItem label={t('field.siblings')} value={family.siblings} />
              <DetailItem label={t('field.nativePlace')} value={family.nativePlace} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


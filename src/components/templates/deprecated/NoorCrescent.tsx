import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage, DetailItem, ContactRow, SectionTitle } from '../shared';
import { Moon, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const NoorCrescent: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-emerald-50 font-cormorant relative overflow-hidden min-h-full">
      <div className="absolute inset-4 rounded-[30px] border border-emerald-400/30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-28 h-28 rounded-full bg-emerald-400/30 blur-3xl" />
      <div className="absolute bottom-14 left-16 w-40 h-40 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10 grid grid-cols-[0.4fr_0.6fr] h-full min-h-full">
        {/* Left Sidebar - Better Utilized */}
        <div className="border-r border-emerald-400/20 p-6 flex flex-col gap-4 min-h-full overflow-y-auto">
          <div className="w-full flex items-center justify-between text-xs uppercase tracking-[0.25em] font-semibold text-emerald-200 shrink-0">
            <span>{t('common.marriageBiodata')}</span>
            <Moon size={16} className="text-emerald-100" />
          </div>

          <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-emerald-300/30 shadow-[0_12px_45px_-10px_rgba(0,0,0,0.4)] shrink-0">
            {personal.photoUrl ? (
              <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage className="w-full h-full bg-emerald-800 text-emerald-200" />
            )}
          </div>

          <div className="space-y-1.5 text-left shrink-0">
            <h1 className="text-2xl font-semibold tracking-wide">{personal.fullName}</h1>
            <p className="text-emerald-200/80 uppercase tracking-[0.2em] text-xs">{education.occupation}</p>
            {education.company && <p className="text-emerald-200/70 text-xs">{education.company}</p>}
          </div>

          <div className="w-full rounded-2xl border border-emerald-400/20 bg-emerald-900/40 p-4 space-y-2">
            <h3 className="text-emerald-100 uppercase tracking-[0.2em] text-[10px] font-semibold mb-1.5">{t('section.astrology')}</h3>
            <div className="space-y-1.5 text-xs text-emerald-50/90">
              {personal.rashi && <div className="flex justify-between"><span className="text-emerald-200">{t('field.rashi')}</span><span>{personal.rashi}</span></div>}
              {personal.nakshatra && <div className="flex justify-between"><span className="text-emerald-200">{t('field.nakshatra')}</span><span>{personal.nakshatra}</span></div>}
              {personal.gothra && <div className="flex justify-between"><span className="text-emerald-200">{t('field.gothra')}</span><span>{personal.gothra}</span></div>}
              {personal.manglik && <div className="flex justify-between"><span className="text-emerald-200">{t('field.manglik')}</span><span>{personal.manglik}</span></div>}
            </div>
          </div>

          <div className="w-full rounded-2xl border border-emerald-400/20 bg-emerald-900/40 p-4 space-y-2">
            <h3 className="text-emerald-100 uppercase tracking-[0.2em] text-[10px] font-semibold mb-1.5">Quick Info</h3>
            <div className="space-y-1.5 text-xs text-emerald-50/90">
              {personal.height && <div className="flex justify-between"><span className="text-emerald-200">{t('field.height')}</span><span>{personal.height}</span></div>}
              {personal.weight && <div className="flex justify-between"><span className="text-emerald-200">{t('field.weight')}</span><span>{personal.weight}</span></div>}
              {personal.bloodGroup && <div className="flex justify-between"><span className="text-emerald-200">{t('field.bloodGroup')}</span><span>{personal.bloodGroup}</span></div>}
              {personal.complexion && <div className="flex justify-between"><span className="text-emerald-200">{t('field.complexion')}</span><span>{personal.complexion}</span></div>}
              {personal.maritalStatus && <div className="flex justify-between"><span className="text-emerald-200">{t('field.maritalStatus')}</span><span>{personal.maritalStatus}</span></div>}
            </div>
          </div>

          <div className="w-full rounded-2xl border border-emerald-400/20 bg-emerald-900/40 p-4 space-y-2">
            <h3 className="text-emerald-100 uppercase tracking-[0.2em] text-[10px] font-semibold mb-1.5">{t('section.contact')}</h3>
            <div className="space-y-2">
              <ContactRow icon={Phone} value={contact.contactNumber} />
              <ContactRow icon={Mail} value={contact.email} />
              <ContactRow icon={MapPin} value={contact.address} />
            </div>
          </div>
        </div>

        {/* Right Content - Single Column */}
        <div className="p-8 flex flex-col gap-6 min-h-full overflow-y-auto">
          <div className="bg-emerald-900/40 border border-emerald-400/20 rounded-3xl p-8 shadow-lg space-y-6">
            <SectionTitle title={t('section.personal')} lineClass="bg-emerald-400/40" className="items-center" />
            <div className="grid grid-cols-2 gap-6 text-emerald-50/90">
              <DetailItem label={t('field.dob')} value={`${personal.dateOfBirth}`} labelClass="text-emerald-200" />
              <DetailItem label={t('field.tob')} value={personal.timeOfBirth} labelClass="text-emerald-200" />
              <DetailItem label={t('field.pob')} value={personal.placeOfBirth} labelClass="text-emerald-200" />
              <DetailItem label={t('field.religion')} value={personal.religion} labelClass="text-emerald-200" />
              <DetailItem label={t('field.caste')} value={`${personal.caste}${personal.subCaste ? `, ${personal.subCaste}` : ''}`} labelClass="text-emerald-200" />
              <DetailItem label={t('field.gothra')} value={personal.gothra} labelClass="text-emerald-200" />
            </div>
          </div>

          <div className="bg-emerald-900/40 border border-emerald-400/20 rounded-3xl p-8 shadow-lg space-y-6">
            <SectionTitle title={t('section.education')} lineClass="bg-emerald-400/40" className="items-center" />
            <div className="space-y-4 text-emerald-50/90">
              <DetailItem label={t('field.education')} value={education.education} labelClass="text-emerald-200" />
              <DetailItem label={t('field.occupation')} value={education.occupation} labelClass="text-emerald-200" />
              <DetailItem label={t('field.company')} value={education.company} labelClass="text-emerald-200" />
              <DetailItem label={t('field.income')} value={education.income} labelClass="text-emerald-200" />
            </div>
            {education.aboutMe && (
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-800/40 p-4 mt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200 mb-2">{t('field.aboutMe')}</p>
                <p className="text-emerald-50/90 leading-relaxed whitespace-pre-line text-sm">{education.aboutMe}</p>
              </div>
            )}
          </div>

          <div className="bg-emerald-900/40 border border-emerald-400/20 rounded-3xl p-8 shadow-lg space-y-6">
            <SectionTitle title={t('section.family')} lineClass="bg-emerald-400/40" className="items-center" />
            <div className="space-y-4 text-emerald-50/90">
              <DetailItem label={t('field.fatherName')} value={family.fatherName && family.fatherOccupation ? `${family.fatherName} (${family.fatherOccupation})` : family.fatherName || family.fatherOccupation} labelClass="text-emerald-200" />
              <DetailItem label={t('field.motherName')} value={family.motherName && family.motherOccupation ? `${family.motherName} (${family.motherOccupation})` : family.motherName || family.motherOccupation} labelClass="text-emerald-200" />
              <DetailItem label={t('field.familyType')} value={family.familyType} labelClass="text-emerald-200" />
              <DetailItem label={t('field.values')} value={family.familyValues} labelClass="text-emerald-200" />
              <DetailItem label={t('field.siblings')} value={family.siblings} labelClass="text-emerald-200" />
              <DetailItem label={t('field.nativePlace')} value={family.nativePlace} labelClass="text-emerald-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


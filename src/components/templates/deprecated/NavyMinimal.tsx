import React from 'react';
import { BiodataProfile } from '@/types';
import { DetailItem, SectionTitle, PlaceholderImage } from '../shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const NavyMinimal: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-white text-slate-900 font-sans min-h-full overflow-hidden">
      <div className="grid grid-cols-[0.35fr_0.65fr] h-full min-h-full">
        <div className="bg-slate-900 text-white p-6 flex flex-col gap-4 min-h-full overflow-y-auto">
          <div className="space-y-1 shrink-0">
            <p className="text-[10px] uppercase tracking-[0.32em] text-slate-300">{t('common.marriageBiodata')}</p>
            <h1 className="text-2xl font-extrabold leading-tight">{personal.fullName}</h1>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{education.occupation}</p>
            {education.company && <p className="text-xs text-slate-400 mt-1">{education.company}</p>}
          </div>
          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border border-slate-700 bg-slate-800 shrink-0">
            {personal.photoUrl ? (
              <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage className="w-full h-full text-slate-600" />
            )}
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold mb-2">{t('section.astrology')}</p>
            <div className="space-y-1.5 text-xs text-slate-200">
              {personal.rashi && <div className="flex justify-between"><span className="text-slate-400">{t('field.rashi')}</span><span>{personal.rashi}</span></div>}
              {personal.nakshatra && <div className="flex justify-between"><span className="text-slate-400">{t('field.nakshatra')}</span><span>{personal.nakshatra}</span></div>}
              {personal.gothra && <div className="flex justify-between"><span className="text-slate-400">{t('field.gothra')}</span><span>{personal.gothra}</span></div>}
              {personal.manglik && <div className="flex justify-between"><span className="text-slate-400">{t('field.manglik')}</span><span>{personal.manglik}</span></div>}
            </div>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold mb-2">Quick Info</p>
            <div className="space-y-1.5 text-xs text-slate-200">
              {personal.height && <div className="flex justify-between"><span className="text-slate-400">{t('field.height')}</span><span>{personal.height}</span></div>}
              {personal.weight && <div className="flex justify-between"><span className="text-slate-400">{t('field.weight')}</span><span>{personal.weight}</span></div>}
              {personal.bloodGroup && <div className="flex justify-between"><span className="text-slate-400">{t('field.bloodGroup')}</span><span>{personal.bloodGroup}</span></div>}
              {personal.complexion && <div className="flex justify-between"><span className="text-slate-400">{t('field.complexion')}</span><span>{personal.complexion}</span></div>}
              {personal.maritalStatus && <div className="flex justify-between"><span className="text-slate-400">{t('field.maritalStatus')}</span><span>{personal.maritalStatus}</span></div>}
            </div>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold mb-2">{t('section.contact')}</p>
            <div className="space-y-2 text-xs">
              {contact.contactNumber && <p className="font-semibold text-slate-100">{contact.contactNumber}</p>}
              {contact.email && <p className="text-slate-200 break-words">{contact.email}</p>}
              {contact.address && <p className="text-slate-300 whitespace-pre-line leading-relaxed">{contact.address}</p>}
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6 min-h-full overflow-y-auto">
          <div className="bg-slate-50 rounded-xl p-8 space-y-6">
            <SectionTitle title={t('section.personal')} lineClass="bg-slate-200" />
            <div className="grid grid-cols-2 gap-6 text-sm">
              <DetailItem label={t('field.dob')} value={personal.dateOfBirth} />
              <DetailItem label={t('field.tob')} value={personal.timeOfBirth} />
              <DetailItem label={t('field.pob')} value={personal.placeOfBirth} />
              <DetailItem label={t('field.religion')} value={personal.religion} />
              <DetailItem label={t('field.caste')} value={`${personal.caste}${personal.subCaste ? `, ${personal.subCaste}` : ''}`} />
              <DetailItem label={t('field.gothra')} value={personal.gothra} />
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 space-y-6">
            <SectionTitle title={t('section.education')} lineClass="bg-slate-200" />
            <div className="space-y-4 text-sm">
              <DetailItem label={t('field.education')} value={education.education} />
              <DetailItem label={t('field.occupation')} value={education.occupation} />
              <DetailItem label={t('field.company')} value={education.company} />
              <DetailItem label={t('field.income')} value={education.income} />
            </div>
            {education.aboutMe && (
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-600 font-semibold mb-3">{t('field.aboutMe')}</p>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line text-sm">
                  {education.aboutMe}
                </p>
              </div>
            )}
          </div>

          <div className="bg-slate-50 rounded-xl p-8 space-y-6">
            <SectionTitle title={t('section.family')} lineClass="bg-slate-200" />
            <div className="space-y-4 text-sm">
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


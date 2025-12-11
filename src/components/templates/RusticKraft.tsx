import React from 'react';
import { BiodataProfile } from '@/types';
import { DetailItem, SectionTitle, PlaceholderImage } from './shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const RusticKraft: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-[#f7f1e8] text-stone-900 font-serif">
      <div className="h-full grid grid-cols-[0.4fr_0.6fr]">
        <div className="p-6 border-r border-amber-200 space-y-4">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.26em] text-amber-700">{t('common.marriageBiodata')}</p>
            <h1 className="text-2xl font-bold leading-tight text-amber-900">{personal.fullName}</h1>
            <p className="text-xs uppercase tracking-[0.18em] text-amber-700">{education.occupation}</p>
          </div>
          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border border-amber-200 bg-amber-50">
            {personal.photoUrl ? (
              <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage className="w-full h-full text-amber-300" />
            )}
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-amber-700 font-semibold">{t('section.astrology')}</p>
            <div className="space-y-1.5 text-xs text-stone-700">
              {personal.rashi && <div className="flex justify-between"><span className="text-amber-700">{t('field.rashi')}</span><span>{personal.rashi}</span></div>}
              {personal.nakshatra && <div className="flex justify-between"><span className="text-amber-700">{t('field.nakshatra')}</span><span>{personal.nakshatra}</span></div>}
              {personal.gothra && <div className="flex justify-between"><span className="text-amber-700">{t('field.gothra')}</span><span>{personal.gothra}</span></div>}
              {personal.manglik && <div className="flex justify-between"><span className="text-amber-700">{t('field.manglik')}</span><span>{personal.manglik}</span></div>}
            </div>
          </div>
          <div className="space-y-2 text-xs">
            <p className="text-[10px] uppercase tracking-[0.2em] text-amber-700 font-semibold">{t('section.contact')}</p>
            {contact.contactNumber && <p className="font-semibold text-amber-800">{contact.contactNumber}</p>}
            {contact.email && <p className="text-stone-700 break-words">{contact.email}</p>}
            {contact.address && <p className="text-stone-600 whitespace-pre-line leading-relaxed">{contact.address}</p>}
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="bg-white/80 border border-amber-200 rounded-xl p-6 space-y-4">
            <SectionTitle title={t('section.personal')} lineClass="bg-amber-200" />
            <div className="grid grid-cols-3 gap-4 text-sm">
              <DetailItem label={t('field.dob')} value={personal.dateOfBirth} />
              <DetailItem label={t('field.tob')} value={personal.timeOfBirth} />
              <DetailItem label={t('field.pob')} value={personal.placeOfBirth} />
              <DetailItem label={t('field.height')} value={personal.height} />
              <DetailItem label={t('field.weight')} value={personal.weight} />
              <DetailItem label={t('field.bloodGroup')} value={personal.bloodGroup} />
              <DetailItem label={t('field.complexion')} value={personal.complexion} />
              <DetailItem label={t('field.maritalStatus')} value={personal.maritalStatus} />
              <DetailItem label={t('field.religion')} value={personal.religion} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 items-stretch">
            <div className="bg-white/80 border border-amber-200 rounded-xl p-6 space-y-3 h-full">
              <SectionTitle title={t('section.education')} lineClass="bg-amber-200" />
              <DetailItem label={t('field.education')} value={education.education} />
              <DetailItem label={t('field.occupation')} value={education.occupation} />
              <DetailItem label={t('field.company')} value={education.company} />
              <DetailItem label={t('field.income')} value={education.income} />
            </div>
            <div className="bg-white/80 border border-amber-200 rounded-xl p-6 space-y-3 h-full">
              <SectionTitle title={t('field.aboutMe')} lineClass="bg-amber-200" />
              <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">{education.aboutMe}</p>
            </div>
          </div>

          <div className="bg-white/80 border border-amber-200 rounded-xl p-6">
            <SectionTitle title={t('section.family')} lineClass="bg-amber-200" />
            <div className="grid grid-cols-2 gap-4 text-sm">
              <DetailItem label={t('field.fatherName')} value={family.fatherName && family.fatherOccupation ? `${family.fatherName} (${family.fatherOccupation})` : family.fatherName || family.fatherOccupation} />
              <DetailItem label={t('field.motherName')} value={family.motherName && family.motherOccupation ? `${family.motherName} (${family.motherOccupation})` : family.motherName || family.motherOccupation} />
              <DetailItem label={t('field.familyType')} value={family.familyType} />
              <DetailItem label={t('field.values')} value={family.familyValues} />
              <DetailItem label={t('field.siblings')} value={family.siblings} className="col-span-2" />
              <DetailItem label={t('field.nativePlace')} value={family.nativePlace} className="col-span-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RusticKraft;

import React from 'react';
import { BiodataProfile } from '@/types';
import { DetailItem, SectionTitle, PlaceholderImage, QuickFacts } from './shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props { profile: BiodataProfile; }

export const KalyanMandap: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-50 via-amber-50 to-white text-amber-900 font-serif">
      <div className="grid grid-cols-[0.36fr_0.64fr] h-full">
        <div className="p-8 border-r border-amber-200 space-y-6">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-600 font-semibold">{t('common.marriageBiodata')}</p>
            <h1 className="text-3xl font-bold leading-tight">{personal.fullName}</h1>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-600">{education.occupation}</p>
          </div>
          <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-amber-200 shadow-sm bg-white">
            {personal.photoUrl ? <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" /> : <PlaceholderImage className="w-full h-full text-amber-200" />}
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-amber-800">{contact.contactNumber}</p>
            <p className="text-amber-800 break-words">{contact.email}</p>
            <p className="text-amber-700 whitespace-pre-line leading-relaxed">{contact.address}</p>
          </div>
          <QuickFacts personal={personal} education={education} />
        </div>

        <div className="p-8 space-y-8">
          <div className="bg-white/80 border border-amber-200 rounded-2xl p-6">
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

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/80 border border-amber-200 rounded-2xl p-6 space-y-3">
              <SectionTitle title={t('section.education')} lineClass="bg-amber-200" />
              <DetailItem label={t('field.education')} value={education.education} />
              <DetailItem label={t('field.occupation')} value={education.occupation} />
              <DetailItem label={t('field.company')} value={education.company} />
              <DetailItem label={t('field.income')} value={education.income} />
            </div>
            <div className="bg-white/80 border border-amber-200 rounded-2xl p-6 space-y-3">
              <SectionTitle title={t('field.aboutMe')} lineClass="bg-amber-200" />
              <p className="text-sm text-amber-800 leading-relaxed whitespace-pre-line">{education.aboutMe}</p>
            </div>
          </div>

          <div className="bg-white/80 border border-amber-200 rounded-2xl p-6">
            <SectionTitle title={t('section.family')} lineClass="bg-amber-200" />
            <div className="grid grid-cols-2 gap-4 text-sm">
              <DetailItem label={t('field.fatherName')} value={`${family.fatherName} (${family.fatherOccupation})`} />
              <DetailItem label={t('field.motherName')} value={`${family.motherName} (${family.motherOccupation})`} />
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


import React from 'react';
import { BiodataProfile } from '@/types';
import { DetailItem, SectionTitle, PlaceholderImage, QuickFacts } from './shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props { profile: BiodataProfile; }

export const GraceChapel: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-50 via-white to-blue-50 text-indigo-900 font-serif">
      <div className="grid grid-cols-[0.36fr_0.64fr] h-full">
        <div className="p-8 border-r border-indigo-100 space-y-4">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.3em] text-indigo-500 font-semibold">{t('common.marriageBiodata')}</p>
            <h1 className="text-3xl font-bold leading-tight">{personal.fullName}</h1>
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-500">{education.occupation}</p>
          </div>
          <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-indigo-100 shadow-sm bg-white">
            {personal.photoUrl ? <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" /> : <PlaceholderImage className="w-full h-full text-indigo-200" />}
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-indigo-800">{contact.contactNumber}</p>
            <p className="text-indigo-800 break-words">{contact.email}</p>
            <p className="text-indigo-700 whitespace-pre-line leading-relaxed">{contact.address}</p>
          </div>
          <QuickFacts personal={personal} education={education} />
        </div>

        <div className="p-8 space-y-8">
          <div className="bg-white/80 border border-indigo-100 rounded-2xl p-6">
            <SectionTitle title={t('section.personal')} lineClass="bg-indigo-200" />
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
            <div className="bg-white/80 border border-indigo-100 rounded-2xl p-6 space-y-3">
              <SectionTitle title={t('section.education')} lineClass="bg-indigo-200" />
              <DetailItem label={t('field.education')} value={education.education} />
              <DetailItem label={t('field.occupation')} value={education.occupation} />
              <DetailItem label={t('field.company')} value={education.company} />
              <DetailItem label={t('field.income')} value={education.income} />
            </div>
            <div className="bg-white/80 border border-indigo-100 rounded-2xl p-6 space-y-3">
              <SectionTitle title={t('field.aboutMe')} lineClass="bg-indigo-200" />
              <p className="text-sm text-indigo-800 leading-relaxed whitespace-pre-line">{education.aboutMe}</p>
            </div>
          </div>

          <div className="bg-white/80 border border-indigo-100 rounded-2xl p-6">
            <SectionTitle title={t('section.family')} lineClass="bg-indigo-200" />
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


import React from 'react';
import { BiodataProfile } from '@/types';
import { DetailItem, SectionTitle, PlaceholderImage } from './shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const ModernSlate: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-slate-950 text-slate-50 font-inter">
      <div className="grid grid-cols-[0.34fr_0.66fr] h-full">
        <div className="p-8 border-r border-slate-800 space-y-6">
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">{t('common.marriageBiodata')}</p>
            <h1 className="text-3xl font-bold leading-tight">{personal.fullName}</h1>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{education.occupation}</p>
          </div>

          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
            {personal.photoUrl ? (
              <img src={personal.photoUrl} className="w-full h-full object-cover" alt="Profile" />
            ) : (
              <PlaceholderImage className="w-full h-full text-slate-700" />
            )}
          </div>

          <div className="space-y-2 text-sm text-slate-200">
            <p className="font-semibold">{contact.contactNumber}</p>
            <p className="text-slate-300 break-words">{contact.email}</p>
            <p className="text-slate-400 whitespace-pre-line leading-relaxed">{contact.address}</p>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
              <SectionTitle title={t('section.personal')} lineClass="bg-slate-700" />
              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                <DetailItem label={t('field.dob')} value={personal.dateOfBirth} />
                <DetailItem label={t('field.tob')} value={personal.timeOfBirth} />
                <DetailItem label={t('field.pob')} value={personal.placeOfBirth} />
                <DetailItem label={t('field.height')} value={personal.height} />
                <DetailItem label={t('field.weight')} value={personal.weight} />
                <DetailItem label={t('field.bloodGroup')} value={personal.bloodGroup} />
                <DetailItem label={t('field.complexion')} value={personal.complexion} />
                <DetailItem label={t('field.maritalStatus')} value={personal.maritalStatus} />
              </div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
              <SectionTitle title={t('section.astrology')} lineClass="bg-slate-700" />
              <div className="grid grid-cols-1 gap-2 text-xs md:text-sm">
                <DetailItem label={t('field.religion')} value={personal.religion} />
                <DetailItem label={t('field.caste')} value={`${personal.caste}${personal.subCaste ? `, ${personal.subCaste}` : ''}`} />
                <DetailItem label={t('field.gothra')} value={personal.gothra} />
                <DetailItem label={t('field.rashi')} value={personal.rashi} />
                <DetailItem label={t('field.nakshatra')} value={personal.nakshatra} />
                <DetailItem label={t('field.manglik')} value={personal.manglik} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-3">
              <SectionTitle title={t('section.education')} lineClass="bg-slate-700" />
              <DetailItem label={t('field.education')} value={education.education} />
              <DetailItem label={t('field.occupation')} value={education.occupation} />
              <DetailItem label={t('field.company')} value={education.company} />
              <DetailItem label={t('field.income')} value={education.income} />
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-3">
              <SectionTitle title={t('field.aboutMe')} lineClass="bg-slate-700" />
              <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-line">{education.aboutMe}</p>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
            <SectionTitle title={t('section.family')} lineClass="bg-slate-700" />
            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
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


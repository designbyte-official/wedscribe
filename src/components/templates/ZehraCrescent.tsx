import React from 'react';
import { BiodataProfile } from '@/types';
import { DetailItem, SectionTitle, PlaceholderImage, QuickFacts } from './shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props { profile: BiodataProfile; }

export const ZehraCrescent: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-emerald-50 font-serif">
      <div className="grid grid-cols-[0.34fr_0.66fr] h-full">
        <div className="p-5 border-r border-emerald-800 space-y-3 bg-gradient-to-b from-emerald-950 to-slate-950">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.32em] text-emerald-300">{t('common.marriageBiodata')}</p>
            <h1 className="text-2xl font-bold leading-tight">{personal.fullName}</h1>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">{education.occupation}</p>
          </div>
          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border-2 border-emerald-700 bg-emerald-900 shadow-lg">
            {personal.photoUrl ? <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" /> : <PlaceholderImage className="w-full h-full text-emerald-700" />}
          </div>
          <div className="rounded-lg border border-emerald-800 bg-emerald-900/60 p-3 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-semibold">{t('section.astrology')}</p>
            <div className="space-y-1 text-xs text-emerald-100">
              {personal.rashi && <div className="flex justify-between"><span className="text-emerald-300">{t('field.rashi')}</span><span className="font-medium">{personal.rashi}</span></div>}
              {personal.nakshatra && <div className="flex justify-between"><span className="text-emerald-300">{t('field.nakshatra')}</span><span className="font-medium">{personal.nakshatra}</span></div>}
              {personal.gothra && <div className="flex justify-between"><span className="text-emerald-300">{t('field.gothra')}</span><span className="font-medium">{personal.gothra}</span></div>}
              {personal.manglik && <div className="flex justify-between"><span className="text-emerald-300">{t('field.manglik')}</span><span className="font-medium">{personal.manglik}</span></div>}
            </div>
          </div>
          <QuickFacts personal={personal} education={education} />
          <div className="space-y-1.5 text-xs">
            <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300 font-semibold">{t('section.contact')}</p>
            {contact.contactNumber && <p className="font-semibold text-emerald-100">{contact.contactNumber}</p>}
            {contact.email && <p className="break-words text-emerald-200">{contact.email}</p>}
            {contact.address && <p className="text-emerald-200 whitespace-pre-line leading-relaxed">{contact.address}</p>}
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <SectionTitle title={t('section.personal')} lineClass="bg-emerald-700" />
              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                <DetailItem label={t('field.dob')} value={personal.dateOfBirth} />
                <DetailItem label={t('field.tob')} value={personal.timeOfBirth} />
                <DetailItem label={t('field.pob')} value={personal.placeOfBirth} />
                <DetailItem label={t('field.complexion')} value={personal.complexion} />
                <DetailItem label={t('field.religion')} value={personal.religion} />
                <DetailItem label={t('field.caste')} value={personal.caste && personal.subCaste ? `${personal.caste}, ${personal.subCaste}` : personal.caste || personal.subCaste} />
              </div>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <SectionTitle title={t('section.astrology')} lineClass="bg-emerald-700" />
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
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6 space-y-3">
              <SectionTitle title={t('section.education')} lineClass="bg-emerald-700" />
              <DetailItem label={t('field.education')} value={education.education} />
              <DetailItem label={t('field.occupation')} value={education.occupation} />
              <DetailItem label={t('field.company')} value={education.company} />
              <DetailItem label={t('field.income')} value={education.income} />
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6 space-y-3">
              <SectionTitle title={t('field.aboutMe')} lineClass="bg-emerald-700" />
              <p className="text-sm text-emerald-50 leading-relaxed whitespace-pre-line">{education.aboutMe}</p>
            </div>
          </div>

          <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
            <SectionTitle title={t('section.family')} lineClass="bg-emerald-700" />
            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
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


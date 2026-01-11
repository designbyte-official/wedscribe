import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage } from '../shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const RoyalMandala: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  const labelClass = 'text-amber-200 font-semibold tracking-wide';
  const valueClass = 'text-amber-50';

  return (
    <div className="w-full h-full bg-[#3b0f2b] text-amber-50 font-serif relative overflow-hidden">
      {/* Corner ornaments */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-6 w-24 h-24 rounded-full border border-amber-300/40" />
        <div className="absolute right-6 top-6 w-24 h-24 rounded-full border border-amber-300/40" />
        <div className="absolute left-6 bottom-6 w-24 h-24 rounded-full border border-amber-300/40" />
        <div className="absolute right-6 bottom-6 w-24 h-24 rounded-full border border-amber-300/40" />
      </div>

      <div className="relative h-full w-full px-10 py-10 flex flex-col items-center gap-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-bold tracking-[0.18em] text-amber-100 uppercase">{personal.fullName}</h1>
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-amber-200 shadow-[0_14px_40px_-20px_rgba(0,0,0,0.7)] bg-[#2a081f]">
            {personal.photoUrl ? (
              <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage className="w-full h-full text-amber-200" />
            )}
          </div>
          {education.occupation && (
            <p className="text-sm uppercase tracking-[0.24em] text-amber-200">{education.occupation}</p>
          )}
        </div>

        {/* Personal Details */}
        <section className="w-full max-w-4xl bg-[#4a1236]/70 border border-amber-200/40 rounded-3xl p-8 shadow-[0_22px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm space-y-6">
          <div className="flex justify-center">
            <span className="px-4 py-2 rounded-full bg-amber-200 text-[#3b0f2b] font-semibold text-xs tracking-[0.22em] uppercase">
              {t('section.personal')}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-10">
            <span className={labelClass}>{t('field.dob')}</span>
            <span className={valueClass}>{personal.dateOfBirth}</span>
            <span className={labelClass}>{t('field.tob')}</span>
            <span className={valueClass}>{personal.timeOfBirth}</span>
            <span className={labelClass}>{t('field.pob')}</span>
            <span className={valueClass}>{personal.placeOfBirth}</span>
            <span className={labelClass}>{t('field.manglik')}</span>
            <span className={valueClass}>{personal.manglik}</span>
            <span className={labelClass}>{t('field.height')}</span>
            <span className={valueClass}>{personal.height}</span>
            <span className={labelClass}>{t('field.bloodGroup')}</span>
            <span className={valueClass}>{personal.bloodGroup}</span>
            <span className={labelClass}>{t('field.religion')}</span>
            <span className={valueClass}>{personal.religion}</span>
          </div>
        </section>

        {/* Education / Career */}
        <section className="w-full max-w-4xl bg-[#4a1236]/70 border border-amber-200/40 rounded-3xl p-8 shadow-[0_22px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm space-y-4">
          <div className="flex justify-center">
            <span className="px-4 py-2 rounded-full bg-amber-200 text-[#3b0f2b] font-semibold text-xs tracking-[0.22em] uppercase">
              {t('section.education')}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-10">
            <span className={labelClass}>{t('field.education')}</span>
            <span className={valueClass}>{education.education}</span>
            <span className={labelClass}>{t('field.occupation')}</span>
            <span className={valueClass}>{education.occupation}</span>
            <span className={labelClass}>{t('field.company')}</span>
            <span className={valueClass}>{education.company}</span>
            <span className={labelClass}>{t('field.income')}</span>
            <span className={valueClass}>{education.income}</span>
          </div>
          {education.aboutMe && (
            <div className="pt-3">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200 font-semibold mb-2">{t('field.aboutMe')}</p>
              <p className="text-sm text-amber-50 leading-relaxed whitespace-pre-line">{education.aboutMe}</p>
            </div>
          )}
        </section>

        {/* Family */}
        <section className="w-full max-w-4xl bg-[#4a1236]/70 border border-amber-200/40 rounded-3xl p-8 shadow-[0_22px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm space-y-4">
          <div className="flex justify-center">
            <span className="px-4 py-2 rounded-full bg-amber-200 text-[#3b0f2b] font-semibold text-xs tracking-[0.22em] uppercase">
              {t('section.family')}
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex gap-2">
              <span className={labelClass}>{t('field.fatherName')}:</span>
              <span className={valueClass}>
                {family.fatherName}
                {family.fatherOccupation ? `, ${family.fatherOccupation}` : ''}
              </span>
            </div>
            <div className="flex gap-2">
              <span className={labelClass}>{t('field.motherName')}:</span>
              <span className={valueClass}>
                {family.motherName}
                {family.motherOccupation ? `, ${family.motherOccupation}` : ''}
              </span>
            </div>
            <div className="flex gap-2">
              <span className={labelClass}>{t('field.siblings')}:</span>
              <span className={valueClass}>{family.siblings}</span>
            </div>
            <div className="flex gap-2">
              <span className={labelClass}>{t('field.nativePlace')}:</span>
              <span className={valueClass}>{family.nativePlace}</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="w-full max-w-4xl bg-[#4a1236]/70 border border-amber-200/40 rounded-2xl p-5 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.6)] backdrop-blur-sm text-center space-y-2">
          <span className="px-4 py-1 rounded-full bg-amber-200 text-[#3b0f2b] font-semibold text-xs tracking-[0.22em] uppercase">
            {t('section.contact')}
          </span>
          <div className="text-sm text-amber-50 space-y-1 leading-relaxed mt-1">
            {contact.contactNumber && <div>{contact.contactNumber}</div>}
            {contact.email && <div>{contact.email}</div>}
            {contact.address && <div className="whitespace-pre-line">{contact.address}</div>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RoyalMandala;

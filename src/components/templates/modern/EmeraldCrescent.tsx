import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage } from '../shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const EmeraldCrescent: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  const label = 'text-sm font-semibold tracking-wide text-amber-100';
  const value = 'text-sm text-emerald-50';

  return (
    <div className="w-full h-full bg-[#0f2f28] text-emerald-50 font-serif relative overflow-hidden">
      {/* subtle patterned overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 0, transparent 34%), radial-gradient(circle at 80% 25%, rgba(255,255,255,0.12) 0, transparent 34%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.08) 0, transparent 40%)',
        }}
      />

      <div className="relative h-full w-full px-8 py-6 flex flex-col items-center gap-4">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <h1 className="text-3xl font-bold tracking-[0.16em] text-amber-100 uppercase">{personal.fullName}</h1>
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-amber-200 shadow-[0_16px_50px_-24px_rgba(0,0,0,0.7)] bg-[#0b221c]">
            {personal.photoUrl ? (
              <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage className="w-full h-full text-amber-200" />
            )}
          </div>
          {education.occupation && (
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/90">{education.occupation}</p>
          )}
        </div>

        {/* About */}
        {education.aboutMe && (
          <section className="w-full max-w-4xl bg-[#12382f]/70 border border-amber-200/30 rounded-2xl p-4 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm shrink-0">
            <div className="flex justify-center mb-2">
              <span className="px-3 py-1 rounded-full bg-amber-200 text-[#0f2f28] font-semibold text-xs tracking-[0.22em] uppercase">
                {t('field.aboutMe')}
              </span>
            </div>
            <p className="text-sm text-emerald-50 leading-relaxed whitespace-pre-line text-center">{education.aboutMe}</p>
          </section>
        )}

        {/* Personal */}
        <section className="w-full max-w-4xl bg-[#12382f]/70 border border-amber-200/30 rounded-2xl p-5 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm space-y-3 shrink-0">
          <div className="flex justify-center">
            <span className="px-3 py-1 rounded-full bg-amber-200 text-[#0f2f28] font-semibold text-xs tracking-[0.22em] uppercase">
              {t('section.personal')}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-y-2 gap-x-8">
            <span className={label}>{t('field.dob')}</span>
            <span className={value}>{personal.dateOfBirth}</span>
            <span className={label}>{t('field.tob')}</span>
            <span className={value}>{personal.timeOfBirth}</span>
            <span className={label}>{t('field.pob')}</span>
            <span className={value}>{personal.placeOfBirth}</span>
            <span className={label}>{t('field.height')}</span>
            <span className={value}>{personal.height}</span>
            <span className={label}>{t('field.weight')}</span>
            <span className={value}>{personal.weight}</span>
            <span className={label}>{t('field.bloodGroup')}</span>
            <span className={value}>{personal.bloodGroup}</span>
            <span className={label}>{t('field.manglik')}</span>
            <span className={value}>{personal.manglik}</span>
            <span className={label}>{t('field.religion')}</span>
            <span className={value}>{personal.religion}</span>
          </div>
        </section>

        {/* Education */}
        <section className="w-full max-w-4xl bg-[#12382f]/70 border border-amber-200/30 rounded-2xl p-5 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm space-y-3 shrink-0">
          <div className="flex justify-center">
            <span className="px-3 py-1 rounded-full bg-amber-200 text-[#0f2f28] font-semibold text-xs tracking-[0.22em] uppercase">
              {t('section.education')}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-y-2 gap-x-8">
            <span className={label}>{t('field.education')}</span>
            <span className={value}>{education.education}</span>
            <span className={label}>{t('field.occupation')}</span>
            <span className={value}>{education.occupation}</span>
            <span className={label}>{t('field.company')}</span>
            <span className={value}>{education.company}</span>
            <span className={label}>{t('field.income')}</span>
            <span className={value}>{education.income}</span>
          </div>
        </section>

        {/* Family */}
        <section className="w-full max-w-4xl bg-[#12382f]/70 border border-amber-200/30 rounded-2xl p-5 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm space-y-3 shrink-0">
          <div className="flex justify-center">
            <span className="px-3 py-1 rounded-full bg-amber-200 text-[#0f2f28] font-semibold text-xs tracking-[0.22em] uppercase">
              {t('section.family')}
            </span>
          </div>
          <div className="space-y-1.5 text-sm">
            <div className="flex gap-2">
              <span className={label}>{t('field.fatherName')}:</span>
              <span className={value}>
                {family.fatherName}
                {family.fatherOccupation ? `, ${family.fatherOccupation}` : ''}
              </span>
            </div>
            <div className="flex gap-2">
              <span className={label}>{t('field.motherName')}:</span>
              <span className={value}>
                {family.motherName}
                {family.motherOccupation ? `, ${family.motherOccupation}` : ''}
              </span>
            </div>
            <div className="flex gap-2">
              <span className={label}>{t('field.siblings')}:</span>
              <span className={value}>{family.siblings}</span>
            </div>
            <div className="flex gap-2">
              <span className={label}>{t('field.nativePlace')}:</span>
              <span className={value}>{family.nativePlace}</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="w-full max-w-4xl bg-[#12382f]/70 border border-amber-200/30 rounded-2xl p-4 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.6)] backdrop-blur-sm text-center space-y-1.5 shrink-0">
          <span className="px-3 py-1 rounded-full bg-amber-200 text-[#0f2f28] font-semibold text-xs tracking-[0.22em] uppercase">
            {t('section.contact')}
          </span>
          <div className="text-sm text-emerald-50 space-y-1 leading-relaxed">
            {contact.contactNumber && <div>{contact.contactNumber}</div>}
            {contact.email && <div>{contact.email}</div>}
            {contact.address && <div className="whitespace-pre-line">{contact.address}</div>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmeraldCrescent;

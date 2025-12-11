import React, { useMemo, useState } from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage } from './shared';
import { useLanguage } from '@/context/LanguageContext';

const BG_COUNT = 26;
const backgrounds = Array.from({ length: BG_COUNT }, (_, i) => `/template-backgrounds/bg-${String(i + 1).padStart(2, '0')}.jpeg`);

interface Props {
  profile: BiodataProfile;
}

export const BackgroundShowcase: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;
  const [bgIndex, setBgIndex] = useState(0);

  const currentBg = useMemo(() => backgrounds[bgIndex % BG_COUNT], [bgIndex]);

  const fieldRow = (label: string, value?: string | null) =>
    value ? (
      <div className="flex gap-2 text-sm text-slate-900 leading-relaxed">
        <span className="font-semibold">{label}:</span>
        <span className="text-slate-800">{value}</span>
      </div>
    ) : null;

  const nextBg = () => setBgIndex((v) => (v + 1) % BG_COUNT);
  const prevBg = () => setBgIndex((v) => (v - 1 + BG_COUNT) % BG_COUNT);

  return (
    <div className="relative w-full h-full flex items-center justify-center py-4 px-2" style={{ backgroundColor: '#f5f5f5' }}>
      <div
        className="relative w-[210mm] min-h-[297mm] max-w-full overflow-hidden"
        style={{ backgroundImage: `url(${currentBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Minimal controls, placed low on page to stay off the design */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 flex items-center gap-2 text-xs font-semibold text-slate-800">
          <button
            onClick={prevBg}
            className="px-3 py-1 rounded-full bg-white/90 border border-slate-200 shadow-sm hover:bg-white"
            aria-label="Previous background"
          >
            Prev
          </button>
          <span className="px-3 py-1 rounded-full bg-white/85 border border-slate-200 shadow-sm">
            {String(bgIndex + 1).padStart(2, '0')}/{BG_COUNT}
          </span>
          <button
            onClick={nextBg}
            className="px-3 py-1 rounded-full bg-white/90 border border-slate-200 shadow-sm hover:bg-white"
            aria-label="Next background"
          >
            Next
          </button>
        </div>

        <div className="relative z-10 px-8 pt-10 pb-12 flex flex-col gap-8">
          <header className="flex items-start gap-4">
            <div className="flex-1 space-y-1">
              <h1 className="text-3xl font-bold text-slate-900 tracking-wide">{personal.fullName}</h1>
              {education.occupation && (
                <p className="text-sm uppercase tracking-[0.16em] text-slate-700">{education.occupation}</p>
              )}
            </div>
            <div className="w-28 h-36 rounded overflow-hidden border border-slate-200 bg-white">
              {personal.photoUrl ? (
                <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <PlaceholderImage className="w-full h-full text-slate-300" />
              )}
            </div>
          </header>

          <div className="grid grid-cols-[0.52fr_0.48fr] gap-6">
            <section className="p-0 space-y-2">
              <h2 className="text-base font-semibold text-slate-900 mb-2">{t('section.personal')}</h2>
              {fieldRow(t('field.dob'), personal.dateOfBirth)}
              {fieldRow(t('field.tob'), personal.timeOfBirth)}
              {fieldRow(t('field.pob'), personal.placeOfBirth)}
              {fieldRow(t('field.height'), personal.height)}
              {fieldRow(t('field.weight'), personal.weight)}
              {fieldRow(t('field.complexion'), personal.complexion)}
              {fieldRow(t('field.maritalStatus'), personal.maritalStatus)}
              {fieldRow(t('field.religion'), personal.religion)}
              {fieldRow(t('field.caste'), personal.caste)}
              {fieldRow(t('field.manglik'), personal.manglik)}
            </section>

            <section className="p-0 space-y-3">
              <h2 className="text-base font-semibold text-slate-900 mb-1">{t('section.education')}</h2>
              {fieldRow(t('field.education'), education.education)}
              {fieldRow(t('field.occupation'), education.occupation)}
              {fieldRow(t('field.company'), education.company)}
              {fieldRow(t('field.income'), education.income)}
              {education.aboutMe && (
                <div className="pt-1">
                  <p className="text-sm font-semibold text-slate-900 mb-1">{t('field.aboutMe') || 'About Me'}</p>
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{education.aboutMe}</p>
                </div>
              )}
            </section>
          </div>

          <section className="p-0 space-y-2">
            <h2 className="text-base font-semibold text-slate-900 mb-2">{t('section.family')}</h2>
            {fieldRow(
              t('field.fatherName'),
              family.fatherName && family.fatherOccupation
                ? `${family.fatherName} (${family.fatherOccupation})`
                : family.fatherName || family.fatherOccupation
            )}
            {fieldRow(
              t('field.motherName'),
              family.motherName && family.motherOccupation
                ? `${family.motherName} (${family.motherOccupation})`
                : family.motherName || family.motherOccupation
            )}
            {fieldRow(t('field.familyType'), family.familyType)}
            {fieldRow(t('field.values'), family.familyValues)}
            {fieldRow(t('field.siblings'), family.siblings)}
            {fieldRow(t('field.nativePlace'), family.nativePlace)}
          </section>

          <section className="p-0 space-y-2">
            <h2 className="text-base font-semibold text-slate-900 mb-2">{t('section.contact')}</h2>
            {fieldRow(t('field.contactNumber') || 'Contact', contact.contactNumber)}
            {fieldRow(t('field.email') || 'Email', contact.email)}
            {contact.address && (
              <div className="text-sm text-slate-700 whitespace-pre-line">
                <span className="font-semibold text-slate-900">{t('field.address') || 'Address'}:</span> {contact.address}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default BackgroundShowcase;

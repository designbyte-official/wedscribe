import React, { useMemo } from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage } from './shared';
import { useLanguage } from '@/context/LanguageContext';
import { useProfileStore } from '@/store/profileStore';

const BG_COUNT = 26;
const backgrounds = Array.from({ length: BG_COUNT }, (_, i) => `/template-backgrounds/bg-${String(i + 1).padStart(2, '0')}.jpeg`);

interface Props {
  profile: BiodataProfile;
}

export const BackgroundShowcase: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;
  const bgIndex = useProfileStore((s) => s.backgroundIndex);

  const currentBg = useMemo(() => backgrounds[bgIndex % BG_COUNT], [bgIndex]);

  const fieldRow = (label: string, value?: string | null) =>
    value ? (
      <div className="flex gap-2 text-[13px] leading-relaxed text-slate-900">
        <span className="font-semibold min-w-[110px]">{label}:</span>
        <span className="text-slate-800 flex-1">{value}</span>
      </div>
    ) : null;

  return (
    <div className="relative w-full h-full flex items-center justify-center py-2 px-2" style={{ backgroundColor: '#f5f5f5' }}>
      <div
        className="relative w-[210mm] h-[297mm] max-w-full overflow-hidden"
        style={{ backgroundImage: `url(${currentBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="relative px-14 pt-12 pb-12 h-full flex flex-col gap-6">
          {/* Header with better spacing */}
          <header className="flex items-start gap-6 pb-4 border-b border-slate-300/30">
            <div className="w-32 h-40 rounded-lg overflow-hidden border-2 border-slate-200 bg-white shadow-sm shrink-0">
              {personal.photoUrl ? (
                <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <PlaceholderImage className="w-full h-full text-slate-300" />
              )}
            </div>
            <div className="flex-1 space-y-1.5 pt-1">
              <h1 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">{personal.fullName}</h1>
              {education.occupation && (
                <p className="text-base uppercase tracking-[0.15em] text-slate-700 font-medium">{education.occupation}</p>
              )}
            </div>
          </header>

          {/* Two Column Grid with better balance */}
          <div className="grid grid-cols-2 gap-8 flex-1">
            {/* Left Column */}
            <div className="space-y-5">
              <section className="space-y-2.5">
                <h2 className="text-lg font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">{t('section.personal')}</h2>
                <div className="space-y-2">
                  {fieldRow(t('field.dob'), personal.dateOfBirth)}
                  {fieldRow(t('field.tob'), personal.timeOfBirth)}
                  {fieldRow(t('field.pob'), personal.placeOfBirth)}
                  {fieldRow(t('field.height'), personal.height)}
                  {fieldRow(t('field.weight'), personal.weight)}
                  {fieldRow(t('field.bloodGroup'), personal.bloodGroup)}
                  {fieldRow(t('field.complexion'), personal.complexion)}
                  {fieldRow(t('field.maritalStatus'), personal.maritalStatus)}
                  {fieldRow(t('field.religion'), personal.religion)}
                  {fieldRow(t('field.caste'), personal.caste)}
                  {fieldRow(t('field.subCaste'), personal.subCaste)}
                  {fieldRow(t('field.manglik'), personal.manglik)}
                </div>
              </section>

              <section className="space-y-2.5">
                <h2 className="text-lg font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">{t('section.family')}</h2>
                <div className="space-y-2">
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
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="space-y-5">
              <section className="space-y-2.5">
                <h2 className="text-lg font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">{t('section.education')}</h2>
                <div className="space-y-2">
                  {fieldRow(t('field.education'), education.education)}
                  {fieldRow(t('field.occupation'), education.occupation)}
                  {fieldRow(t('field.company'), education.company)}
                  {fieldRow(t('field.income'), education.income)}
                </div>
              </section>

              {education.aboutMe && (
                <section className="space-y-2.5">
                  <h2 className="text-lg font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">{t('field.aboutMe')}</h2>
                  <p className="text-[13px] text-slate-800 leading-relaxed whitespace-pre-line">{education.aboutMe}</p>
                </section>
              )}

              <section className="space-y-2.5">
                <h2 className="text-lg font-bold text-slate-900 mb-2 border-b border-slate-200 pb-1">{t('section.contact')}</h2>
                <div className="space-y-2">
                  {fieldRow(t('field.contactNumber') || 'Contact Number', contact.contactNumber)}
                  {fieldRow(t('field.email') || 'Email', contact.email)}
                  {contact.address && (
                    <div className="flex gap-2 text-[13px] leading-relaxed">
                      <span className="font-semibold text-slate-900 min-w-[110px]">{t('field.address') || 'Address'}:</span>
                      <span className="text-slate-800 flex-1 whitespace-pre-line">{contact.address}</span>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundShowcase;

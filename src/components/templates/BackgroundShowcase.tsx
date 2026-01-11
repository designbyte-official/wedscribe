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
  const { customStyles } = useProfileStore();
  const bgIndex = useProfileStore((s) => s.backgroundIndex);

  const {
    padding = {
      top: '80px',
      bottom: '48px',
      left: '64px',
      right: '64px'
    }
  } = customStyles;

  const currentBg = useMemo(() => backgrounds[bgIndex % BG_COUNT], [bgIndex]);

  const fieldRow = (label: string, value?: string | null) =>
    value ? (
      <div className="flex gap-2 text-[13px] leading-relaxed" style={{ color: '#0f172a' }}>
        <span className="font-semibold min-w-[110px]">{label}:</span>
        <span className="flex-1" style={{ color: '#1e293b' }}>{value}</span>
      </div>
    ) : null;

  return (
    <div className="relative w-full h-full flex items-center justify-center py-2 px-2" style={{ backgroundColor: '#f5f5f5' }}>
      <div
        className="relative h-full flex flex-col"
        style={{
          paddingTop: padding.top,
          paddingBottom: padding.bottom,
          paddingLeft: padding.left,
          paddingRight: padding.right
        }}
      >
        {/* Header with better spacing */}
        <header className="flex items-start pb-4 mb-6" style={{ borderBottom: '1px solid rgba(203, 213, 225, 0.3)' }}>
          <div
            className="w-32 h-40 rounded-sm overflow-hidden shrink-0 mr-6"
            style={{
              border: '2px solid #e2e8f0',
              backgroundColor: '#ffffff',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            }}
          >
            {personal.photoUrl ? (
              <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage className="w-full h-full text-[#cbd5e1]" />
            )}
          </div>
          <div className="flex-1 space-y-1.5 pt-1">
            <h1 className="text-4xl font-bold tracking-tight leading-tight" style={{ color: '#0f172a' }}>{personal.fullName}</h1>
            {education.occupation && (
              <p className="text-base uppercase tracking-[0.15em] font-medium" style={{ color: '#334155' }}>{education.occupation}</p>
            )}
          </div>
        </header>

        {/* Two Column Grid with better balance */}
        <div className="flex flex-row flex-1">
          {/* Left Column */}
          <div className="w-1/2 pr-4 flex flex-col">
            <div className="mb-5">
              <section className="space-y-2.5">
                <h2 className="text-lg font-bold mb-2 pb-1" style={{ color: '#0f172a', borderBottom: '1px solid #e2e8f0' }}>{t('section.personal')}</h2>
                <div className="space-y-1">
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
            </div>

            <section className="space-y-2.5">
              <h2 className="text-lg font-bold mb-2 pb-1" style={{ color: '#0f172a', borderBottom: '1px solid #e2e8f0' }}>{t('section.family')}</h2>
              <div className="space-y-1">
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
          <div className="w-1/2 pl-4 flex flex-col">
            <div className="mb-5">
              <section className="space-y-2.5">
                <h2 className="text-lg font-bold mb-2 pb-1" style={{ color: '#0f172a', borderBottom: '1px solid #e2e8f0' }}>{t('section.education')}</h2>
                <div className="space-y-1">
                  {fieldRow(t('field.education'), education.education)}
                  {fieldRow(t('field.occupation'), education.occupation)}
                  {fieldRow(t('field.company'), education.company)}
                  {fieldRow(t('field.income'), education.income)}
                </div>
              </section>
            </div>

            {education.aboutMe && (
              <div className="mb-5">
                <section className="space-y-2.5">
                  <h2 className="text-lg font-bold mb-2 pb-1" style={{ color: '#0f172a', borderBottom: '1px solid #e2e8f0' }}>{t('field.aboutMe')}</h2>
                  <p className="text-[13px] leading-relaxed whitespace-pre-line" style={{ color: '#1e293b' }}>{education.aboutMe}</p>
                </section>
              </div>
            )}

            <section className="space-y-2.5">
              <h2 className="text-lg font-bold mb-2 pb-1" style={{ color: '#0f172a', borderBottom: '1px solid #e2e8f0' }}>{t('section.contact')}</h2>
              <div className="space-y-1">
                {fieldRow(t('field.contactNumber') || 'Contact Number', contact.contactNumber)}
                {fieldRow(t('field.email') || 'Email', contact.email)}
                {contact.address && (
                  <div className="flex text-[13px] leading-relaxed">
                    <span className="font-semibold min-w-[110px] mr-2" style={{ color: '#0f172a' }}>{t('field.address') || 'Address'}:</span>
                    <span className="flex-1 whitespace-pre-line" style={{ color: '#1e293b' }}>{contact.address}</span>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>

        {/* Low Opacity Watermark Logo */}
        <div className="absolute bottom-16 w-full flex justify-center opacity-80 pointer-events-none rounded-full">
          <img src="/biodata-generator-logo.png" alt="BioData Generator" className="h-10 object-contain rounded-full" />
        </div>
      </div>
    </div>
        </div >
    );
};

export default BackgroundShowcase;

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

  const label = 'text-sm font-semibold tracking-wide';
  const labelStyle = { color: '#fef3c7' }; // amber-100
  const value = 'text-sm';
  const valueStyle = { color: '#ecfdf5' }; // emerald-50

  return (
    <div className="w-full h-full bg-[#0f2f28] font-serif relative overflow-hidden" style={{ color: '#ecfdf5' }}>
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
          <h1 className="text-3xl font-bold tracking-[0.16em] uppercase" style={{ color: '#fef3c7' }}>{personal.fullName}</h1>
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 shadow-[0_16px_50px_-24px_rgba(0,0,0,0.7)] bg-[#0b221c]" style={{ borderColor: '#fde68a' }}>
            {personal.photoUrl ? (
              <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage className="w-full h-full text-[#fde68a]" />
            )}
          </div>
          {education.occupation && (
            <p className="text-xs uppercase tracking-[0.22em]" style={{ color: 'rgba(209, 250, 229, 0.9)' }}>{education.occupation}</p>
          )}
        </div>

        {/* About */}
        {education.aboutMe && (
          <section className="w-full max-w-4xl bg-[#12382f]/70 border rounded-2xl p-4 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm shrink-0" style={{ borderColor: 'rgba(253, 230, 138, 0.3)' }}>
            <div className="flex justify-center mb-2">
              <span className="px-3 py-1 rounded-full text-[#0f2f28] font-semibold text-xs tracking-[0.22em] uppercase" style={{ backgroundColor: '#fde68a' }}>
                {t('field.aboutMe')}
              </span>
            </div>
            <p className="text-sm leading-relaxed whitespace-pre-line text-center" style={{ color: '#ecfdf5' }}>{education.aboutMe}</p>
          </section>
        )}

        {/* Personal */}
        <section className="w-full max-w-4xl bg-[#12382f]/70 border rounded-2xl p-5 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm space-y-3 shrink-0" style={{ borderColor: 'rgba(253, 230, 138, 0.3)' }}>
          <div className="flex justify-center">
            <span className="px-3 py-1 rounded-full text-[#0f2f28] font-semibold text-xs tracking-[0.22em] uppercase" style={{ backgroundColor: '#fde68a' }}>
              {t('section.personal')}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-y-2 gap-x-8">
            <span className={label} style={labelStyle}>{t('field.dob')}</span>
            <span className={value} style={valueStyle}>{personal.dateOfBirth}</span>
            <span className={label} style={labelStyle}>{t('field.tob')}</span>
            <span className={value} style={valueStyle}>{personal.timeOfBirth}</span>
            <span className={label} style={labelStyle}>{t('field.pob')}</span>
            <span className={value} style={valueStyle}>{personal.placeOfBirth}</span>
            <span className={label} style={labelStyle}>{t('field.height')}</span>
            <span className={value} style={valueStyle}>{personal.height}</span>
            <span className={label} style={labelStyle}>{t('field.weight')}</span>
            <span className={value} style={valueStyle}>{personal.weight}</span>
            <span className={label} style={labelStyle}>{t('field.bloodGroup')}</span>
            <span className={value} style={valueStyle}>{personal.bloodGroup}</span>
            <span className={label} style={labelStyle}>{t('field.manglik')}</span>
            <span className={value} style={valueStyle}>{personal.manglik}</span>
            <span className={label} style={labelStyle}>{t('field.religion')}</span>
            <span className={value} style={valueStyle}>{personal.religion}</span>
          </div>
        </section>

        {/* Education */}
        <section className="w-full max-w-4xl bg-[#12382f]/70 border rounded-2xl p-5 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm space-y-3 shrink-0" style={{ borderColor: 'rgba(253, 230, 138, 0.3)' }}>
          <div className="flex justify-center">
            <span className="px-3 py-1 rounded-full text-[#0f2f28] font-semibold text-xs tracking-[0.22em] uppercase" style={{ backgroundColor: '#fde68a' }}>
              {t('section.education')}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-y-2 gap-x-8">
            <span className={label} style={labelStyle}>{t('field.education')}</span>
            <span className={value} style={valueStyle}>{education.education}</span>
            <span className={label} style={labelStyle}>{t('field.occupation')}</span>
            <span className={value} style={valueStyle}>{education.occupation}</span>
            <span className={label} style={labelStyle}>{t('field.company')}</span>
            <span className={value} style={valueStyle}>{education.company}</span>
            <span className={label} style={labelStyle}>{t('field.income')}</span>
            <span className={value} style={valueStyle}>{education.income}</span>
          </div>
        </section>

        {/* Family */}
        <section className="w-full max-w-4xl bg-[#12382f]/70 border rounded-2xl p-5 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm space-y-3 shrink-0" style={{ borderColor: 'rgba(253, 230, 138, 0.3)' }}>
          <div className="flex justify-center">
            <span className="px-3 py-1 rounded-full text-[#0f2f28] font-semibold text-xs tracking-[0.22em] uppercase" style={{ backgroundColor: '#fde68a' }}>
              {t('section.family')}
            </span>
          </div>
          <div className="space-y-1.5 text-sm">
            <div className="flex gap-2">
              <span className={label} style={labelStyle}>{t('field.fatherName')}:</span>
              <span className={value} style={valueStyle}>
                {family.fatherName}
                {family.fatherOccupation ? `, ${family.fatherOccupation}` : ''}
              </span>
            </div>
            <div className="flex gap-2">
              <span className={label} style={labelStyle}>{t('field.motherName')}:</span>
              <span className={value} style={valueStyle}>
                {family.motherName}
                {family.motherOccupation ? `, ${family.motherOccupation}` : ''}
              </span>
            </div>
            <div className="flex gap-2">
              <span className={label} style={labelStyle}>{t('field.siblings')}:</span>
              <span className={value} style={valueStyle}>{family.siblings}</span>
            </div>
            <div className="flex gap-2">
              <span className={label} style={labelStyle}>{t('field.nativePlace')}:</span>
              <span className={value} style={valueStyle}>{family.nativePlace}</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="w-full max-w-4xl bg-[#12382f]/70 border rounded-2xl p-4 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.6)] backdrop-blur-sm text-center space-y-1.5 shrink-0" style={{ borderColor: 'rgba(253, 230, 138, 0.3)' }}>
          <span className="px-3 py-1 rounded-full text-[#0f2f28] font-semibold text-xs tracking-[0.22em] uppercase" style={{ backgroundColor: '#fde68a' }}>
            {t('section.contact')}
          </span>
          <div className="text-sm space-y-1 leading-relaxed" style={{ color: '#ecfdf5' }}>
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

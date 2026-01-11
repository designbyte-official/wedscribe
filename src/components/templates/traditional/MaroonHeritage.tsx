import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage } from '../shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const MaroonHeritage: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  const labelStyle = { color: '#fef3c7' }; // amber-100
  const valueStyle = { color: '#fffbeb' }; // amber-50
  const labelClass = 'font-semibold text-sm tracking-wide';
  const valueClass = 'text-sm leading-relaxed';

  return (
    <div className="w-full h-full bg-[#3d0b2f] text-amber-50 font-serif relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 0, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.12) 0, transparent 38%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.08) 0, transparent 36%)',
        }}
      />
      <div className="relative h-full w-full px-10 py-12 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <p className="text-xl font-extrabold uppercase mb-4" style={{ color: '#fef3c7', letterSpacing: '0.1em' }}>{personal.fullName}</p>
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-200 shadow-xl bg-[#2a071f]">
            {personal.photoUrl ? (
              <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage className="w-full h-full text-amber-200" />
            )}
          </div>
        </div>

        <section className="w-full max-w-4xl bg-[#4a103a]/60 border border-amber-200/30 rounded-3xl p-8 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6)] space-y-6 backdrop-blur-sm">
          <div className="w-full text-center">
            <span className="px-4 py-2 rounded-full bg-amber-200 text-[#3d0b2f] font-semibold text-xs tracking-[0.2em] uppercase">
              {t('field.aboutMe') || 'About'}
            </span>
          </div>
          <p className="text-sm text-amber-50 leading-relaxed text-center max-w-3xl mx-auto whitespace-pre-line">
            {education.aboutMe}
          </p>
        </section>

        <section className="w-full max-w-4xl bg-[#4a103a]/60 border border-amber-200/30 rounded-3xl p-8 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6)] space-y-6 backdrop-blur-sm">
          <div className="w-full text-center">
            <span className="px-4 py-2 rounded-full bg-amber-200 text-[#3d0b2f] font-semibold text-xs tracking-[0.2em] uppercase">
              {t('section.personal')}
            </span>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="w-1/2 flex justify-between pr-5 mb-3"><div className={labelClass} style={labelStyle}>{t('field.dob')}</div><div className={valueClass} style={valueStyle}>{personal.dateOfBirth}</div></div>
            <div className="w-1/2 flex justify-between pl-5 mb-3"><div className={labelClass} style={labelStyle}>{t('field.tob')}</div><div className={valueClass} style={valueStyle}>{personal.timeOfBirth}</div></div>
            <div className="w-1/2 flex justify-between pr-5 mb-3"><div className={labelClass} style={labelStyle}>{t('field.pob')}</div><div className={valueClass} style={valueStyle}>{personal.placeOfBirth}</div></div>
            <div className="w-1/2 flex justify-between pl-5 mb-3"><div className={labelClass} style={labelStyle}>{t('field.manglik')}</div><div className={valueClass} style={valueStyle}>{personal.manglik}</div></div>
            <div className="w-1/2 flex justify-between pr-5 mb-3"><div className={labelClass} style={labelStyle}>{t('field.height')}</div><div className={valueClass} style={valueStyle}>{personal.height}</div></div>
            <div className="w-1/2 flex justify-between pl-5 mb-3"><div className={labelClass} style={labelStyle}>{t('field.education')}</div><div className={valueClass} style={valueStyle}>{education.education}</div></div>
            <div className="w-1/2 flex justify-between pr-5 mb-3"><div className={labelClass} style={labelStyle}>{t('field.occupation')}</div><div className={valueClass} style={valueStyle}>{education.occupation}</div></div>
            <div className="w-1/2 flex justify-between pl-5 mb-3"><div className={labelClass} style={labelStyle}>{t('field.company')}</div><div className={valueClass} style={valueStyle}>{education.company}</div></div>
            <div className="w-1/2 flex justify-between pr-5 mb-3"><div className={labelClass} style={labelStyle}>{t('field.income')}</div><div className={valueClass} style={valueStyle}>{education.income}</div></div>
            <div className="w-1/2 flex justify-between pl-5 mb-3"><div className={labelClass} style={labelStyle}>{t('field.religion')}</div><div className={valueClass} style={valueStyle}>{personal.religion}</div></div>
            <div className="w-1/2 flex justify-between pr-5 mb-3"><div className={labelClass} style={labelStyle}>{t('field.caste')}</div><div className={valueClass} style={valueStyle}>{personal.caste}</div></div>
            <div className="w-1/2 flex justify-between pl-5 mb-3"><div className={labelClass} style={labelStyle}>{t('field.subCaste')}</div><div className={valueClass} style={valueStyle}>{personal.subCaste}</div></div>
          </div>
        </section>

        <section className="w-full max-w-4xl bg-[#4a103a]/60 border border-amber-200/30 rounded-3xl p-8 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6)] space-y-6 backdrop-blur-sm">
          <div className="w-full text-center">
            <span className="px-4 py-2 rounded-full bg-amber-200 text-[#3d0b2f] font-semibold text-xs tracking-[0.2em] uppercase">
              {t('section.family')}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex gap-3">
              <span className={labelClass}>{t('field.fatherName')}:</span>
              <span className={valueClass}>
                {family.fatherName}
                {family.fatherOccupation ? `, ${family.fatherOccupation}` : ''}
              </span>
            </div>
            <div className="flex gap-3">
              <span className={labelClass}>{t('field.motherName')}:</span>
              <span className={valueClass}>
                {family.motherName}
                {family.motherOccupation ? `, ${family.motherOccupation}` : ''}
              </span>
            </div>
            <div className="flex gap-3">
              <span className={labelClass}>{t('field.siblings')}:</span>
              <span className={valueClass}>{family.siblings}</span>
            </div>
            <div className="flex gap-3">
              <span className={labelClass}>{t('field.nativePlace')}:</span>
              <span className={valueClass}>{family.nativePlace}</span>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl bg-[#4a103a]/60 border border-amber-200/30 rounded-3xl p-6 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6)] backdrop-blur-sm text-center space-y-2">
          <span className="px-4 py-1 rounded-full bg-amber-200 text-[#3d0b2f] font-semibold text-xs tracking-[0.2em] uppercase">
            {t('section.contact')}
          </span>
          <div className="text-sm text-amber-50 space-y-1 leading-relaxed mt-2">
            {contact.contactNumber && <div>{contact.contactNumber}</div>}
            {contact.email && <div>{contact.email}</div>}
            {contact.address && <div className="whitespace-pre-line">{contact.address}</div>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MaroonHeritage;

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

  const labelClass = 'font-semibold tracking-wide';
  const labelStyle = { color: '#fde68a' }; // amber-200
  const valueClass = '';
  const valueStyle = { color: '#fffbeb' }; // amber-50

  return (
    <div className="w-full h-full bg-[#3b0f2b] font-serif relative overflow-hidden" style={{ color: '#fffbeb' }}>
      {/* Corner ornaments */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-6 w-24 h-24 rounded-full border border-amber-300/40" style={{ borderColor: 'rgba(252, 211, 77, 0.4)' }} />
        <div className="absolute right-6 top-6 w-24 h-24 rounded-full border border-amber-300/40" style={{ borderColor: 'rgba(252, 211, 77, 0.4)' }} />
        <div className="absolute left-6 bottom-6 w-24 h-24 rounded-full border border-amber-300/40" style={{ borderColor: 'rgba(252, 211, 77, 0.4)' }} />
        <div className="absolute right-6 bottom-6 w-24 h-24 rounded-full border border-amber-300/40" style={{ borderColor: 'rgba(252, 211, 77, 0.4)' }} />
      </div>

      <div className="relative h-full w-full px-10 py-10 flex flex-col items-center gap-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-bold tracking-[0.18em] uppercase" style={{ color: '#fef3c7' }}>{personal.fullName}</h1>
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 shadow-[0_14px_40px_-20px_rgba(0,0,0,0.7)] bg-[#2a081f]" style={{ borderColor: '#fde68a' }}>
            {personal.photoUrl ? (
              <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage className="w-full h-full text-[#fde68a]" />
            )}
          </div>
          {education.occupation && (
            <p className="text-sm uppercase tracking-[0.24em]" style={{ color: '#fde68a' }}>{education.occupation}</p>
          )}
        </div>

        {/* Personal Details */}
        <section className="w-full max-w-4xl bg-[#4a1236]/70 border rounded-3xl p-8 shadow-[0_22px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm space-y-6" style={{ borderColor: 'rgba(253, 230, 138, 0.4)' }}>
          <div className="flex justify-center">
            <span className="px-4 py-2 rounded-full text-[#3b0f2b] font-semibold text-xs tracking-[0.22em] uppercase" style={{ backgroundColor: '#fde68a' }}>
              {t('section.personal')}
            </span>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="w-1/2 flex justify-between pr-5 mb-3">
              <span className={labelClass} style={labelStyle}>{t('field.dob')}</span>
              <span className={valueClass} style={valueStyle}>{personal.dateOfBirth}</span>
            </div>
            <div className="w-1/2 flex justify-between pl-5 mb-3">
              <span className={labelClass} style={labelStyle}>{t('field.tob')}</span>
              <span className={valueClass} style={valueStyle}>{personal.timeOfBirth}</span>
            </div>
            <div className="w-1/2 flex justify-between pr-5 mb-3">
              <span className={labelClass} style={labelStyle}>{t('field.pob')}</span>
              <span className={valueClass} style={valueStyle}>{personal.placeOfBirth}</span>
            </div>
            <div className="w-1/2 flex justify-between pl-5 mb-3">
              <span className={labelClass} style={labelStyle}>{t('field.manglik')}</span>
              <span className={valueClass} style={valueStyle}>{personal.manglik}</span>
            </div>
            <div className="w-1/2 flex justify-between pr-5 mb-3">
              <span className={labelClass} style={labelStyle}>{t('field.height')}</span>
              <span className={valueClass} style={valueStyle}>{personal.height}</span>
            </div>
            <div className="w-1/2 flex justify-between pl-5 mb-3">
              <span className={labelClass} style={labelStyle}>{t('field.bloodGroup')}</span>
              <span className={valueClass} style={valueStyle}>{personal.bloodGroup}</span>
            </div>
            <div className="col-span-2 w-full flex justify-center mt-2">
              <span className={labelClass} style={labelStyle}>{t('field.religion')}: </span>
              <span className={valueClass} style={{ ...valueStyle, marginLeft: '8px' }}>{personal.religion}</span>
            </div>
          </div>
        </section>

        {/* Education / Career */}
        <section className="w-full max-w-4xl bg-[#4a1236]/70 border rounded-3xl p-8 shadow-[0_22px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm space-y-4" style={{ borderColor: 'rgba(253, 230, 138, 0.4)' }}>
          <div className="flex justify-center">
            <span className="px-4 py-2 rounded-full text-[#3b0f2b] font-semibold text-xs tracking-[0.22em] uppercase" style={{ backgroundColor: '#fde68a' }}>
              {t('section.education')}
            </span>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="w-1/2 flex justify-between pr-5 mb-3">
              <span className={labelClass} style={labelStyle}>{t('field.education')}</span>
              <span className={valueClass} style={valueStyle}>{education.education}</span>
            </div>
            <div className="w-1/2 flex justify-between pl-5 mb-3">
              <span className={labelClass} style={labelStyle}>{t('field.occupation')}</span>
              <span className={valueClass} style={valueStyle}>{education.occupation}</span>
            </div>
            <div className="w-1/2 flex justify-between pr-5 mb-3">
              <span className={labelClass} style={labelStyle}>{t('field.company')}</span>
              <span className={valueClass} style={valueStyle}>{education.company}</span>
            </div>
            <div className="w-1/2 flex justify-between pl-5 mb-3">
              <span className={labelClass} style={labelStyle}>{t('field.income')}</span>
              <span className={valueClass} style={valueStyle}>{education.income}</span>
            </div>
          </div>
          {education.aboutMe && (
            <div className="pt-3">
              <p className="text-xs uppercase tracking-[0.18em] font-semibold mb-2" style={{ color: '#fde68a' }}>{t('field.aboutMe')}</p>
              <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#fffbeb' }}>{education.aboutMe}</p>
            </div>
          )}
        </section>

        {/* Family */}
        <section className="w-full max-w-4xl bg-[#4a1236]/70 border rounded-3xl p-8 shadow-[0_22px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm space-y-4" style={{ borderColor: 'rgba(253, 230, 138, 0.4)' }}>
          <div className="flex justify-center">
            <span className="px-4 py-2 rounded-full text-[#3b0f2b] font-semibold text-xs tracking-[0.22em] uppercase" style={{ backgroundColor: '#fde68a' }}>
              {t('section.family')}
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex gap-2">
              <span className={labelClass} style={labelStyle}>{t('field.fatherName')}:</span>
              <span className={valueClass} style={valueStyle}>
                {family.fatherName}
                {family.fatherOccupation ? `, ${family.fatherOccupation}` : ''}
              </span>
            </div>
            <div className="flex gap-2">
              <span className={labelClass} style={labelStyle}>{t('field.motherName')}:</span>
              <span className={valueClass} style={valueStyle}>
                {family.motherName}
                {family.motherOccupation ? `, ${family.motherOccupation}` : ''}
              </span>
            </div>
            <div className="flex gap-2">
              <span className={labelClass} style={labelStyle}>{t('field.siblings')}:</span>
              <span className={valueClass} style={valueStyle}>{family.siblings}</span>
            </div>
            <div className="flex gap-2">
              <span className={labelClass} style={labelStyle}>{t('field.nativePlace')}:</span>
              <span className={valueClass} style={valueStyle}>{family.nativePlace}</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="w-full max-w-4xl bg-[#4a1236]/70 border rounded-2xl p-5 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.6)] backdrop-blur-sm text-center space-y-2" style={{ borderColor: 'rgba(253, 230, 138, 0.4)' }}>
          <span className="px-4 py-1 rounded-full text-[#3b0f2b] font-semibold text-xs tracking-[0.22em] uppercase" style={{ backgroundColor: '#fde68a' }}>
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

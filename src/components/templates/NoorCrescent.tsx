import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage, DetailItem, ContactRow, SectionTitle } from './shared';
import { Moon, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const NoorCrescent: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-emerald-50 font-cormorant relative overflow-hidden">
      <div className="absolute inset-4 rounded-[30px] border border-emerald-400/30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-28 h-28 rounded-full bg-emerald-400/30 blur-3xl" />
      <div className="absolute bottom-14 left-16 w-40 h-40 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10 grid grid-cols-[0.45fr_0.55fr] h-full">
        {/* Left */}
        <div className="border-r border-emerald-400/20 p-10 flex flex-col items-center gap-8">
          <div className="w-full flex items-center justify-between text-sm uppercase tracking-[0.25em] font-semibold text-emerald-200">
            <span>{t('common.marriageBiodata')}</span>
            <Moon size={20} className="text-emerald-100" />
          </div>

          <div className="w-48 h-56 rounded-2xl overflow-hidden border-2 border-emerald-300/30 shadow-[0_12px_45px_-10px_rgba(0,0,0,0.4)]">
            {personal.photoUrl ? (
              <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage className="w-full h-full bg-emerald-800 text-emerald-200" />
            )}
          </div>

          <div className="space-y-3 text-center">
            <h1 className="text-4xl font-semibold tracking-wide">{personal.fullName}</h1>
            <p className="text-emerald-200/80 uppercase tracking-[0.2em] text-xs">{education.occupation}</p>
            <p className="text-emerald-200/70 text-sm">{education.company}</p>
          </div>

          <div className="w-full rounded-2xl border border-emerald-400/20 bg-emerald-900/40 p-6 space-y-3">
            <h3 className="text-emerald-100 uppercase tracking-[0.2em] text-xs font-semibold mb-2">{t('section.contact')}</h3>
            <ContactRow icon={Phone} value={contact.contactNumber} />
            <ContactRow icon={Mail} value={contact.email} />
            <ContactRow icon={MapPin} value={contact.address} />
          </div>
        </div>

        {/* Right */}
        <div className="p-10 flex flex-col gap-8">
          <div className="bg-emerald-900/40 border border-emerald-400/20 rounded-3xl p-8 shadow-lg space-y-8">
            <SectionTitle title={t('section.personal')} lineClass="bg-emerald-400/40" className="items-center" />
            <div className="grid grid-cols-2 gap-6 text-emerald-50/90">
              <DetailItem label={t('field.dob')} value={`${personal.dateOfBirth}`} labelClass="text-emerald-200" />
              <DetailItem label={t('field.tob')} value={personal.timeOfBirth} labelClass="text-emerald-200" />
              <DetailItem label={t('field.pob')} value={personal.placeOfBirth} labelClass="text-emerald-200" />
              <DetailItem label={t('field.height')} value={personal.height} labelClass="text-emerald-200" />
              <DetailItem label={t('field.weight')} value={personal.weight} labelClass="text-emerald-200" />
              <DetailItem label={t('field.bloodGroup')} value={personal.bloodGroup} labelClass="text-emerald-200" />
              <DetailItem label={t('field.maritalStatus')} value={personal.maritalStatus} labelClass="text-emerald-200" />
              <DetailItem label={t('field.religion')} value={personal.religion} labelClass="text-emerald-200" />
              <DetailItem label={t('field.caste')} value={`${personal.caste}${personal.subCaste ? `, ${personal.subCaste}` : ''}`} labelClass="text-emerald-200" />
              <DetailItem label={t('field.rashi')} value={personal.rashi} labelClass="text-emerald-200" />
              <DetailItem label={t('field.nakshatra')} value={personal.nakshatra} labelClass="text-emerald-200" />
              <DetailItem label={t('field.manglik')} value={personal.manglik} labelClass="text-emerald-200" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-emerald-900/30 border border-emerald-400/20 p-6 space-y-4 shadow-inner">
              <SectionTitle title={t('section.education')} lineClass="bg-emerald-400/40" className="items-center" />
              <div className="space-y-3">
                <DetailItem label={t('field.education')} value={education.education} />
                <DetailItem label={t('field.occupation')} value={education.occupation} />
                <DetailItem label={t('field.income')} value={education.income} />
              </div>
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-800/40 p-3">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200 mb-2">{t('field.aboutMe')}</p>
                <p className="text-emerald-50/90 leading-relaxed whitespace-pre-line">{education.aboutMe}</p>
              </div>
            </div>

            <div className="rounded-2xl bg-emerald-900/30 border border-emerald-400/20 p-6 space-y-4 shadow-inner">
              <SectionTitle title={t('section.family')} lineClass="bg-emerald-400/40" className="items-center" />
              <div className="space-y-3">
                <DetailItem label={t('field.fatherName')} value={`${family.fatherName} (${family.fatherOccupation})`} />
                <DetailItem label={t('field.motherName')} value={`${family.motherName} (${family.motherOccupation})`} />
                <DetailItem label={t('field.familyType')} value={family.familyType} />
                <DetailItem label={t('field.values')} value={family.familyValues} />
                <DetailItem label={t('field.siblings')} value={family.siblings} />
                <DetailItem label={t('field.nativePlace')} value={family.nativePlace} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


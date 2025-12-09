import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage, DetailItem, SectionTitle } from './shared';
import { MapPin, Heart, Sun, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const SacredSaffron: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-50 via-amber-50 to-white text-stone-900 font-serif relative overflow-hidden">
      <div className="absolute inset-6 border-2 border-amber-200 rounded-[28px] pointer-events-none" />
      <div className="absolute inset-10 border border-amber-100 rounded-[22px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-amber-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 h-full grid grid-cols-[1fr_1.2fr] gap-10 p-12">
        {/* Left rail */}
        <div className="bg-white/70 backdrop-blur rounded-2xl border border-amber-100 shadow-xl flex flex-col overflow-hidden">
          <div className="bg-gradient-to-br from-orange-500 to-amber-400 text-white px-6 py-5 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold">{t('common.marriageBiodata')}</span>
              <h1 className="text-3xl font-extrabold leading-tight">{personal.fullName}</h1>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
              <Sun className="text-white" size={24} />
            </div>
          </div>

          <div className="p-6 flex flex-col gap-6">
            <div className="w-full aspect-[3/4] overflow-hidden rounded-xl border border-amber-100 shadow-sm bg-amber-50">
              {personal.photoUrl ? (
                <img src={personal.photoUrl} className="w-full h-full object-cover" alt="Profile" />
              ) : (
                <PlaceholderImage className="w-full h-full" />
              )}
            </div>

            <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-4 space-y-3 text-sm">
              <div className="flex items-center gap-2 font-semibold text-amber-800">
                <Heart size={14} /> {t('section.contact')}
              </div>
              <div className="space-y-2 text-amber-900/80">
                <div className="flex items-center gap-2"><Phone size={14} className="text-amber-600" /> {contact.contactNumber}</div>
                <div className="flex items-center gap-2"><Mail size={14} className="text-amber-600" /> {contact.email}</div>
                <div className="flex items-start gap-2"><MapPin size={14} className="text-amber-600 mt-1" /> <span className="whitespace-pre-line leading-relaxed">{contact.address}</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-col gap-8">
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-amber-100 shadow-lg p-8 space-y-6">
            <div className="flex justify-between items-start gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-amber-600 font-semibold">{t('section.personal')}</p>
                <p className="text-2xl font-black text-amber-900 leading-tight">{education.occupation}</p>
                <p className="text-sm text-amber-700 mt-1">{education.company}</p>
              </div>
              <div className="text-right text-sm text-amber-700">
                <p>{personal.dateOfBirth} — {personal.timeOfBirth}</p>
                <p>{personal.placeOfBirth}</p>
                <p>{personal.height} • {personal.weight}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <DetailItem label={t('field.bloodGroup')} value={personal.bloodGroup} labelClass="text-amber-600" />
              <DetailItem label={t('field.complexion')} value={personal.complexion} labelClass="text-amber-600" />
              <DetailItem label={t('field.religion')} value={personal.religion} labelClass="text-amber-600" />
              <DetailItem label={t('field.caste')} value={`${personal.caste}${personal.subCaste ? `, ${personal.subCaste}` : ''}`} labelClass="text-amber-600" />
              <DetailItem label={t('field.gothra')} value={personal.gothra} labelClass="text-amber-600" />
              <DetailItem label={t('field.rashi')} value={personal.rashi} labelClass="text-amber-600" />
              <DetailItem label={t('field.nakshatra')} value={personal.nakshatra} labelClass="text-amber-600" />
              <DetailItem label={t('field.maritalStatus')} value={personal.maritalStatus} labelClass="text-amber-600" />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-amber-100 shadow-md p-8 space-y-8">
            <SectionTitle title={t('section.education')} lineClass="bg-amber-100" className="items-center" />
            <div className="grid grid-cols-2 gap-6 text-sm">
              <DetailItem label={t('field.education')} value={education.education} />
              <DetailItem label={t('field.occupation')} value={education.occupation} />
              <DetailItem label={t('field.company')} value={education.company} />
              <DetailItem label={t('field.income')} value={education.income} />
              <div className="col-span-2 bg-amber-50/60 border border-amber-100 rounded-xl p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-amber-700 mb-2">{t('field.aboutMe')}</p>
                <p className="text-amber-900/80 leading-relaxed whitespace-pre-line">
                  {education.aboutMe}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100 shadow-inner p-8 space-y-6">
            <SectionTitle title={t('section.family')} lineClass="bg-amber-200" className="items-center" />
            <div className="grid grid-cols-2 gap-6">
              <DetailItem label={t('field.fatherName')} value={`${family.fatherName} (${family.fatherOccupation})`} />
              <DetailItem label={t('field.motherName')} value={`${family.motherName} (${family.motherOccupation})`} />
              <DetailItem label={t('field.familyType')} value={family.familyType} />
              <DetailItem label={t('field.values')} value={family.familyValues} />
              <div className="col-span-2">
                <DetailItem label={t('field.siblings')} value={family.siblings} />
              </div>
              <div className="col-span-2">
                <DetailItem label={t('field.nativePlace')} value={family.nativePlace} icon={MapPin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


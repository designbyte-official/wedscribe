import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage, DetailItem, SectionTitle } from './shared';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const GracefulLily: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 font-serif relative overflow-hidden">
      <div className="absolute inset-8 border border-blue-100 rounded-[26px] pointer-events-none" />
      <div className="absolute top-10 left-16 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-6 right-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-[0.6fr_1.4fr] gap-10 h-full p-12">
        {/* Sidebar */}
        <div className="bg-white/80 backdrop-blur border border-blue-100 shadow-xl rounded-2xl p-8 flex flex-col gap-6">
          <div className="text-center space-y-3">
            <h1 className="text-3xl font-bold tracking-tight">{personal.fullName}</h1>
            <p className="text-blue-600 uppercase tracking-[0.25em] text-xs font-semibold">{education.occupation}</p>
            <p className="text-slate-500 text-sm">{education.company}</p>
          </div>

          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border border-blue-100 shadow-md">
            {personal.photoUrl ? (
              <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <PlaceholderImage className="w-full h-full bg-slate-100 text-slate-300" />
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <DetailItem label={t('field.dob')} value={personal.dateOfBirth} labelClass="text-blue-600" />
            <DetailItem label={t('field.tob')} value={personal.timeOfBirth} labelClass="text-blue-600" />
            <DetailItem label={t('field.height')} value={personal.height} labelClass="text-blue-600" />
            <DetailItem label={t('field.weight')} value={personal.weight} labelClass="text-blue-600" />
            <DetailItem label={t('field.bloodGroup')} value={personal.bloodGroup} labelClass="text-blue-600" />
            <DetailItem label={t('field.maritalStatus')} value={personal.maritalStatus} labelClass="text-blue-600" />
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-700 font-semibold">{t('section.contact')}</p>
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex items-center gap-2"><Phone size={14} className="text-blue-500" /> {contact.contactNumber}</div>
              <div className="flex items-center gap-2"><Mail size={14} className="text-blue-500" /> {contact.email}</div>
              <div className="flex items-start gap-2"><MapPin size={14} className="text-blue-500 mt-1" /> <span className="whitespace-pre-line">{contact.address}</span></div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-8">
          <div className="bg-white border border-blue-100 rounded-2xl shadow-lg p-8 space-y-6">
            <SectionTitle title={t('section.personal')} lineClass="bg-blue-100" className="items-center" />
            <div className="grid grid-cols-3 gap-6">
              <DetailItem label={t('field.religion')} value={personal.religion} />
              <DetailItem label={t('field.caste')} value={`${personal.caste}${personal.subCaste ? `, ${personal.subCaste}` : ''}`} />
              <DetailItem label={t('field.gothra')} value={personal.gothra} />
              <DetailItem label={t('field.rashi')} value={personal.rashi} />
              <DetailItem label={t('field.nakshatra')} value={personal.nakshatra} />
              <DetailItem label={t('field.complexion')} value={personal.complexion} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-7 space-y-4">
              <SectionTitle title={t('section.education')} lineClass="bg-blue-100" className="items-center" />
              <DetailItem label={t('field.education')} value={education.education} />
              <DetailItem label={t('field.occupation')} value={education.occupation} />
              <DetailItem label={t('field.income')} value={education.income} />
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl shadow-md p-7 space-y-4">
              <SectionTitle title={t('field.aboutMe')} lineClass="bg-blue-200" className="items-center" />
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {education.aboutMe}
              </p>
            </div>
          </div>

          <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-8 space-y-6">
            <SectionTitle title={t('section.family')} lineClass="bg-blue-100" className="items-center" />
            <div className="grid grid-cols-2 gap-6">
              <DetailItem label={t('field.fatherName')} value={`${family.fatherName} (${family.fatherOccupation})`} />
              <DetailItem label={t('field.motherName')} value={`${family.motherName} (${family.motherOccupation})`} />
              <DetailItem label={t('field.familyType')} value={family.familyType} />
              <DetailItem label={t('field.values')} value={family.familyValues} />
              <DetailItem label={t('field.siblings')} value={family.siblings} className="col-span-2" />
              <DetailItem label={t('field.nativePlace')} value={family.nativePlace} className="col-span-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


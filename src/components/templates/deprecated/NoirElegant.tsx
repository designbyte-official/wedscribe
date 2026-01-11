import React from 'react';
import { BiodataProfile } from '@/types';
import { DetailItem, SectionTitle, PlaceholderImage } from '../shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const NoirElegant: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-neutral-950 text-neutral-50 font-sans">
      <div className="grid grid-cols-[0.34fr_0.66fr] h-full">
        <div className="p-5 border-r border-neutral-800 space-y-3 bg-gradient-to-b from-neutral-900 to-black">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.32em] text-neutral-400">{t('common.marriageBiodata')}</p>
            <h1 className="text-2xl font-extrabold leading-tight">{personal.fullName}</h1>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">{education.occupation}</p>
          </div>
          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border-2 border-neutral-700 bg-neutral-900 shadow-lg">
            {personal.photoUrl ? (
              <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
            ) : (
              <PlaceholderImage className="w-full h-full text-neutral-700" />
            )}
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/80 p-3 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">{t('section.astrology')}</p>
            <div className="space-y-1 text-xs text-neutral-200">
              {personal.rashi && <div className="flex justify-between"><span className="text-neutral-400">{t('field.rashi')}</span><span className="font-medium">{personal.rashi}</span></div>}
              {personal.nakshatra && <div className="flex justify-between"><span className="text-neutral-400">{t('field.nakshatra')}</span><span className="font-medium">{personal.nakshatra}</span></div>}
              {personal.gothra && <div className="flex justify-between"><span className="text-neutral-400">{t('field.gothra')}</span><span className="font-medium">{personal.gothra}</span></div>}
              {personal.manglik && <div className="flex justify-between"><span className="text-neutral-400">{t('field.manglik')}</span><span className="font-medium">{personal.manglik}</span></div>}
            </div>
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-900/80 p-3 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">Quick Info</p>
            <div className="space-y-1 text-xs text-neutral-200">
              {personal.height && <div className="flex justify-between"><span className="text-neutral-400">{t('field.height')}</span><span className="font-medium">{personal.height}</span></div>}
              {personal.weight && <div className="flex justify-between"><span className="text-neutral-400">{t('field.weight')}</span><span className="font-medium">{personal.weight}</span></div>}
              {personal.bloodGroup && <div className="flex justify-between"><span className="text-neutral-400">{t('field.bloodGroup')}</span><span className="font-medium">{personal.bloodGroup}</span></div>}
              {personal.maritalStatus && <div className="flex justify-between"><span className="text-neutral-400">{t('field.maritalStatus')}</span><span className="font-medium">{personal.maritalStatus}</span></div>}
            </div>
          </div>
          <div className="space-y-1.5 text-xs">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">{t('section.contact')}</p>
            {contact.contactNumber && <p className="font-semibold text-neutral-200">{contact.contactNumber}</p>}
            {contact.email && <p className="break-words text-neutral-300">{contact.email}</p>}
            {contact.address && <p className="text-neutral-400 whitespace-pre-line leading-relaxed">{contact.address}</p>}
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <SectionTitle title={t('section.personal')} lineClass="bg-neutral-700" />
              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                <DetailItem label={t('field.dob')} value={personal.dateOfBirth} />
                <DetailItem label={t('field.tob')} value={personal.timeOfBirth} />
                <DetailItem label={t('field.pob')} value={personal.placeOfBirth} />
                <DetailItem label={t('field.complexion')} value={personal.complexion} />
                <DetailItem label={t('field.religion')} value={personal.religion} />
                <DetailItem label={t('field.caste')} value={personal.caste && personal.subCaste ? `${personal.caste}, ${personal.subCaste}` : personal.caste || personal.subCaste} />
              </div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <SectionTitle title={t('section.astrology')} lineClass="bg-neutral-700" />
              <div className="grid grid-cols-1 gap-2 text-xs md:text-sm">
                <DetailItem label={t('field.religion')} value={personal.religion} />
                <DetailItem label={t('field.caste')} value={`${personal.caste}${personal.subCaste ? `, ${personal.subCaste}` : ''}`} />
                <DetailItem label={t('field.gothra')} value={personal.gothra} />
                <DetailItem label={t('field.rashi')} value={personal.rashi} />
                <DetailItem label={t('field.nakshatra')} value={personal.nakshatra} />
                <DetailItem label={t('field.manglik')} value={personal.manglik} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
              <SectionTitle title={t('section.education')} lineClass="bg-neutral-700" />
              <DetailItem label={t('field.education')} value={education.education} />
              <DetailItem label={t('field.occupation')} value={education.occupation} />
              <DetailItem label={t('field.company')} value={education.company} />
              <DetailItem label={t('field.income')} value={education.income} />
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
              <SectionTitle title={t('field.aboutMe')} lineClass="bg-neutral-700" />
              <p className="text-sm text-neutral-100 leading-relaxed whitespace-pre-line">{education.aboutMe}</p>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
            <SectionTitle title={t('section.family')} lineClass="bg-neutral-700" />
            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
              <DetailItem label={t('field.fatherName')} value={family.fatherName && family.fatherOccupation ? `${family.fatherName} (${family.fatherOccupation})` : family.fatherName || family.fatherOccupation} />
              <DetailItem label={t('field.motherName')} value={family.motherName && family.motherOccupation ? `${family.motherName} (${family.motherOccupation})` : family.motherName || family.motherOccupation} />
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


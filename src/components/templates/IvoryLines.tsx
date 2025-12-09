import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage, DetailItem } from './shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const IvoryLines: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-white flex text-stone-800 font-montserrat">
      {/* Left Sidebar - 30% */}
      <div className="w-[30%] bg-stone-100 p-8 flex flex-col border-r border-stone-200">
          <div className="w-full aspect-square bg-stone-200 mb-8 overflow-hidden grayscale border border-stone-300">
              {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover" alt="Profile" /> : <PlaceholderImage className="w-full h-full" />}
          </div>

          <div className="space-y-8">
              <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4 border-b border-stone-300 pb-2">Details</h4>
                  <div className="space-y-3 text-sm font-medium">
                      <div className="flex justify-between"><span>{t('field.dob')}</span> <span>{personal.dateOfBirth}</span></div>
                      <div className="flex justify-between"><span>{t('field.tob')}</span> <span>{personal.timeOfBirth}</span></div>
                      <div className="flex justify-between"><span>{t('field.pob')}</span> <span>{personal.placeOfBirth}</span></div>
                      <div className="flex justify-between"><span>{t('field.height')}</span> <span>{personal.height}</span></div>
                      <div className="flex justify-between"><span>{t('field.weight')}</span> <span>{personal.weight}</span></div>
                      <div className="flex justify-between"><span>{t('field.bloodGroup')}</span> <span>{personal.bloodGroup}</span></div>
                      <div className="flex justify-between"><span>{t('field.complexion')}</span> <span>{personal.complexion}</span></div>
                      <div className="flex justify-between"><span>{t('field.maritalStatus')}</span> <span>{personal.maritalStatus}</span></div>
                  </div>
              </div>

              <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4 border-b border-stone-300 pb-2">Social</h4>
                  <div className="space-y-3 text-sm font-medium">
                      <div className="flex justify-between"><span>{t('field.religion')}</span> <span>{personal.religion}</span></div>
                      <div className="flex justify-between"><span>{t('field.caste')}</span> <span>{personal.caste}, {personal.subCaste}</span></div>
                      <div className="flex justify-between"><span>{t('field.gothra')}</span> <span>{personal.gothra}</span></div>
                      <div className="flex justify-between"><span>{t('field.rashi')}</span> <span>{personal.rashi}</span></div>
                      <div className="flex justify-between"><span>{t('field.nakshatra')}</span> <span>{personal.nakshatra}</span></div>
                      <div className="flex justify-between"><span>{t('field.manglik')}</span> <span>{personal.manglik}</span></div>
                  </div>
              </div>

              <div className="mt-auto">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4 border-b border-stone-300 pb-2">{t('section.contact')}</h4>
                  <div className="text-sm space-y-2 break-all">
                      <p className="font-bold">{contact.contactNumber}</p>
                      <p>{contact.email}</p>
                      <p className="text-stone-500 text-xs mt-2 whitespace-pre-line leading-relaxed">{contact.address}</p>
                  </div>
              </div>
          </div>
      </div>

      {/* Right Content - 70% */}
      <div className="w-[70%] p-12 flex flex-col">
          <div className="mb-12">
              <h1 className="text-4xl font-playfair font-bold uppercase tracking-wide mb-2 leading-tight">{personal.fullName}</h1>
              <p className="text-stone-500 text-sm font-bold uppercase tracking-[0.2em]">{education.occupation}</p>
          </div>

          <div className="space-y-10 grow">
              <section>
                  <h3 className="font-playfair font-bold text-xl mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-stone-800 rotate-45"></span> {t('section.personal')}
                  </h3>
                  <p className="text-sm leading-7 text-stone-600 border-l-2 border-stone-200 pl-4 whitespace-pre-line">
                      {education.aboutMe || "Brief summary about the profile..."}
                  </p>
              </section>

              <section>
                  <h3 className="font-playfair font-bold text-xl mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 bg-stone-800 rotate-45"></span> {t('section.education')}
                  </h3>
                  <div className="grid grid-cols-2 gap-6 align-top">
                      <DetailItem label={t('field.education')} value={education.education} labelClass="text-stone-400" />
                      <DetailItem label={t('field.occupation')} value={education.occupation} labelClass="text-stone-400" />
                      <DetailItem label={t('field.company')} value={education.company} labelClass="text-stone-400" />
                      <DetailItem label={t('field.income')} value={education.income} labelClass="text-stone-400" />
                  </div>
              </section>

              <section>
                  <h3 className="font-playfair font-bold text-xl mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 bg-stone-800 rotate-45"></span> {t('section.family')}
                  </h3>
                  <div className="bg-stone-50 p-6 border border-stone-100 grid grid-cols-2 gap-y-6 gap-x-8">
                       <DetailItem label={t('field.fatherName')} value={family.fatherName} valueClass="font-bold" />
                       <DetailItem label="Job" value={family.fatherOccupation} />
                       <DetailItem label={t('field.motherName')} value={family.motherName} valueClass="font-bold" />
                       <DetailItem label="Job" value={family.motherOccupation} />
                       <DetailItem label={t('field.familyType')} value={family.familyType} />
                       <DetailItem label={t('field.values')} value={family.familyValues} />
                       <div className="col-span-2 pt-2 border-t border-stone-200 mt-2">
                          <DetailItem label={t('field.siblings')} value={family.siblings} />
                       </div>
                       <div className="col-span-2">
                           <DetailItem label={t('field.nativePlace')} value={family.nativePlace} />
                       </div>
                  </div>
              </section>
          </div>
      </div>
    </div>
  );
};

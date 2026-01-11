import React from 'react';
import { BiodataProfile } from '@/types';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PlaceholderImage, DetailItem } from '../shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const MintBlossom: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;

  return (
    <div className="w-full h-full bg-[#f0fdf4] p-8 flex font-lato relative overflow-hidden">
      {/* Decorative Leaves */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/2 -left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-40"></div>

      <div className="w-full h-full bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white flex overflow-hidden relative z-10">
          {/* Left Side - 40% */}
          <div className="w-[40%] bg-green-50/50 p-5 flex flex-col border-r border-green-100 gap-3">
              <div>
                  <h1 className="font-playfair text-xl text-green-900 font-bold mb-0.5 leading-tight">{personal.fullName}</h1>
                  <p className="text-green-600 text-xs font-bold uppercase tracking-widest">{education.occupation}</p>
              </div>
              
              <div className="w-full aspect-[3/4] bg-white p-2 shadow-md rounded-lg rotate-1">
                   {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover rounded" alt="Profile" /> : <PlaceholderImage className="w-full h-full rounded" />}
              </div>

              <div className="bg-white p-3 rounded-xl shadow-sm border border-green-100">
                  <h3 className="text-green-800 font-bold uppercase tracking-wider text-[10px] mb-2 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> {t('section.astrology')}
                  </h3>
                  <div className="space-y-1 text-xs text-green-900">
                      {personal.rashi && <div className="flex justify-between"><span className="text-green-600">{t('field.rashi')}</span><span className="font-medium">{personal.rashi}</span></div>}
                      {personal.nakshatra && <div className="flex justify-between"><span className="text-green-600">{t('field.nakshatra')}</span><span className="font-medium">{personal.nakshatra}</span></div>}
                      {personal.gothra && <div className="flex justify-between"><span className="text-green-600">{t('field.gothra')}</span><span className="font-medium">{personal.gothra}</span></div>}
                      {personal.manglik && <div className="flex justify-between"><span className="text-green-600">{t('field.manglik')}</span><span className="font-medium">{personal.manglik}</span></div>}
                  </div>
              </div>

              <div className="bg-white p-3 rounded-xl shadow-sm border border-green-100">
                  <h3 className="text-green-800 font-bold uppercase tracking-wider text-[10px] mb-2 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Quick Info
                  </h3>
                  <div className="space-y-1 text-xs text-green-900">
                      {personal.height && <div className="flex justify-between"><span className="text-green-600">{t('field.height')}</span><span className="font-medium">{personal.height}</span></div>}
                      {personal.weight && <div className="flex justify-between"><span className="text-green-600">{t('field.weight')}</span><span className="font-medium">{personal.weight}</span></div>}
                      {personal.bloodGroup && <div className="flex justify-between"><span className="text-green-600">{t('field.bloodGroup')}</span><span className="font-medium">{personal.bloodGroup}</span></div>}
                      {personal.maritalStatus && <div className="flex justify-between"><span className="text-green-600">{t('field.maritalStatus')}</span><span className="font-medium">{personal.maritalStatus}</span></div>}
                  </div>
              </div>

              <div className="bg-white p-3 rounded-xl shadow-sm border border-green-100">
                  <h3 className="text-green-800 font-bold uppercase tracking-wider text-[10px] mb-2 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> {t('section.contact')}
                  </h3>
                  <div className="space-y-1.5 text-xs text-green-900">
                      {contact.contactNumber && <div className="flex items-center gap-2"><Phone size={12} className="text-green-500"/> {contact.contactNumber}</div>}
                      {contact.email && <div className="flex items-center gap-2"><Mail size={12} className="text-green-500"/> {contact.email}</div>}
                      {contact.address && <div className="flex items-start gap-2"><MapPin size={12} className="text-green-500 mt-0.5"/> <span className="whitespace-pre-line leading-relaxed">{contact.address}</span></div>}
                  </div>
              </div>
          </div>

          {/* Right Side - 60% */}
          <div className="w-[60%] p-10 flex flex-col gap-10 overflow-y-auto">
              {education.aboutMe && (
                  <div className="relative pl-6">
                      <span className="absolute left-0 top-0 text-4xl text-green-300 font-serif">"</span>
                      <p className="text-green-900/80 italic leading-relaxed text-sm pt-2 whitespace-pre-line">
                          {education.aboutMe}
                      </p>
                  </div>
              )}

              <div className="space-y-8">
                  <div>
                      <h2 className="text-lg font-bold text-green-800 border-b-2 border-green-100 pb-2 mb-4 inline-block pr-8">{t('section.personal')}</h2>
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                           <DetailItem label={t('field.dob')} value={personal.dateOfBirth} labelClass="text-green-600" />
                           <DetailItem label={t('field.tob')} value={personal.timeOfBirth} labelClass="text-green-600" />
                           <DetailItem label={t('field.pob')} value={personal.placeOfBirth} labelClass="text-green-600" />
                           <DetailItem label={t('field.complexion')} value={personal.complexion} labelClass="text-green-600" />
                           <DetailItem label={t('field.religion')} value={personal.religion} labelClass="text-green-600" />
                           <DetailItem label={t('field.caste')} value={personal.caste && personal.subCaste ? `${personal.caste}, ${personal.subCaste}` : personal.caste || personal.subCaste} labelClass="text-green-600" />
                           <DetailItem label={t('field.gothra')} value={personal.gothra} labelClass="text-green-600" />
                      </div>
                  </div>

                  <div>
                      <h2 className="text-lg font-bold text-green-800 border-b-2 border-green-100 pb-2 mb-4 inline-block pr-8">{t('section.education')}</h2>
                      <div className="grid grid-cols-1 gap-y-4">
                           <DetailItem label={t('field.education')} value={education.education} labelClass="text-green-600" />
                           <DetailItem label={t('field.occupation')} value={`${education.occupation} at ${education.company}`} labelClass="text-green-600" />
                           <DetailItem label={t('field.income')} value={education.income} labelClass="text-green-600" />
                      </div>
                  </div>

                  <div>
                      <h2 className="text-lg font-bold text-green-800 border-b-2 border-green-100 pb-2 mb-4 inline-block pr-8">{t('section.family')}</h2>
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                           <DetailItem label={t('field.fatherName')} value={family.fatherName} labelClass="text-green-600" />
                           <DetailItem label={t('field.motherName')} value={family.motherName} labelClass="text-green-600" />
                           <div className="col-span-2">
                              <DetailItem label={t('field.siblings')} value={family.siblings} labelClass="text-green-600" />
                           </div>
                           <div className="col-span-2">
                               <DetailItem label={t('field.nativePlace')} value={family.nativePlace} labelClass="text-green-600" />
                           </div>
                           <DetailItem label={t('field.familyType')} value={family.familyType} labelClass="text-green-600" />
                           <DetailItem label={t('field.values')} value={family.familyValues} labelClass="text-green-600" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

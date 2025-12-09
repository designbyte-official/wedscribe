import React from 'react';
import { BiodataProfile } from '@/types';
import { Phone, Mail, MapPin, User, Star, Calendar, Clock, Ruler, Users, GraduationCap, Briefcase, Globe, Award, Activity } from 'lucide-react';
import { PlaceholderImage, SectionTitle, DetailItem, ContactRow } from './shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const SkyBlossom: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;
  
  return (
    <div className="w-full h-full bg-white flex flex-row font-lato overflow-hidden">
      {/* Left Sidebar - 35% */}
      <div className="w-[35%] bg-sky-900 text-white p-5 flex flex-col relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-sky-800 to-sky-900 opacity-50"></div>
          
          <div className="relative z-10 w-full flex flex-col h-full gap-3">
              <div className="w-28 h-28 rounded-full border-4 border-sky-400/30 p-1 mx-auto mb-2 shrink-0">
                  {personal.photoUrl ? (
                      <img src={personal.photoUrl} className="w-full h-full rounded-full object-cover shadow-lg" alt="Profile" />
                  ) : <PlaceholderImage className="w-full h-full rounded-full bg-sky-800 text-sky-400/50" />}
              </div>

              <div className="w-full space-y-2.5 grow flex flex-col">
                  <div>
                      <h2 className="text-sm font-cinzel font-bold text-sky-100 mb-2 border-b border-sky-700 pb-1.5">{t('section.contact')}</h2>
                      <div className="w-full space-y-1.5 text-left text-xs">
                          <ContactRow icon={Phone} value={contact.contactNumber} />
                          <ContactRow icon={Mail} value={contact.email} />
                          <ContactRow icon={MapPin} value={contact.address} />
                      </div>
                  </div>

                  <div>
                      <h2 className="text-sm font-cinzel font-bold text-sky-100 mb-2 border-b border-sky-700 pb-1.5 flex items-center gap-1.5">
                          <Star size={14} className="text-sky-400"/> {t('section.astrology')}
                      </h2>
                      <div className="space-y-1 text-xs text-sky-100/80">
                          {personal.rashi && <p>• {t('field.rashi')}: {personal.rashi}</p>}
                          {personal.nakshatra && <p>• {t('field.nakshatra')}: {personal.nakshatra}</p>}
                          {personal.gothra && <p>• {t('field.gothra')}: {personal.gothra}</p>}
                          {personal.manglik && <p>• {t('field.manglik')}: {personal.manglik}</p>}
                      </div>
                  </div>

                  <div>
                      <h2 className="text-sm font-cinzel font-bold text-sky-100 mb-2 border-b border-sky-700 pb-1.5">{t('section.habits')}</h2>
                      <div className="space-y-1 text-xs text-sky-100/80">
                          {personal.maritalStatus && <p>• {t('field.maritalStatus')}: {personal.maritalStatus}</p>}
                          {family.familyValues && <p>• {family.familyValues} {t('field.values')}</p>}
                          {family.familyType && <p>• {family.familyType} {t('field.familyType')}</p>}
                          {personal.religion && <p>• {personal.religion}{personal.caste ? `, ${personal.caste}` : ''}{personal.subCaste ? `, ${personal.subCaste}` : ''}</p>}
                      </div>
                  </div>

                  <div>
                      <h2 className="text-sm font-cinzel font-bold text-sky-100 mb-2 border-b border-sky-700 pb-1.5">Quick Info</h2>
                      <div className="space-y-1 text-xs text-sky-100/80">
                          {personal.height && <p>• {t('field.height')}: {personal.height}</p>}
                          {personal.weight && <p>• {t('field.weight')}: {personal.weight}</p>}
                          {personal.bloodGroup && <p>• {t('field.bloodGroup')}: {personal.bloodGroup}</p>}
                          {personal.complexion && <p>• {t('field.complexion')}: {personal.complexion}</p>}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Right Content - 65% */}
      <div className="w-[65%] p-8 flex flex-col gap-6">
          <div className="border-b-2 border-sky-100 pb-4">
              <h1 className="text-4xl font-cinzel text-sky-900 mb-1 uppercase tracking-wide leading-tight">{personal.fullName}</h1>
              <p className="text-base tracking-[0.18em] text-sky-500 uppercase font-bold">{education.occupation}</p>
          </div>

          <div className="space-y-6 grow">
              {/* About Section */}
              {education.aboutMe && (
                  <div className="bg-sky-50 p-4 border-l-4 border-sky-500 rounded-r-lg">
                      <p className="italic text-slate-600 leading-relaxed text-sm whitespace-pre-line">"{education.aboutMe}"</p>
                  </div>
              )}

              {/* Personal Grid */}
              <div>
                  <SectionTitle title={t('section.personal')} lineClass="bg-sky-100" />
                  <div className="grid grid-cols-3 gap-4 text-sm">
                      <DetailItem label={t('field.dob')} value={`${personal.dateOfBirth}`} icon={Calendar} />
                      <DetailItem label={t('field.tob')} value={personal.timeOfBirth} icon={Clock} />
                      <DetailItem label={t('field.pob')} value={personal.placeOfBirth} icon={MapPin} />
                      <DetailItem label={t('field.religion')} value={personal.religion} icon={Star} />
                      <DetailItem label={t('field.caste')} value={personal.caste} icon={Users} />
                      <DetailItem label={t('field.gothra')} value={personal.gothra} icon={User} />
                  </div>
              </div>

              {/* Professional Grid */}
              <div>
                  <SectionTitle title={t('section.education')} lineClass="bg-sky-100" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                      <DetailItem label={t('field.education')} value={education.education} icon={GraduationCap} className="col-span-2" />
                      <DetailItem label={t('field.occupation')} value={education.occupation} icon={Briefcase} />
                      <DetailItem label={t('field.company')} value={education.company} icon={Globe} />
                      <DetailItem label={t('field.income')} value={education.income} icon={Award} />
                  </div>
              </div>

              {/* Family Grid */}
              <div>
                  <SectionTitle title={t('section.family')} lineClass="bg-sky-100" />
                  <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
                      <DetailItem label={t('field.fatherName')} value={family.fatherName} valueClass="font-bold text-sky-900" />
                      <DetailItem label={t('field.fatherOcc')} value={family.fatherOccupation} />
                      <DetailItem label={t('field.motherName')} value={family.motherName} valueClass="font-bold text-sky-900" />
                      <DetailItem label={t('field.motherOcc')} value={family.motherOccupation} />
                      <DetailItem label={t('field.siblings')} value={family.siblings} className="col-span-2 mt-2" />
                      <DetailItem label={t('field.nativePlace')} value={family.nativePlace} className="col-span-2" icon={MapPin} />
                  </div>
              </div>
          </div>
          
          {/* Footer */}
          <div className="mt-auto pt-6 text-center text-xs text-sky-300 uppercase tracking-widest">
              Biodata • {personal.fullName}
          </div>
      </div>
    </div>
  );
};

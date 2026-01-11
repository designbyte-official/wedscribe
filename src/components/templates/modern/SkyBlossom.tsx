import React from 'react';
import { BiodataProfile } from '@/types';
import { Phone, Mail, MapPin, User, Star, Calendar, Clock, Ruler, Users, GraduationCap, Briefcase, Globe, Award, Activity } from 'lucide-react';
import { PlaceholderImage, SectionTitle, DetailItem, ContactRow } from '../shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
  profile: BiodataProfile;
}

export const SkyBlossom: React.FC<Props> = ({ profile }) => {
  const { t } = useLanguage();
  const { personal, education, family, contact } = profile;
  
  return (
    <div className="w-full h-full bg-white flex flex-row font-lato overflow-hidden min-h-full">
      {/* Left Sidebar - 35% */}
      <div className="w-[35%] bg-[#0c4a6e] text-white p-5 flex flex-col relative min-h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#075985,#0c4a6e)] opacity-50"></div>
          
          <div className="relative z-10 w-full flex flex-col h-full gap-3 min-h-full">
              <div className="w-28 h-28 rounded-full border-4 border-[#38bdf8]/30 p-1 mx-auto mb-2 shrink-0">
                  {personal.photoUrl ? (
                      <img src={personal.photoUrl} className="w-full h-full rounded-full object-cover shadow-lg" alt="Profile" />
                  ) : <PlaceholderImage className="w-full h-full rounded-full bg-[#075985] text-[#38bdf8]/50" />}
              </div>

              <div className="w-full space-y-2.5 grow flex flex-col">
                  <div>
                      <h2 className="text-sm font-cinzel font-bold text-[#e0f2fe] mb-2 border-b border-[#0369a1] pb-1.5">{t('section.contact')}</h2>
                      <div className="w-full space-y-1.5 text-left text-xs">
                          <ContactRow icon={Phone} value={contact.contactNumber} />
                          <ContactRow icon={Mail} value={contact.email} />
                          <ContactRow icon={MapPin} value={contact.address} />
                      </div>
                  </div>

                  <div>
                      <h2 className="text-sm font-cinzel font-bold text-[#e0f2fe] mb-2 border-b border-[#0369a1] pb-1.5 flex items-center gap-1.5">
                          <Star size={14} className="text-[#38bdf8]"/> {t('section.astrology')}
                      </h2>
                      <div className="space-y-1 text-xs text-[#e0f2fe]/80">
                          {personal.rashi && <p>• {t('field.rashi')}: {personal.rashi}</p>}
                          {personal.nakshatra && <p>• {t('field.nakshatra')}: {personal.nakshatra}</p>}
                          {personal.gothra && <p>• {t('field.gothra')}: {personal.gothra}</p>}
                          {personal.manglik && <p>• {t('field.manglik')}: {personal.manglik}</p>}
                      </div>
                  </div>

                  <div>
                      <h2 className="text-sm font-cinzel font-bold text-[#e0f2fe] mb-2 border-b border-[#0369a1] pb-1.5">{t('section.habits')}</h2>
                      <div className="space-y-1 text-xs text-[#e0f2fe]/80">
                          {personal.maritalStatus && <p>• {t('field.maritalStatus')}: {personal.maritalStatus}</p>}
                          {family.familyValues && <p>• {family.familyValues} {t('field.values')}</p>}
                          {family.familyType && <p>• {family.familyType} {t('field.familyType')}</p>}
                          {personal.religion && <p>• {personal.religion}{personal.caste ? `, ${personal.caste}` : ''}{personal.subCaste ? `, ${personal.subCaste}` : ''}</p>}
                      </div>
                  </div>

                  <div>
                      <h2 className="text-sm font-cinzel font-bold text-[#e0f2fe] mb-2 border-b border-[#0369a1] pb-1.5">Quick Info</h2>
                      <div className="space-y-1 text-xs text-[#e0f2fe]/80">
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
      <div className="w-[65%] p-8 flex flex-col gap-6 min-h-full">
          <div className="border-b-2 border-[#e0f2fe] pb-4 shrink-0">
              <h1 className="text-4xl font-cinzel text-[#0c4a6e] mb-1 uppercase tracking-wide leading-tight">{personal.fullName}</h1>
              <p className="text-base tracking-[0.18em] text-[#0ea5e9] uppercase font-bold">{education.occupation}</p>
          </div>

          <div className="space-y-6 flex-1 min-h-0">
              {/* About Section */}
              {education.aboutMe && (
                  <div className="bg-[#f0f9ff] p-4 border-l-4 border-[#0ea5e9] rounded-r-lg">
                      <p className="italic text-[#475569] leading-relaxed text-sm whitespace-pre-line">"{education.aboutMe}"</p>
                  </div>
              )}

              {/* Personal Grid */}
              <div>
                  <SectionTitle title={t('section.personal')} lineClass="bg-[#e0f2fe]" />
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
                  <SectionTitle title={t('section.education')} lineClass="bg-[#e0f2fe]" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                      <DetailItem label={t('field.education')} value={education.education} icon={GraduationCap} className="col-span-2" />
                      <DetailItem label={t('field.occupation')} value={education.occupation} icon={Briefcase} />
                      <DetailItem label={t('field.company')} value={education.company} icon={Globe} />
                      <DetailItem label={t('field.income')} value={education.income} icon={Award} />
                  </div>
              </div>

              {/* Family Grid */}
              <div>
                  <SectionTitle title={t('section.family')} lineClass="bg-[#e0f2fe]" />
                  <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
                      <DetailItem label={t('field.fatherName')} value={family.fatherName} valueClass="font-bold text-[#0c4a6e]" />
                      <DetailItem label={t('field.fatherOcc')} value={family.fatherOccupation} />
                      <DetailItem label={t('field.motherName')} value={family.motherName} valueClass="font-bold text-[#0c4a6e]" />
                      <DetailItem label={t('field.motherOcc')} value={family.motherOccupation} />
                      <DetailItem label={t('field.siblings')} value={family.siblings} className="col-span-2 mt-2" />
                      <DetailItem label={t('field.nativePlace')} value={family.nativePlace} className="col-span-2" icon={MapPin} />
                  </div>
              </div>
          </div>
          
          {/* Footer */}
          <div className="mt-auto pt-4 pb-2 text-center text-xs text-[#7dd3fc] uppercase tracking-widest shrink-0">
              Biodata • {personal.fullName}
          </div>
      </div>
    </div>
  );
};

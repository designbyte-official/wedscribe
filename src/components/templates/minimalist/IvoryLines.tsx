import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage, DetailItem } from '../shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
    profile: BiodataProfile;
}

export const IvoryLines: React.FC<Props> = ({ profile }) => {
    const { t } = useLanguage();
    const { personal, education, family, contact } = profile;

    return (
        <div className="w-full h-full bg-white flex font-montserrat" style={{ color: '#292524' }}>
            {/* Left Sidebar - 30% */}
            <div className="w-[30%] p-5 flex flex-col pt-12" style={{ backgroundColor: '#f5f5f4', borderRight: '1px solid #e7e5e4' }}>
                <div className="w-full aspect-square mb-3 overflow-hidden grayscale shadow-sm" style={{ backgroundColor: '#e7e5e4', border: '2px solid #d6d3d1' }}>
                    {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover" alt="Profile" /> : <PlaceholderImage className="w-full h-full" />}
                </div>

                <div className="space-y-3">
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2 pb-1.5" style={{ color: '#78716c', borderBottom: '1px solid #d6d3d1' }}>Personal</h4>
                        <div className="space-y-1.5 text-xs font-medium">
                            {personal.dateOfBirth && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.dob')}</span> <span>{personal.dateOfBirth}</span></div>}
                            {personal.timeOfBirth && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.tob')}</span> <span>{personal.timeOfBirth}</span></div>}
                            {personal.placeOfBirth && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.pob')}</span> <span>{personal.placeOfBirth}</span></div>}
                            {personal.height && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.height')}</span> <span>{personal.height}</span></div>}
                            {personal.weight && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.weight')}</span> <span>{personal.weight}</span></div>}
                            {personal.bloodGroup && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.bloodGroup')}</span> <span>{personal.bloodGroup}</span></div>}
                            {personal.complexion && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.complexion')}</span> <span>{personal.complexion}</span></div>}
                            {personal.maritalStatus && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.maritalStatus')}</span> <span>{personal.maritalStatus}</span></div>}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2 pb-1.5" style={{ color: '#78716c', borderBottom: '1px solid #d6d3d1' }}>{t('section.astrology')}</h4>
                        <div className="space-y-1.5 text-xs font-medium">
                            {personal.religion && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.religion')}</span> <span>{personal.religion}</span></div>}
                            {personal.caste && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.caste')}</span> <span>{personal.caste}{personal.subCaste ? `, ${personal.subCaste}` : ''}</span></div>}
                            {personal.gothra && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.gothra')}</span> <span>{personal.gothra}</span></div>}
                            {personal.rashi && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.rashi')}</span> <span>{personal.rashi}</span></div>}
                            {personal.nakshatra && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.nakshatra')}</span> <span>{personal.nakshatra}</span></div>}
                            {personal.manglik && <div className="flex justify-between"><span style={{ color: '#78716c' }}>{t('field.manglik')}</span> <span>{personal.manglik}</span></div>}
                        </div>
                    </div>

                    <div className="mt-auto">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest mb-2 pb-1.5" style={{ color: '#78716c', borderBottom: '1px solid #d6d3d1' }}>{t('section.contact')}</h4>
                        <div className="text-xs space-y-1.5 break-all">
                            {contact.contactNumber && <p className="font-bold" style={{ color: '#292524' }}>{contact.contactNumber}</p>}
                            {contact.email && <p style={{ color: '#44403c' }}>{contact.email}</p>}
                            {contact.address && <p className="text-[10px] mt-1 whitespace-pre-line leading-relaxed" style={{ color: '#78716c' }}>{contact.address}</p>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Content - 70% */}
            <div className="w-[70%] p-12 flex flex-col">
                <div className="mb-12">
                    <h1 className="text-4xl font-playfair font-bold uppercase tracking-wide mb-2 leading-tight">{personal.fullName}</h1>
                    <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: '#78716c' }}>{education.occupation}</p>
                </div>

                <div className="space-y-10 grow">
                    <section>
                        <h3 className="font-playfair font-bold text-xl mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rotate-45" style={{ backgroundColor: '#292524' }}></span> {t('section.personal')}
                        </h3>
                        <p className="text-sm leading-7 border-l-2 pl-4 whitespace-pre-line" style={{ color: '#57534e', borderColor: '#e7e5e4' }}>
                            {education.aboutMe || "Brief summary about the profile..."}
                        </p>
                    </section>

                    <section>
                        <h3 className="font-playfair font-bold text-xl mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rotate-45" style={{ backgroundColor: '#292524' }}></span> {t('section.education')}
                        </h3>
                        <div className="flex flex-row flex-wrap">
                            <div className="w-1/2 pr-3 mb-6">
                                <DetailItem label={t('field.education')} value={education.education} labelClass="text-[#a8a29e]" />
                            </div>
                            <div className="w-1/2 pl-3 mb-6">
                                <DetailItem label={t('field.occupation')} value={education.occupation} labelClass="text-[#a8a29e]" />
                            </div>
                            <div className="w-1/2 pr-3 mb-6">
                                <DetailItem label={t('field.company')} value={education.company} labelClass="text-[#a8a29e]" />
                            </div>
                            <div className="w-1/2 pl-3 mb-6">
                                <DetailItem label={t('field.income')} value={education.income} labelClass="text-[#a8a29e]" />
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="font-playfair font-bold text-xl mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rotate-45" style={{ backgroundColor: '#292524' }}></span> {t('section.family')}
                        </h3>
                        <div className="p-6 border" style={{ backgroundColor: '#fafaf9', borderColor: '#f5f5f4' }}>
                            <div className="flex flex-row flex-wrap">
                                <div className="w-1/2 pr-4 mb-6"><DetailItem label={t('field.fatherName')} value={family.fatherName} valueClass="font-bold" /></div>
                                <div className="w-1/2 pl-4 mb-6"><DetailItem label="Job" value={family.fatherOccupation} /></div>
                                <div className="w-1/2 pr-4 mb-6"><DetailItem label={t('field.motherName')} value={family.motherName} valueClass="font-bold" /></div>
                                <div className="w-1/2 pl-4 mb-6"><DetailItem label="Job" value={family.motherOccupation} /></div>
                                <div className="w-1/2 pr-4 mb-6"><DetailItem label={t('field.familyType')} value={family.familyType} /></div>
                                <div className="w-1/2 pl-4 mb-6"><DetailItem label={t('field.values')} value={family.familyValues} /></div>
                            </div>
                            <div className="pt-2 border-t mt-2" style={{ borderColor: '#e7e5e4' }}>
                                <div className="mb-4">
                                    <DetailItem label={t('field.siblings')} value={family.siblings} />
                                </div>
                                <DetailItem label={t('field.nativePlace')} value={family.nativePlace} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage, DetailItem } from '../shared';
import { useLanguage } from '@/context/LanguageContext';

interface Props {
    profile: BiodataProfile;
}

export const Minimalist: React.FC<Props> = ({ profile }) => {
    const { t } = useLanguage();
    const { personal, education, family, contact } = profile;

    return (
        <div className="w-full h-full bg-white text-black p-12 font-lato flex flex-col">
            {/* Header Block */}
            <div className="flex items-end justify-between border-b-[6px] pb-8 mb-12" style={{ borderColor: '#000000' }}>
                <div>
                    <h1 className="text-7xl font-black uppercase leading-[0.8] mb-1">{personal.fullName?.split(' ')[0]}</h1>
                    <h1 className="text-7xl font-black uppercase leading-[0.8]" style={{ color: '#d1d5db' }}>{personal.fullName?.split(' ').slice(1).join(' ')}</h1>
                </div>
                <div className="text-right">
                    <p className="font-bold text-xl uppercase tracking-widest">{education.occupation}</p>
                    <p className="font-mono text-sm mt-1" style={{ color: '#6b7280' }}>{personal.placeOfBirth}</p>
                </div>
            </div>

            <div className="flex grow">
                {/* Left Column 25% - Photo & Metrics */}
                <div className="w-1/4 pr-16 flex flex-col">
                    <div className="w-full aspect-square mb-6 grayscale contrast-125" style={{ backgroundColor: '#f3f4f6' }}>
                        {personal.photoUrl ? <img src={personal.photoUrl} className="w-full h-full object-cover" alt="Profile" /> : <PlaceholderImage className="w-full h-full" />}
                    </div>

                    <div className="space-y-4">
                        <div className="pl-4" style={{ borderLeft: '4px solid #000000' }}>
                            <span className="block text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#9ca3af' }}>{t('field.height')}</span>
                            <span className="text-xl font-bold">{personal.height}</span>
                        </div>
                        <div className="pl-4" style={{ borderLeft: '4px solid #000000' }}>
                            <span className="block text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#9ca3af' }}>{t('field.age')}</span>
                            <span className="text-xl font-bold">{new Date().getFullYear() - new Date(personal.dateOfBirth).getFullYear()} {t('field.years')}</span>
                        </div>
                        <div className="pl-4" style={{ borderLeft: '4px solid #000000' }}>
                            <span className="block text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#9ca3af' }}>{t('field.bloodGroup')}</span>
                            <span className="text-xl font-bold">{personal.bloodGroup}</span>
                        </div>
                        <div className="pl-4" style={{ borderLeft: '4px solid #000000' }}>
                            <span className="block text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#9ca3af' }}>{t('field.weight')}</span>
                            <span className="text-xl font-bold">{personal.weight}</span>
                        </div>
                        <div className="pl-4" style={{ borderLeft: '4px solid #000000' }}>
                            <span className="block text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#9ca3af' }}>{t('field.complexion')}</span>
                            <span className="text-xl font-bold">{personal.complexion}</span>
                        </div>
                        <div className="pl-4" style={{ borderLeft: '4px solid #000000' }}>
                            <span className="block text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#9ca3af' }}>{t('field.maritalStatus')}</span>
                            <span className="text-xl font-bold truncate">{personal.maritalStatus}</span>
                        </div>
                        <div className="pl-4" style={{ borderLeft: '4px solid #000000' }}>
                            <span className="block text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#9ca3af' }}>{t('field.rashi')}</span>
                            <span className="text-lg font-bold">{personal.rashi}</span>
                        </div>
                        <div className="pl-4" style={{ borderLeft: '4px solid #000000' }}>
                            <span className="block text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#9ca3af' }}>{t('field.religion')}</span>
                            <span className="text-lg font-bold">{personal.religion}</span>
                        </div>
                        <div className="pl-4" style={{ borderLeft: '4px solid #000000' }}>
                            <span className="block text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#9ca3af' }}>{t('field.caste')}</span>
                            <span className="text-lg font-bold">{personal.caste}</span>
                        </div>
                    </div>
                </div>

                {/* Right Column 75% - The Grid */}
                <div className="w-3/4 flex flex-col">
                    <div className="mb-12">
                        <h3 className="inline-block px-2 py-1 text-xs font-black uppercase tracking-widest mb-4" style={{ backgroundColor: '#000000', color: '#ffffff' }}>About</h3>
                        <p className="text-xl font-light leading-relaxed whitespace-pre-line" style={{ color: '#1f2937' }}>
                            {education.aboutMe || "A brief introduction about personality, values, and what is expected from a partner."}
                        </p>
                    </div>

                    <div className="flex flex-row mb-12">
                        <div className="w-1/2 pr-6">
                            <h3 className="inline-block px-2 py-1 text-xs font-black uppercase tracking-widest mb-6" style={{ backgroundColor: '#000000', color: '#ffffff' }}>{t('section.education')}</h3>
                            <div className="space-y-4">
                                <DetailItem label={t('field.education')} value={education.education} />
                                <DetailItem label={t('field.occupation')} value={education.occupation} />
                                <DetailItem label={t('field.company')} value={education.company} />
                                <DetailItem label={t('field.income')} value={education.income} />
                            </div>
                        </div>

                        <div className="w-1/2 pl-6">
                            <h3 className="inline-block px-2 py-1 text-xs font-black uppercase tracking-widest mb-6" style={{ backgroundColor: '#000000', color: '#ffffff' }}>{t('section.family')}</h3>
                            <div className="space-y-4">
                                <DetailItem label={t('field.fatherName')} value={family.fatherName} />
                                <DetailItem label={t('field.motherName')} value={family.motherName} />
                                <DetailItem label={t('field.siblings')} value={family.siblings} />
                                <DetailItem label={t('field.nativePlace')} value={family.nativePlace} />
                                <div className="flex flex-row mt-4">
                                    <div className="w-1/2 pr-2"><DetailItem label={t('field.familyType')} value={family.familyType} /></div>
                                    <div className="w-1/2 pl-2"><DetailItem label={t('field.values')} value={family.familyValues} /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 flex justify-between items-end border-t" style={{ borderColor: '#e5e7eb' }}>
                        <div>
                            <h3 className="inline-block px-2 py-1 text-xs font-black uppercase tracking-widest mb-2" style={{ backgroundColor: '#000000', color: '#ffffff' }}>{t('section.contact')}</h3>
                            <p className="font-bold text-lg">{contact.contactNumber}</p>
                            <p style={{ color: '#6b7280' }}>{contact.email}</p>
                        </div>
                        <div className="text-right max-w-xs">
                            <p className="text-sm whitespace-pre-line" style={{ color: '#9ca3af' }}>{contact.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

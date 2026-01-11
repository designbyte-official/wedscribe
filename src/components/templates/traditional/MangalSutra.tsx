import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage } from '../shared';
import { useLanguage } from '@/context/LanguageContext';

const BG_COUNT = 28;
const backgrounds = Array.from({ length: BG_COUNT }, (_, i) => `/template-backgrounds/bg-${String(i + 1).padStart(2, '0')}.jpeg`);

interface Props {
    profile: BiodataProfile;
}

export const MangalSutra: React.FC<Props> = ({ profile }) => {
    const { t } = useLanguage();
    const { personal, education, family, contact } = profile;
    const currentBg = backgrounds[27]; // bg-28

    const fieldRow = (label: string, value?: string | null) =>
        value ? (
            <div className="flex gap-2 text-[13px] leading-relaxed">
                <span className="font-semibold min-w-[100px]" style={{ color: '#701a35' }}>{label}:</span>
                <span className="flex-1" style={{ color: '#1c0a00' }}>{value}</span>
            </div>
        ) : null;

    return (
        <div className="relative w-full h-full flex items-center justify-center py-2 px-2" style={{ backgroundColor: '#f5f5f5' }}>
            <div
                className="relative w-[210mm] h-[297mm] max-w-full overflow-hidden"
                style={{
                    backgroundImage: `url(${currentBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    fontFamily: "'Crimson Pro', serif"
                }}
            >
                {/* Content starts below Ganesha - centered layout */}
                <div className="absolute top-[120px] left-0 right-0 bottom-0 px-16 pb-12 flex flex-col">

                    {/* Centered Photo and Name */}
                    <div className="flex flex-col items-center text-center mb-6 pb-4" style={{ borderBottom: '2px solid #881337' }}>
                        <div className="w-32 h-40 rounded-lg overflow-hidden border-4 bg-white shadow-lg mb-4" style={{ borderColor: '#881337' }}>
                            {personal.photoUrl ? (
                                <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <PlaceholderImage className="w-full h-full text-slate-300" />
                            )}
                        </div>
                        <h1
                            className="text-4xl font-bold tracking-tight leading-tight mb-1"
                            style={{ color: '#4c0519', fontFamily: "'Cinzel', serif" }}
                        >
                            {personal.fullName}
                        </h1>
                        {education.occupation && (
                            <p className="text-sm uppercase tracking-[0.15em] font-medium" style={{ color: '#701a35' }}>
                                {education.occupation}
                            </p>
                        )}
                    </div>

                    {/* Three Column Layout for Better Space Utilization */}
                    <div className="grid grid-cols-2 gap-6 flex-1">
                        {/* Left Column - Personal & Family */}
                        <div className="space-y-4">
                            <section className="space-y-2">
                                <h2 className="text-base font-bold mb-2 pb-1" style={{ color: '#4c0519', borderBottom: '1px solid #881337', fontFamily: "'Cinzel', serif" }}>
                                    {t('section.personal')}
                                </h2>
                                <div className="space-y-1.5">
                                    {fieldRow(t('field.dob'), personal.dateOfBirth)}
                                    {fieldRow(t('field.tob'), personal.timeOfBirth)}
                                    {fieldRow(t('field.pob'), personal.placeOfBirth)}
                                    {fieldRow(t('field.height'), personal.height)}
                                    {fieldRow(t('field.weight'), personal.weight)}
                                    {fieldRow(t('field.bloodGroup'), personal.bloodGroup)}
                                    {fieldRow(t('field.complexion'), personal.complexion)}
                                    {fieldRow(t('field.maritalStatus'), personal.maritalStatus)}
                                    {fieldRow(t('field.religion'), personal.religion)}
                                    {fieldRow(t('field.caste'), personal.caste)}
                                    {fieldRow(t('field.subCaste'), personal.subCaste)}
                                    {fieldRow(t('field.manglik'), personal.manglik)}
                                </div>
                            </section>

                            <section className="space-y-2">
                                <h2 className="text-base font-bold mb-2 pb-1" style={{ color: '#4c0519', borderBottom: '1px solid #881337', fontFamily: "'Cinzel', serif" }}>
                                    {t('section.family')}
                                </h2>
                                <div className="space-y-1.5">
                                    {fieldRow(
                                        t('field.fatherName'),
                                        family.fatherName && family.fatherOccupation
                                            ? `${family.fatherName} (${family.fatherOccupation})`
                                            : family.fatherName || family.fatherOccupation
                                    )}
                                    {fieldRow(
                                        t('field.motherName'),
                                        family.motherName && family.motherOccupation
                                            ? `${family.motherName} (${family.motherOccupation})`
                                            : family.motherName || family.motherOccupation
                                    )}
                                    {fieldRow(t('field.familyType'), family.familyType)}
                                    {fieldRow(t('field.values'), family.familyValues)}
                                    {fieldRow(t('field.siblings'), family.siblings)}
                                    {fieldRow(t('field.nativePlace'), family.nativePlace)}
                                </div>
                            </section>
                        </div>

                        {/* Right Column - Education, About, Contact */}
                        <div className="space-y-4">
                            <section className="space-y-2">
                                <h2 className="text-base font-bold mb-2 pb-1" style={{ color: '#4c0519', borderBottom: '1px solid #881337', fontFamily: "'Cinzel', serif" }}>
                                    {t('section.education')}
                                </h2>
                                <div className="space-y-1.5">
                                    {fieldRow(t('field.education'), education.education)}
                                    {fieldRow(t('field.occupation'), education.occupation)}
                                    {fieldRow(t('field.company'), education.company)}
                                    {fieldRow(t('field.income'), education.income)}
                                </div>
                            </section>

                            {education.aboutMe && (
                                <section className="space-y-2">
                                    <h2 className="text-base font-bold mb-2 pb-1" style={{ color: '#4c0519', borderBottom: '1px solid #881337', fontFamily: "'Cinzel', serif" }}>
                                        {t('field.aboutMe')}
                                    </h2>
                                    <p className="text-[13px] leading-relaxed whitespace-pre-line" style={{ color: '#1c0a00' }}>
                                        {education.aboutMe}
                                    </p>
                                </section>
                            )}

                            <section className="space-y-2">
                                <h2 className="text-base font-bold mb-2 pb-1" style={{ color: '#4c0519', borderBottom: '1px solid #881337', fontFamily: "'Cinzel', serif" }}>
                                    {t('section.contact')}
                                </h2>
                                <div className="space-y-1.5">
                                    {fieldRow(t('field.contactNumber') || 'Contact Number', contact.contactNumber)}
                                    {fieldRow(t('field.email') || 'Email', contact.email)}
                                    {contact.address && (
                                        <div className="flex gap-2 text-[13px] leading-relaxed">
                                            <span className="font-semibold min-w-[100px]" style={{ color: '#701a35' }}>
                                                {t('field.address') || 'Address'}:
                                            </span>
                                            <span className="flex-1 whitespace-pre-line" style={{ color: '#1c0a00' }}>
                                                {contact.address}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MangalSutra;

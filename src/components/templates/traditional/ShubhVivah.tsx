import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage } from '../shared';
import { useLanguage } from '@/context/LanguageContext';

const BG_COUNT = 28;
const backgrounds = Array.from({ length: BG_COUNT }, (_, i) => `/template-backgrounds/bg-${String(i + 1).padStart(2, '0')}.jpeg`);

interface Props {
    profile: BiodataProfile;
}

export const ShubhVivah: React.FC<Props> = ({ profile }) => {
    const { t } = useLanguage();
    const { personal, education, family, contact } = profile;
    const currentBg = backgrounds[26]; // bg-27

    const fieldRow = (label: string, value?: string | null) =>
        value ? (
            <div className="flex gap-2 text-[13px] leading-relaxed">
                <span className="font-semibold min-w-[110px]" style={{ color: '#fde68a' }}>{label}:</span>
                <span className="flex-1" style={{ color: '#fef3c7' }}>{value}</span>
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
                {/* Top section - Leave space for Ganesha (approx 180px) */}
                <div className="absolute top-[180px] left-0 right-0 bottom-0 px-12 pb-12 flex flex-col gap-4">

                    {/* Photo and Name Section - Horizontal Layout */}
                    <div className="flex items-center gap-6 pb-4" style={{ borderBottom: '2px solid #fcd34d' }}>
                        <div className="w-28 h-36 rounded-lg overflow-hidden border-4 bg-white shadow-lg shrink-0" style={{ borderColor: '#fcd34d' }}>
                            {personal.photoUrl ? (
                                <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <PlaceholderImage className="w-full h-full text-slate-300" />
                            )}
                        </div>
                        <div className="flex-1">
                            <h1
                                className="text-4xl font-bold tracking-tight leading-tight mb-1"
                                style={{ color: '#fbbf24', fontFamily: "'Cinzel', serif" }}
                            >
                                {personal.fullName}
                            </h1>
                            {education.occupation && (
                                <p className="text-sm uppercase tracking-[0.15em] font-medium" style={{ color: '#fde68a' }}>
                                    {education.occupation}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-2 gap-6 flex-1">
                        {/* Left Column */}
                        <div className="space-y-4">
                            <section className="space-y-2">
                                <h2 className="text-lg font-bold mb-2 pb-1" style={{ color: '#fbbf24', borderBottom: '1px solid #fcd34d' }}>
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
                                <h2 className="text-lg font-bold mb-2 pb-1" style={{ color: '#fbbf24', borderBottom: '1px solid #fcd34d' }}>
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

                        {/* Right Column */}
                        <div className="space-y-4">
                            <section className="space-y-2">
                                <h2 className="text-lg font-bold mb-2 pb-1" style={{ color: '#fbbf24', borderBottom: '1px solid #fcd34d' }}>
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
                                    <h2 className="text-lg font-bold mb-2 pb-1" style={{ color: '#fbbf24', borderBottom: '1px solid #fcd34d' }}>
                                        {t('field.aboutMe')}
                                    </h2>
                                    <p className="text-[13px] leading-relaxed whitespace-pre-line" style={{ color: '#fef3c7' }}>
                                        {education.aboutMe}
                                    </p>
                                </section>
                            )}

                            <section className="space-y-2">
                                <h2 className="text-lg font-bold mb-2 pb-1" style={{ color: '#fbbf24', borderBottom: '1px solid #fcd34d' }}>
                                    {t('section.contact')}
                                </h2>
                                <div className="space-y-1.5">
                                    {fieldRow(t('field.contactNumber') || 'Contact Number', contact.contactNumber)}
                                    {fieldRow(t('field.email') || 'Email', contact.email)}
                                    {contact.address && (
                                        <div className="flex gap-2 text-[13px] leading-relaxed">
                                            <span className="font-semibold min-w-[110px]" style={{ color: '#fde68a' }}>
                                                {t('field.address') || 'Address'}:
                                            </span>
                                            <span className="flex-1 whitespace-pre-line" style={{ color: '#fef3c7' }}>
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

export default ShubhVivah;

import React from 'react';
import { BiodataProfile } from '@/types';
import { PlaceholderImage } from './shared';
import { useProfileStore } from '@/store/profileStore';
import { useLanguage } from '@/context/LanguageContext';

const BG_COUNT = 31;
const backgrounds = Array.from({ length: BG_COUNT }, (_, i) => `/template-backgrounds/bg-${String(i + 1).padStart(2, '0')}.jpeg`);

export interface BackgroundTemplateStyleProps {
    backgroundIndex: number;
    fontFamily: string;
    headingColor: string;
    textColor: string;
    labelColor: string;
    borderColor: string;
    headingFontFamily?: string;
    fontSize?: {
        heading: string;
        subheading: string;
        label: string;
        text: string;
    };
    padding?: {
        top: string;
        bottom: string;
        left: string;
        right: string;
    };
    photoPosition?: 'top-left' | 'top-center' | 'header-left';
}

interface Props {
    profile: BiodataProfile;
    styleProps: BackgroundTemplateStyleProps;
}

export const BackgroundTemplate: React.FC<Props> = ({ profile, styleProps }) => {
    const { t } = useLanguage();
    const { customStyles } = useProfileStore();
    const { personal, education, family, contact } = profile;

    const {
        backgroundIndex,
        fontFamily,
        headingColor,
        textColor,
        labelColor,
        borderColor,
        headingFontFamily = fontFamily,
        fontSize = {
            heading: '4xl',
            subheading: 'base',
            label: '[13px]',
            text: '[13px]'
        },
        padding = {
            top: '80px',
            bottom: '48px',
            left: '64px',
            right: '64px'
        },
        photoPosition = 'header-left'
    } = { ...styleProps, ...customStyles }; // Merge custom styles over defaults

    const currentBg = backgrounds[backgroundIndex % BG_COUNT];

    const fieldRow = (label: string, value?: string | null) =>
        value ? (
            <div className={`flex gap-2 text-${fontSize.text} leading-relaxed`} style={{ color: textColor }}>
                <span className="font-semibold min-w-[110px]" style={{ color: labelColor }}>{label}:</span>
                <span className="flex-1">{value}</span>
            </div>
        ) : null;

    return (
        <div className="relative w-full h-full flex items-center justify-center" style={{ backgroundColor: '#f5f5f5' }}>
            <div
                className="relative w-[210mm] h-[297mm] max-w-full overflow-hidden"
                style={{
                    backgroundImage: `url(${currentBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    fontFamily: fontFamily
                }}
            >
                <div
                    className="relative h-full flex flex-col gap-6"
                    style={{
                        paddingTop: padding.top,
                        paddingBottom: padding.bottom,
                        paddingLeft: padding.left,
                        paddingRight: padding.right
                    }}
                >
                    {/* Header */}
                    <header className="flex items-start gap-6 pb-4" style={{ borderBottom: `1px solid ${borderColor}` }}>
                        <div className="w-32 h-40 rounded-sm overflow-hidden border-2 bg-white shadow-sm shrink-0" style={{ borderColor: borderColor }}>
                            {personal.photoUrl ? (
                                <img src={personal.photoUrl} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <PlaceholderImage className="w-full h-full text-slate-300" />
                            )}
                        </div>
                        <div className="flex-1 space-y-1.5 pt-1">
                            <h1
                                className={`text-${fontSize.heading} font-bold tracking-tight leading-tight`}
                                style={{ color: headingColor, fontFamily: headingFontFamily }}
                            >
                                {personal.fullName}
                            </h1>
                            {education.occupation && (
                                <p
                                    className={`text-${fontSize.subheading} uppercase tracking-[0.15em] font-medium`}
                                    style={{ color: labelColor }}
                                >
                                    {education.occupation}
                                </p>
                            )}
                        </div>
                    </header>

                    {/* Two Column Grid */}
                    <div className="grid grid-cols-2 gap-8 flex-1">
                        {/* Left Column */}
                        <div className="space-y-5">
                            <section className="space-y-2.5">
                                <h2
                                    className={`text-lg font-bold mb-2 pb-1`}
                                    style={{ color: headingColor, borderBottom: `1px solid ${borderColor}` }}
                                >
                                    {t('section.personal')}
                                </h2>
                                <div className="space-y-2">
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

                            <section className="space-y-2.5">
                                <h2
                                    className={`text-lg font-bold mb-2 pb-1`}
                                    style={{ color: headingColor, borderBottom: `1px solid ${borderColor}` }}
                                >
                                    {t('section.family')}
                                </h2>
                                <div className="space-y-2">
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
                        <div className="space-y-5">
                            <section className="space-y-2.5">
                                <h2
                                    className={`text-lg font-bold mb-2 pb-1`}
                                    style={{ color: headingColor, borderBottom: `1px solid ${borderColor}` }}
                                >
                                    {t('section.education')}
                                </h2>
                                <div className="space-y-2">
                                    {fieldRow(t('field.education'), education.education)}
                                    {fieldRow(t('field.occupation'), education.occupation)}
                                    {fieldRow(t('field.company'), education.company)}
                                    {fieldRow(t('field.income'), education.income)}
                                </div>
                            </section>

                            {education.aboutMe && (
                                <section className="space-y-2.5">
                                    <h2
                                        className={`text-lg font-bold mb-2 pb-1`}
                                        style={{ color: headingColor, borderBottom: `1px solid ${borderColor}` }}
                                    >
                                        {t('field.aboutMe')}
                                    </h2>
                                    <p
                                        className={`text-${fontSize.text} leading-relaxed whitespace-pre-line`}
                                        style={{ color: textColor }}
                                    >
                                        {education.aboutMe}
                                    </p>
                                </section>
                            )}

                            <section className="space-y-2.5">
                                <h2
                                    className={`text-lg font-bold mb-2 pb-1`}
                                    style={{ color: headingColor, borderBottom: `1px solid ${borderColor}` }}
                                >
                                    {t('section.contact')}
                                </h2>
                                <div className="space-y-2">
                                    {fieldRow(t('field.contactNumber') || 'Contact Number', contact.contactNumber)}
                                    {fieldRow(t('field.email') || 'Email', contact.email)}
                                    {contact.address && (
                                        <div className={`flex gap-2 text-${fontSize.text} leading-relaxed`}>
                                            <span className="font-semibold min-w-[110px]" style={{ color: labelColor }}>
                                                {t('field.address') || 'Address'}:
                                            </span>
                                            <span className="flex-1 whitespace-pre-line" style={{ color: textColor }}>
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

export default BackgroundTemplate;

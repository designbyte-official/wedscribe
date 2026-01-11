import { BackgroundTemplateStyleProps } from './components/templates/BackgroundTemplate';

export interface TemplateConfig {
    id: string;
    name: string;
    badge: string;
    colorClass: string;
    styleProps: BackgroundTemplateStyleProps;
}

export const TEMPLATE_CONFIGS: Record<string, TemplateConfig> = {
    VELVET_ROSE: {
        id: 'VELVET_ROSE',
        name: 'Velvet Rose',
        badge: 'Elegant',
        colorClass: 'bg-rose-50 text-rose-900',
        styleProps: {
            backgroundIndex: 3,
            fontFamily: "'Playfair Display', serif",
            headingFontFamily: "'Playfair Display', serif",
            headingColor: '#831843',
            textColor: '#4a1c2e',
            labelColor: '#9d174d',
            borderColor: '#fda4af',
            fontSize: {
                heading: '4xl',
                subheading: 'base',
                label: '[13px]',
                text: '[13px]'
            }
        }
    },

    GOLDEN_HERITAGE: {
        id: 'GOLDEN_HERITAGE',
        name: 'Golden Heritage',
        badge: 'Classic',
        colorClass: 'bg-amber-50 text-amber-900',
        styleProps: {
            backgroundIndex: 15,
            fontFamily: "'Cormorant Garamond', serif",
            headingFontFamily: "'Cormorant Garamond', serif",
            headingColor: '#78350f',
            textColor: '#451a03',
            labelColor: '#92400e',
            borderColor: '#fbbf24',
            fontSize: {
                heading: '4xl',
                subheading: 'base',
                label: '[13px]',
                text: '[13px]'
            }
        }
    },

    PHOOL_MALA: {
        id: 'PHOOL_MALA',
        name: 'Phool Mala',
        badge: 'Festive',
        colorClass: 'bg-orange-50 text-orange-900',
        styleProps: {
            backgroundIndex: 28, // bg-29 (flower garland background)
            fontFamily: "'Crimson Pro', serif",
            headingFontFamily: "'Cinzel', serif",
            headingColor: '#7c2d12', // Deep brown for headings
            textColor: '#1c0a00', // Very dark brown for text
            labelColor: '#92400e', // Medium brown for labels
            borderColor: '#ea580c', // Orange for borders
            fontSize: {
                heading: '4xl',
                subheading: 'base',
                label: '[13px]',
                text: '[13px]'
            },
            padding: {
                top: '100px', // Space for flower garlands at top
                bottom: '100px', // Space for lotus at bottom
                left: '70px',
                right: '70px'
            }
        }
    },

    SUVARNA_MANDALA: {
        id: 'SUVARNA_MANDALA',
        name: 'Suvarna Mandala',
        badge: 'Elegant',
        colorClass: 'bg-amber-50 text-amber-900',
        styleProps: {
            backgroundIndex: 29, // bg-30 (cream/gold mandala background)
            fontFamily: "'Crimson Pro', serif",
            headingFontFamily: "'Cinzel', serif",
            headingColor: '#78350f', // Deep brown for headings
            textColor: '#1c0a00', // Very dark brown for text
            labelColor: '#92400e', // Medium brown for labels
            borderColor: '#d97706', // Golden amber for borders
            fontSize: {
                heading: '4xl',
                subheading: 'base',
                label: '[13px]',
                text: '[13px]'
            },
            padding: {
                top: '80px',
                bottom: '80px',
                left: '70px',
                right: '70px'
            }
        }
    },

    LAAL_PHOOL: {
        id: 'LAAL_PHOOL',
        name: 'Laal Phool',
        badge: 'Traditional',
        colorClass: 'bg-red-900 text-amber-50',
        styleProps: {
            backgroundIndex: 30, // bg-31 (red border with cream center)
            fontFamily: "'Outfit', sans-serif",
            headingFontFamily: "'Outfit', sans-serif",
            headingColor: '#7f1d1d', // Deep red for headings
            textColor: '#1c0a00', // Very dark brown for text
            labelColor: '#991b1b', // Rich red for labels
            borderColor: '#b91c1c', // Bright red for borders
            fontSize: {
                heading: '4xl',
                subheading: 'base',
                label: '[13px]',
                text: '[13px]'
            },
            padding: {
                top: '90px', // Space for floral corners
                bottom: '90px', // Space for floral corners
                left: '75px',
                right: '75px'
            }
        }
    }
};



// Generate configurations for all 31 backgrounds
const generateBackgroundConfigs = () => {
    const configs: Record<string, TemplateConfig> = {};
    const styles = [
        { font: "'Fraunces', serif", color: '#831843', text: '#4a1c2e', border: '#fda4af', bg: 'bg-rose-50 text-rose-900', badge: 'Floral' },
        { font: "'Cormorant Garamond', serif", color: '#78350f', text: '#451a03', border: '#fbbf24', bg: 'bg-amber-50 text-amber-900', badge: 'Classic' },
        { font: "'Crimson Pro', serif", color: '#14532d', text: '#052e16', border: '#4ade80', bg: 'bg-green-50 text-green-900', badge: 'Nature' },
        { font: "'Playfair Display', serif", color: '#7c2d12', text: '#431407', border: '#fdba74', bg: 'bg-orange-50 text-orange-900', badge: 'Royal' },
        { font: "'Cinzel', serif", color: '#1e3a8a', text: '#172554', border: '#93c5fd', bg: 'bg-blue-50 text-blue-900', badge: 'Modern' },
    ];

    for (let i = 1; i <= 31; i++) {
        const id = `BG_TEMPLATE_${String(i).padStart(2, '0')}`;
        const style = styles[i % styles.length];

        configs[id] = {
            id,
            name: `Premium Design ${String(i).padStart(2, '0')}`,
            badge: style.badge,
            colorClass: style.bg,
            styleProps: {
                backgroundIndex: i - 1, // 0-based index
                fontFamily: style.font,
                headingFontFamily: style.font,
                headingColor: style.color,
                textColor: style.text,
                labelColor: style.color,
                borderColor: style.border,
                fontSize: {
                    heading: '4xl',
                    subheading: 'base',
                    label: '[13px]',
                    text: '[13px]'
                },
                padding: {
                    top: '80px',
                    bottom: '60px',
                    left: '64px',
                    right: '64px'
                }
            }
        };
    }
    return configs;
};

const BG_CONFIGS = generateBackgroundConfigs();

// Merge manually defined configs with generated ones
export const ALL_TEMPLATE_CONFIGS = { ...TEMPLATE_CONFIGS, ...BG_CONFIGS };

// List of templates to display in UI (in order)
export const TEMPLATE_DISPLAY_LIST: TemplateConfig[] = [
    // Priority Templates (Requested by user)
    BG_CONFIGS['BG_TEMPLATE_29'],
    BG_CONFIGS['BG_TEMPLATE_30'],

    // Spread all other generated background templates (excluding priority ones)
    ...Object.values(BG_CONFIGS).filter(c => c.id !== 'BG_TEMPLATE_29' && c.id !== 'BG_TEMPLATE_30')
];

// Helper function to get template config
export const getTemplateConfig = (templateId: string): TemplateConfig | undefined => {
    return ALL_TEMPLATE_CONFIGS[templateId];
};

// Get all template IDs
export const getAllTemplateIds = (): string[] => {
    return Object.keys(ALL_TEMPLATE_CONFIGS);
};

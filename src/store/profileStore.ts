import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BiodataProfile, INITIAL_PROFILE, TemplateType } from '../types';

interface CustomStyles {
  fontFamily?: string;
  headingFontFamily?: string;
  textColor?: string;
  headingColor?: string;
  labelColor?: string;
  borderColor?: string;
}

interface ProfileStore {
  profile: BiodataProfile;
  activeTemplate: TemplateType;
  backgroundIndex: number;
  customStyles: CustomStyles;
  setProfile: (profile: BiodataProfile) => void;
  updateSection: (section: keyof BiodataProfile, field: string, value: string) => void;
  setActiveTemplate: (template: TemplateType) => void;
  setBackgroundIndex: (index: number) => void;
  updateCustomStyle: (style: Partial<CustomStyles>) => void;
  resetProfile: () => void;
}

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profile: INITIAL_PROFILE,
      activeTemplate: TemplateType.BG_TEMPLATE_29, // Default to user preference
      backgroundIndex: 0,
      customStyles: {},
      setProfile: (profile) => set({ profile }),
      updateSection: (section, field, value) =>
        set((state) => ({
          profile: {
            ...state.profile,
            [section]: {
              ...state.profile[section],
              [field]: value,
            },
          },
        })),
      setActiveTemplate: (template) => set({ activeTemplate: template, customStyles: {} }), // Reset custom styles on template change
      setBackgroundIndex: (index) => set({ backgroundIndex: index }),
      updateCustomStyle: (style) => set((state) => ({ customStyles: { ...state.customStyles, ...style } })),
      resetProfile: () => set({ profile: INITIAL_PROFILE, customStyles: {} }),
    }),
    {
      name: 'weds_profile',
    }
  )
);


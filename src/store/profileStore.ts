import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BiodataProfile, INITIAL_PROFILE, TemplateType } from '../types';

interface ProfileStore {
  profile: BiodataProfile;
  activeTemplate: TemplateType;
  backgroundIndex: number;
  setProfile: (profile: BiodataProfile) => void;
  updateSection: (section: keyof BiodataProfile, field: string, value: string) => void;
  setActiveTemplate: (template: TemplateType) => void;
  setBackgroundIndex: (index: number) => void;
  resetProfile: () => void;
}

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profile: INITIAL_PROFILE,
      activeTemplate: TemplateType.SKY_BLOSSOM,
      backgroundIndex: 0,
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
      setActiveTemplate: (template) => set({ activeTemplate: template }),
      setBackgroundIndex: (index) => set({ backgroundIndex: index }),
      resetProfile: () => set({ profile: INITIAL_PROFILE }),
    }),
    {
      name: 'weds_profile',
    }
  )
);


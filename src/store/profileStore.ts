import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BiodataProfile, INITIAL_PROFILE } from '../types';

interface ProfileStore {
  profile: BiodataProfile;
  setProfile: (profile: BiodataProfile) => void;
  updateSection: (section: keyof BiodataProfile, field: string, value: string) => void;
  resetProfile: () => void;
}

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profile: INITIAL_PROFILE,
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
      resetProfile: () => set({ profile: INITIAL_PROFILE }),
    }),
    {
      name: 'weds_profile',
    }
  )
);



export enum TemplateType {
  SKY_BLOSSOM = 'SKY_BLOSSOM',
  REGAL_ANVIKA = 'REGAL_ANVIKA',
  IVORY_LINES = 'IVORY_LINES',
  MINT_BLOSSOM = 'MINT_BLOSSOM',
  ROYAL_RED = 'ROYAL_RED',
  MINIMALIST = 'MINIMALIST',
  SACRED_SAFFRON = 'SACRED_SAFFRON',
  NOOR_CRESCENT = 'NOOR_CRESCENT',
  GRACEFUL_LILY = 'GRACEFUL_LILY',
  CLASSIC_GOLD = 'CLASSIC_GOLD',
  MODERN_SLATE = 'MODERN_SLATE',
  PASTEL_PEONY = 'PASTEL_PEONY',
  NAVY_MINIMAL = 'NAVY_MINIMAL',
  RUSTIC_KRAFT = 'RUSTIC_KRAFT',
  EMERALD_LEAF = 'EMERALD_LEAF',
  BLUSH_MARBLE = 'BLUSH_MARBLE',
  DESERT_SANDS = 'DESERT_SANDS',
  LAVENDER_MIST = 'LAVENDER_MIST',
  NOIR_ELEGANT = 'NOIR_ELEGANT',
  AQUA_GLASS = 'AQUA_GLASS',
  IVORY_MODERN = 'IVORY_MODERN',
  KALYAN_MANDAP = 'KALYAN_MANDAP',
  ZEHRA_CRESCENT = 'ZEHRA_CRESCENT',
  GRACE_CHAPEL = 'GRACE_CHAPEL',
  KHALSA_HERITAGE = 'KHALSA_HERITAGE',
  SHANTI_JAIN = 'SHANTI_JAIN',
  LOTUS_SERENITY = 'LOTUS_SERENITY',
  RANGOLI_FESTIVE = 'RANGOLI_FESTIVE',
  HERITAGE_PEACOCK = 'HERITAGE_PEACOCK',
  MONSOON_TEAL = 'MONSOON_TEAL',
  MAROON_HERITAGE = 'MAROON_HERITAGE',
  ROYAL_MANDALA = 'ROYAL_MANDALA',
  EMERALD_CRESCENT = 'EMERALD_CRESCENT',
}

export interface PersonalDetails {
  fullName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  height: string;
  weight: string;
  complexion: string;
  bloodGroup: string;
  religion: string;
  caste: string;
  subCaste: string;
  gothra: string;
  rashi: string;
  nakshatra: string;
  manglik: string;
  maritalStatus: string;
  photoUrl: string | null;
}

export interface EducationCareer {
  education: string;
  occupation: string;
  company: string;
  income: string;
  aboutMe: string; // AI Generated
}

export interface FamilyDetails {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  siblings: string;
  nativePlace: string;
  familyType: string; // Nuclear/Joint
  familyValues: string; // Orthodox/Moderate/Liberal
}

export interface ContactDetails {
  contactNumber: string;
  email: string;
  address: string;
}

export interface BiodataProfile {
  personal: PersonalDetails;
  education: EducationCareer;
  family: FamilyDetails;
  contact: ContactDetails;
}

export const INITIAL_PROFILE: BiodataProfile = {
  personal: {
    fullName: 'Vikram Aditya Singh',
    dateOfBirth: '1995-10-24',
    timeOfBirth: '10:45 AM',
    placeOfBirth: 'Udaipur, Rajasthan',
    height: '5ft 11in',
    weight: '75 kg',
    complexion: 'Wheatish Fair',
    bloodGroup: 'O+',
    religion: 'Hindu',
    caste: 'Rajput',
    subCaste: 'Sisodia',
    gothra: 'Kashyap',
    rashi: 'Tula (Libra)',
    nakshatra: 'Swati',
    manglik: 'Non-Manglik',
    maritalStatus: 'Never Married',
    photoUrl: null
  },
  education: {
    education: 'MBA, IIM Bangalore\nB.Tech (CS), IIT Delhi',
    occupation: 'Senior Product Manager',
    company: 'Microsoft, Hyderabad',
    income: '48 LPA + Stocks',
    aboutMe: 'I am a blend of modern aspirations and traditional values. Having spent 3 years in the corporate world, I have a broad outlook on life but remain deeply rooted in my culture. I am passionate about fitness, historical literature, and travel. I am looking for a partner who is educated, independent, and willing to build a relationship based on mutual respect and friendship.'
  },
  family: {
    fatherName: 'Mr. Rajveer Singh',
    fatherOccupation: 'IPS Officer (IGP, Rajasthan Police)',
    motherName: 'Mrs. Sunita Singh',
    motherOccupation: 'Principal, St. Mary\'s School',
    siblings: '1 Elder Sister (Married to Army Major)\n1 Younger Brother (Pursuing Law)',
    nativePlace: 'Ancestral Home in Kumbhalgarh',
    familyType: 'Joint Family',
    familyValues: 'Moderate'
  },
  contact: {
    contactNumber: '+91 98765 43210',
    email: 'vikram.singh@email.com',
    address: '45, "Surya Niwas",\nCivil Lines, Jaipur,\nRajasthan - 302006'
  }
};

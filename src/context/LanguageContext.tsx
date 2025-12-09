import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

// Basic dictionary for initial implementation
export const translations: Translations = {
  // Navigation / Common
  'nav.features': { en: 'Features', hi: 'विशेषताएँ' },
  'nav.templates': { en: 'Templates', hi: 'टेम्पलेट्स' },
  'nav.faq': { en: 'FAQ', hi: 'सामान्य प्रश्न' },
  'nav.create': { en: 'Create Now', hi: 'अभी बनाएँ' },
  'nav.login': { en: 'Login', hi: 'लॉग इन' },
  
  // Editor Headers
  'editor.back': { en: 'Back', hi: 'वापस' },
  'editor.reset': { en: 'Reset', hi: 'रीसेट' },
  'editor.print': { en: 'Print / PDF', hi: 'प्रिंट / पीडीएफ' },
  'editor.tab.templates': { en: 'Templates', hi: 'टेम्पलेट्स' },
  'editor.tab.edit': { en: 'Edit Biodata', hi: 'बायोडेटा संपादित करें' },
  
  // Personal Details
  'section.personal': { en: 'Personal Details', hi: 'व्यक्तिगत विवरण' },
  'field.name': { en: 'Full Name', hi: 'पूरा नाम' },
  'field.dob': { en: 'Date of Birth', hi: 'जन्म तिथि' },
  'field.tob': { en: 'Time of Birth', hi: 'जन्म समय' },
  'field.pob': { en: 'Place of Birth', hi: 'जन्म स्थान' },
  'field.height': { en: 'Height', hi: 'ऊंचाई' },
  'field.caste': { en: 'Caste / Community', hi: 'जाति / समुदाय' },
  'field.religion': { en: 'Religion', hi: 'धर्म' },
  'field.manglik': { en: 'Manglik Status', hi: 'मांगलिक स्थिति' },
  'field.photo': { en: 'Profile Photo', hi: 'प्रोफाइल फोटो' },

  // Education & Career
  'section.education': { en: 'Education & Career', hi: 'शिक्षा और करियर' },
  'field.education': { en: 'Education Qualification', hi: 'शैक्षिक योग्यता' },
  'field.occupation': { en: 'Occupation / Job', hi: 'व्यवसाय / नौकरी' },
  'field.income': { en: 'Annual Income', hi: 'वार्षिक आय' },
  'field.about': { en: 'About Me', hi: 'मेरे बारे में' },
  'btn.generateBio': { en: 'Generate with AI', hi: 'AI के साथ लिखें' },

  // Family Details
  'section.family': { en: 'Family Details', hi: 'परिवार का विवरण' },
  'field.fatherName': { en: 'Father\'s Name', hi: 'पिता का नाम' },
  'field.fatherOcc': { en: 'Father\'s Occupation', hi: 'पिता का व्यवसाय' },
  'field.motherName': { en: 'Mother\'s Name', hi: 'माता का नाम' },
  'field.motherOcc': { en: 'Mother\'s Occupation', hi: 'माता का व्यवसाय' },
  'field.siblings': { en: 'Siblings', hi: 'भाई-बहन' },
  'field.address': { en: 'Family Address', hi: 'घर का पता' },

  // Contact Details
  'section.contact': { en: 'Contact Details', hi: 'संपर्क विवरण' },
  'field.contactPerson': { en: 'Contact Person', hi: 'संपर्क व्यक्ति' },
  'field.phone': { en: 'Phone Number', hi: 'फ़ोन नंबर' },
  'field.email': { en: 'Email Address', hi: 'ईमेल पता' },

  // Additional Fields
  'section.habits': { en: 'Habits & Info', hi: 'आदतें और जानकारी' },
  'field.values': { en: 'Values', hi: 'मूल्य' },
  'field.familyType': { en: 'Family Type', hi: 'परिवार का प्रकार' },
  'field.gothra': { en: 'Gothra', hi: 'गोत्र' },
  'field.company': { en: 'Company', hi: 'कंपनी' },

  // Dropdown Options (Generic fallback)
  'option.select': { en: 'Select...', hi: 'चुनें...' },

  // Home Page - Hero
  'home.hero.badge': { en: "India's Premium Biodata Maker", hi: "भारत का प्रीमियम बायोडेटा निर्माता" },
  'home.hero.title.prefix': { en: "Design Your", hi: "अपना" },
  'home.hero.title.highlight': { en: "Perfect Match", hi: "परफेक्ट मैच" },
  'home.hero.title.suffix': { en: "Profile", hi: "प्रोफाइल डिज़ाइन करें" },
  'home.hero.desc': { en: "Create stunning matrimonial biodatas that leave a lasting impression. Professional templates, AI-assisted writing, and instant PDF downloads.", hi: "शानदार वैवाहिक बायोडेटा बनाएं जो अमिट छाप छोड़े। पेशेवर टेम्पलेट्स, एआई लेखन सहायता, और तुरंत पीडीएफ डाउनलोड।" },
  'home.hero.btn.create': { en: "Create Biodata", hi: "बायोडेटा बनाएँ" },
  'home.hero.btn.templates': { en: "View Templates", hi: "टेम्पलेट्स देखें" },
  'home.hero.trusted': { en: "Trusted by", hi: "भरोसा है" },
  'home.hero.families': { en: "families", hi: "परिवारों का" },
  'home.hero.status': { en: "Print Ready PDF", hi: "प्रिंट रेडी पीडीएफ" },
  'home.hero.feature': { en: "AI Writer", hi: "एआई लेखक" },

  // Home Page - Features
  'home.features.title': { en: "Everything you need", hi: "वह सब कुछ जो आपको चाहिए" },
  'home.features.subtitle': { en: "Powerful features to help you create the perfect profile.", hi: "परफेक्ट प्रोफाइल बनाने में आपकी मदद करने के लिए शक्तिशाली सुविधाएँ।" },
  'home.feature.1.title': { en: "Premium Templates", hi: "प्रीमियम टेम्पलेट्स" },
  'home.feature.1.desc': { en: "Professionally designed layouts.", hi: "पेशेवर रूप से डिज़ाइन किए गए लेआउट।" },
  'home.feature.2.title': { en: "AI Assistance", hi: "एआई सहायता" },
  'home.feature.2.desc': { en: "Write better bios instantly.", hi: "तुरंत बेहतर परिचय लिखें।" },
  'home.feature.3.title': { en: "Privacy First", hi: "गोपनीयता पहले" },
  'home.feature.3.desc': { en: "Your data stays on your device.", hi: "आपका डेटा आपके डिवाइस पर रहता है।" },
  'home.feature.4.title': { en: "Instant PDF", hi: "तुरंत पीडीएफ" },
  'home.feature.4.desc': { en: "Download high-quality PDFs.", hi: "उच्च गुणवत्ता वाले पीडीएफ डाउनलोड करें।" },

  // Home Page - Religion
  'home.religion.title': { en: "Tailored for Your", hi: "आपकी परंपराओं के" },
  'home.religion.highlight': { en: "Traditions", hi: "अनुरूप" },
  'home.religion.desc': { en: "Templates adapted to your community's requirements.", hi: "आपके समुदाय की आवश्यकताओं के अनुरूप टेम्पलेट्स।" },
  'home.religion.community': { en: "+ Your Community", hi: "+ आपका समुदाय" },

  // Home Page - AI
  'home.ai.tag': { en: "AI Powered", hi: "एआई संचालित" },
  'home.ai.title.1': { en: "Writer's Block?", hi: "क्या लिखना है पता नहीं?" },
  'home.ai.title.2': { en: "Not Anymore.", hi: "अब और नहीं।" },
  'home.ai.desc': { en: "Let our advanced AI craft the perfect bio for you.", hi: "हमारी उन्नत एआई को आपके लिए सही परिचय लिखने दें।" },
  'home.ai.btn': { en: "Try AI Writer", hi: "एआई लेखक आज़माएं" },

  // Home Page - FAQ
  'home.faq.title': { en: "Common Questions", hi: "सामान्य प्रश्न" },
  'home.faq.desc': { en: "Everything you need to know before you start.", hi: "शुरू करने से पहले आपको जो कुछ भी जानने की जरूरत है।" },
  'home.faq.q1': { en: "Is my personal data safe?", hi: "क्या मेरा व्यक्तिगत डेटा सुरक्षित है?" },
  'home.faq.a1': { en: "Yes, completely local-first.", hi: "हां, पूरी तरह से आपके डिवाइस पर सुरक्षित।" },
  'home.faq.q2': { en: "Is it free?", hi: "क्या यह मुफ़्त है?" },
  'home.faq.a2': { en: "Yes, core features are free.", hi: "हां, मुख्य सुविधाएँ मुफ़्त हैं।" },
  
  // Footer
  'footer.brand.desc': { en: "Empowering Indian families to create beautiful profiles.", hi: "भारतीय परिवारों को सुंदर प्रोफाइल बनाने के लिए सशक्त बनाना।" },
  'footer.col.product': { en: "Product", hi: "उत्पाद" },
  'footer.col.company': { en: "Company", hi: "कंपनी" },
  'footer.col.contact': { en: "Contact", hi: "संपर्क" },
  'footer.rights': { en: "All rights reserved.", hi: "सर्वाधिकार सुरक्षित।" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

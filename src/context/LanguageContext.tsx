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
  'field.aboutMe': { en: 'About Me', hi: 'मेरे बारे में' },
  'field.maritalStatus': { en: 'Marital Status', hi: 'वैवाहिक स्थिति' },
  'field.contactNumber': { en: 'Contact Number', hi: 'संपर्क नंबर' },
  'field.subCaste': { en: 'Sub Caste', hi: 'उप जाति' },
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
  'field.rashi': { en: 'Rashi', hi: 'राशि' },
  'field.nakshatra': { en: 'Nakshatra', hi: 'नक्षत्र' },
  'field.complexion': { en: 'Complexion', hi: 'वर्ण' },
  'field.weight': { en: 'Weight', hi: 'वजन' },
  'field.bloodGroup': { en: 'Blood Group', hi: 'रक्त समूह' },
  'field.nativePlace': { en: 'Native Place', hi: 'मूल निवास' },
  'field.age': { en: 'Age', hi: 'आयु' },
  'field.years': { en: 'Yrs', hi: 'वर्ष' },
  'section.astrology': { en: 'Astrology', hi: 'ज्योतिष' },
  'common.marriageBiodata': { en: 'Marriage Biodata', hi: 'विवाह बायोडाटा' },
  'template.mantra': { en: '|| Shree Ganeshay Namah ||', hi: '|| श्री गणेशाय नमः ||' },

  // Editor Labels & Sections
  'label.photo': { en: 'Profile Photo', hi: 'प्रोफ़ाइल फोटो' },
  'label.changePhoto': { en: 'Change Photo', hi: 'फोटो बदलें' },
  'label.recPhoto': { en: 'Recommended: Portrait mode', hi: 'अनुशंसित: पोर्ट्रेट मोड' },
  'label.profSummary': { en: 'Professional Summary', hi: 'पेशेवर सारांश' },
  'label.aiEnhance': { en: 'AI Enhance', hi: 'AI सुधार' },
  'label.writing': { en: 'Writing...', hi: 'लिख रहा है...' },
  'label.mobile': { en: 'Mobile Number', hi: 'मोबाइल नंबर' },
  'label.email': { en: 'Email ID', hi: 'ईमेल आईडी' },
  'label.address': { en: 'Address', hi: 'पता' },

  'section.personalInfo': { en: 'Personal Information', hi: 'व्यक्तिगत जानकारी' },
  'section.careerEdu': { en: 'Career & Education', hi: 'करियर और शिक्षा' },
  'section.familyDetails': { en: 'Family Details', hi: 'पारिवारिक विवरण' },
  'section.contactInfo': { en: 'Contact Information', hi: 'संपर्क जानकारी' },

  // Placeholders
  'placeholder.name': { en: 'e.g. Vikram Singh', hi: 'जैसे विक्रम सिंह' },
  'placeholder.height': { en: 'e.g. 5ft 11in', hi: 'जैसे 5ft 11in' },
  'placeholder.weight': { en: 'e.g. 70 kg', hi: 'जैसे 70 kg' },
  'placeholder.complexion': { en: 'e.g. Fair', hi: 'जैसे गोरा' },
  'placeholder.blood': { en: 'O+', hi: 'O+' },
  'placeholder.edu': { en: 'e.g. MBA, IIM Bangalore', hi: 'जैसे MBA, IIM Bangalore' },
  'placeholder.occ': { en: 'e.g. Senior Manager', hi: 'जैसे वरिष्ठ प्रबंधक' },
  'placeholder.income': { en: 'e.g. 25 LPA', hi: 'जैसे 25 LPA' },
  'placeholder.summary': { en: 'Write a brief summary about yourself...', hi: 'अपने बारे में एक संक्षिप्त सारांश लिखें...' },
  'placeholder.siblings': { en: 'e.g. 1 Brother, 1 Sister', hi: 'जैसे 1 भाई, 1 बहन' },

  // Dropdown Options
  'option.select': { en: 'Select...', hi: 'चुनें...' },
  'option.no': { en: 'No', hi: 'नहीं' },
  'option.yes': { en: 'Yes', hi: 'हाँ' },
  'option.anshik': { en: 'Anshik', hi: 'आंशिक' },
  'option.dontKnow': { en: "Don't Know", hi: 'पता नहीं' },

  // Home Page - Hero
  'home.hero.badge': { en: "Premium Marriage Biodata Maker", hi: "प्रीमियम वैवाहिक बायोडेटा निर्माता" },
  'home.hero.title.prefix': { en: "Design Your", hi: "अपना" },
  'home.hero.title.highlight': { en: "Perfect", hi: "परफेक्ट" },
  'home.hero.title.suffix': { en: "Marriage Biodata", hi: "विवाह बायोडाटा" },
  'home.hero.desc': { en: "Make a great first impression. Create a premium Marriage Biodata for yourself or your loved ones in minutes. Perfect for sharing on WhatsApp.", hi: "एक शानदार पहली छाप छोड़ें। मिनटों में अपने या अपने प्रियजनों के लिए एक प्रीमियम विवाह बायोडाटा बनाएं। व्हाट्सएप पर शेयर करने के लिए बेहतरीन।" },
  'home.hero.btn.create': { en: "Create Biodata", hi: "बायोडेटा बनाएँ" },
  'home.hero.btn.templates': { en: "View Designs", hi: "डिज़ाइन देखें" },
  'home.hero.trusted': { en: "Trusted by", hi: "भरोसा है" },
  'home.hero.families': { en: "Indian families", hi: "भारतीय परिवारों का" },
  'home.hero.status': { en: "Print Ready PDF", hi: "प्रिंट रेडी पीडीएफ" },
  'home.hero.feature': { en: "Privacy First", hi: "गोपनीयता पहले" },

  // Home Page - Features
  'home.features.title': { en: "Why Choose WedScribe?", hi: "वेडस्क्राइब क्यों चुनें?" },
  'home.features.subtitle': { en: "Features designed for modern Indian match-making.", hi: "आधुनिक भारतीय वैवाहिक जरूरतों के लिए डिज़ाइन की गई सुविधाएँ।" },
  'home.feature.1.title': { en: "Premium Designs", hi: "प्रीमियम डिज़ाइन" },
  'home.feature.1.desc': { en: "Elegant layouts that look great on phone & print.", hi: "सुरुचिपूर्ण लेआउट जो फोन और प्रिंट दोनों पर अच्छे लगते हैं।" },
  'home.feature.2.title': { en: "WhatsApp Ready", hi: "व्हाट्सएप के लिए तैयार" },
  'home.feature.2.desc': { en: "Share your PDF directly on WhatsApp/Email.", hi: "अपना पीडीएफ सीधे व्हाट्सएप/ईमेल पर शेयर करें।" },
  'home.feature.3.title': { en: "100% Private", hi: "100% निजी" },
  'home.feature.3.desc': { en: "Your photos & data never leave your phone.", hi: "आपकी तस्वीरें और डेटा कभी भी आपके फोन से बाहर नहीं जाते।" },
  'home.feature.4.title': { en: "All Communities", hi: "सभी समुदाय" },
  'home.feature.4.desc': { en: "Formats suitable for all castes & religions.", hi: "सभी जातियों और धर्मों के लिए उपयुक्त प्रारूप।" },

  // Home Page - Religion Selection
  'home.religion.title': { en: "Biodata for every", hi: "हर" },
  'home.religion.highlight': { en: "Community", hi: "समुदाय के लिए" },
  'home.religion.desc': { en: "Whether you need a traditional Hindu format or a modern professional layout, we have it all.", hi: "चाहे आपको पारंपरिक हिंदू प्रारूप चाहिए या आधुनिक पेशेवर लेआउट, हमारे पास सब कुछ है।" },
  'home.religion.community': { en: "Used by 10,000+ Indians", hi: "10,000+ भारतीयों द्वारा उपयोग किया गया" },

  // Home Page - FAQ
  'home.faq.title': { en: "Common Questions", hi: "सामान्य प्रश्न" },
  'home.faq.desc': { en: "Everything you need to know about creating your biodata.", hi: "अपना बायोडेटा बनाने के बारे में आपको जो कुछ भी जानने की जरूरत है।" },
  'home.faq.q1': { en: "Is my photo and data safe?", hi: "क्या मेरी फोटो और डेटा सुरक्षित है?" },
  'home.faq.a1': { en: "Yes. We do not store your data. It stays securely on your device.", hi: "हाँ। हम आपका डेटा स्टोर नहीं करते हैं। यह आपके डिवाइस पर सुरक्षित रहता है।" },
  'home.faq.q2': { en: "Can I share this on WhatsApp?", hi: "क्या मैं इसे व्हाट्सएप पर शेयर कर सकता हूँ?" },
  'home.faq.a2': { en: "Absolutely. The downloaded PDF is optimized for easy sharing on WhatsApp.", hi: "बिल्कुल। डाउनलोड किया गया पीडीएफ व्हाट्सएप पर आसानी से शेयर करने के लिए ऑप्टिमाइज़ किया गया है।" },

  // Footer
  'footer.brand.desc': { en: " helping Indian families find their perfect match with dignified, beautiful Biodatas.", hi: "भारतीय परिवारों को प्रतिष्ठित और सुंदर बायोडेटा के साथ अपना सही जीवनसाथी खोजने में मदद करना।" },
  'footer.col.product': { en: "Product", hi: "उत्पाद" },
  'footer.col.company': { en: "Company", hi: "कंपनी" },
  'footer.col.contact': { en: "Contact", hi: "संपर्क" },
  'footer.rights': { en: "Made for India.", hi: "भारत के लिए बनाया गया।" },
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

import React from 'react';
import { UserCircle, PenTool, GraduationCap, Users, Phone, Wand2 } from 'lucide-react';
import { BiodataProfile } from '@/types';
import { FormSection } from '@/components/common/FormSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';

interface EditorContentProps {
  profile: BiodataProfile;
  setProfile: React.Dispatch<React.SetStateAction<BiodataProfile>>;
  onGenerateBio: () => void;
  isGeneratingBio: boolean;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EditorContent: React.FC<EditorContentProps> = ({ 
  profile, 
  setProfile, 
  onGenerateBio, 
  isGeneratingBio,
  handleImageUpload
}) => {

  const updateSection = (section: keyof BiodataProfile, field: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const InputGroup = ({ label, value, section, field, type = "text", placeholder = "", options = [] as string[] }: any) => {
    const commonProps = {
      label,
      value,
      placeholder,
      onChange: (e: any) => updateSection(section as any, field, e.target.value),
    };

    if (type === 'select') {
      return <Select {...commonProps} options={options} />;
    } else if (type === 'textarea') {
      return <Textarea {...commonProps} className="h-24" />;
    } else {
      return <Input {...commonProps} type={type} />;
    }
  };

  const { t } = useLanguage();

  return (
      <div className="space-y-4 pb-20 md:pb-0">
          {/* Photo Upload Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-5 p-5 bg-slate-50 rounded-xl border border-slate-100 mb-6"
          >
            <div className="relative group shrink-0">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                    {profile.personal.photoUrl ? (
                        <img src={profile.personal.photoUrl} className="w-full h-full object-cover" />
                    ) : <UserCircle className="text-slate-200" size={48} />}
                </div>
                <label className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 rounded-full cursor-pointer transition-all duration-200 backdrop-blur-[1px]">
                    <PenTool size={16} />
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
            </div>
            <div>
                <h3 className="text-sm font-bold text-slate-900">{t('label.photo')}</h3>
                <p className="text-xs text-slate-500 mt-1 mb-2">{t('label.recPhoto')}</p>
                <label className="text-xs font-bold text-primary cursor-pointer hover:underline">
                    {t('label.changePhoto')}
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
            </div>
            </motion.div>

            <FormSection title={t('section.personalInfo')} icon={<UserCircle size={18} />} defaultOpen={true}>
                <InputGroup label={t('field.fullName')} value={profile.personal.fullName} section="personal" field="fullName" placeholder={t('placeholder.name')} />
                <div className="grid grid-cols-2 gap-4">
                <InputGroup label={t('field.dob')} value={profile.personal.dateOfBirth} section="personal" field="dateOfBirth" type="date" />
                <InputGroup label={t('field.tob')} value={profile.personal.timeOfBirth} section="personal" field="timeOfBirth" type="time" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <InputGroup label={t('field.height')} value={profile.personal.height} section="personal" field="height" placeholder={t('placeholder.height')} />
                <InputGroup label={t('field.weight')} value={profile.personal.weight} section="personal" field="weight" placeholder={t('placeholder.weight')} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <InputGroup label={t('field.complexion')} value={profile.personal.complexion} section="personal" field="complexion" placeholder={t('placeholder.complexion')} />
                <InputGroup label={t('field.bloodGroup')} value={profile.personal.bloodGroup} section="personal" field="bloodGroup" placeholder={t('placeholder.blood')} />
                </div>
            </FormSection>

            <FormSection title={t('section.careerEdu')} icon={<GraduationCap size={18} />}>
            <div className="space-y-4">
                <InputGroup label={t('field.education')} value={profile.education.education} section="education" field="education" placeholder={t('placeholder.edu')} type="textarea" />
                <InputGroup label={t('field.occupation')} value={profile.education.occupation} section="education" field="occupation" placeholder={t('placeholder.occ')} />
                <div className="grid grid-cols-2 gap-4">
                    <InputGroup label={t('field.company')} value={profile.education.company} section="education" field="company" />
                    <InputGroup label={t('field.income')} value={profile.education.income} section="education" field="income" placeholder={t('placeholder.income')} />
                </div>
                
                <div className="pt-2">
                    <div className="flex justify-between items-center mb-2">
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">{t('label.profSummary')}</label>
                        <Button 
                            onClick={onGenerateBio}
                            disabled={isGeneratingBio}
                            size="sm"
                            variant="ghost"
                            className="text-[10px] flex items-center gap-1.5 text-primary font-bold uppercase tracking-wider bg-primary/5 hover:bg-primary/10 px-2 py-1 rounded transition-colors disabled:opacity-50"
                        >
                            <Wand2 size={12} /> {isGeneratingBio ? t('label.writing') : t('label.aiEnhance')}
                        </Button>
                    </div>
                    <Textarea
                    value={profile.education.aboutMe}
                    onChange={(e) => updateSection('education', 'aboutMe', e.target.value)}
                    className="h-32 leading-relaxed"
                    placeholder={t('placeholder.summary')}
                    />
                </div>
            </div>
            </FormSection>

            <FormSection title={t('section.familyDetails')} icon={<Users size={18} />}>
                <div className="grid grid-cols-2 gap-4">
                <InputGroup label={t('field.religion')} value={profile.personal.religion} section="personal" field="religion" />
                <InputGroup label={t('field.caste')} value={profile.personal.caste} section="personal" field="caste" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                <InputGroup label={t('field.gothra')} value={profile.personal.gothra} section="personal" field="gothra" />
                <InputGroup label={t('field.manglik')} value={profile.personal.manglik} section="personal" field="manglik" type="select" options={[t('option.no'), t('option.yes'), t('option.anshik'), t('option.dontKnow')]} />
                </div>
                <InputGroup label={t('field.rashi')} value={profile.personal.rashi} section="personal" field="rashi" />
                
                <div className="my-4 border-t border-slate-100"></div>
                
                <div className="space-y-4">
                <InputGroup label={t('field.fatherName')} value={profile.family.fatherName} section="family" field="fatherName" />
                <InputGroup label={t('field.fatherOcc')} value={profile.family.fatherOccupation} section="family" field="fatherOccupation" />
                <InputGroup label={t('field.motherName')} value={profile.family.motherName} section="family" field="motherName" />
                <InputGroup label={t('field.motherOcc')} value={profile.family.motherOccupation} section="family" field="motherOccupation" />
                <InputGroup label={t('field.siblings')} value={profile.family.siblings} section="family" field="siblings" placeholder={t('placeholder.siblings')} type="textarea" />
                <InputGroup label={t('field.nativePlace')} value={profile.family.nativePlace} section="family" field="nativePlace" />
                </div>
            </FormSection>
            
            <FormSection title={t('section.contactInfo')} icon={<Phone size={18} />}>
            <div className="space-y-4">
                <InputGroup label={t('label.mobile')} value={profile.contact.contactNumber} section="contact" field="contactNumber" />
                <InputGroup label={t('label.email')} value={profile.contact.email} section="contact" field="email" />
                <InputGroup label={t('label.address')} value={profile.contact.address} section="contact" field="address" type="textarea" />
            </div>
            </FormSection>
      </div>
  );
};

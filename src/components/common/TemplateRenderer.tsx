import React from 'react';
import { BiodataProfile, TemplateType } from '../../types';
import { SkyBlossom } from '@/components/templates/modern/SkyBlossom';
import { RegalAnvika } from '@/components/templates/modern/RegalAnvika';
import { IvoryLines } from '@/components/templates/minimalist/IvoryLines';
import { RoyalRed } from '@/components/templates/traditional/RoyalRed';
import { Minimalist } from '@/components/templates/minimalist/Minimalist';
import { MaroonHeritage } from '@/components/templates/traditional/MaroonHeritage';
import { RoyalMandala } from '@/components/templates/traditional/RoyalMandala';
import { EmeraldCrescent } from '@/components/templates/modern/EmeraldCrescent';
import { BackgroundShowcase } from '@/components/templates/BackgroundShowcase';
import { ShubhVivah } from '@/components/templates/traditional/ShubhVivah';
import { MangalSutra } from '@/components/templates/traditional/MangalSutra';
import { BackgroundTemplate } from '@/components/templates/BackgroundTemplate';
import { getTemplateConfig } from '@/templateConfigs';

interface Props {
  profile: BiodataProfile;
  template: TemplateType;
}

export const TemplateRenderer: React.FC<Props> = React.memo(({ profile, template }) => {
  // Check if template uses config system
  const config = getTemplateConfig(template);

  if (config) {
    // Render from config - NO INDIVIDUAL FILES NEEDED!
    return (
      <div id="template-content" className="w-full">
        <BackgroundTemplate profile={profile} styleProps={config.styleProps} />
      </div>
    );
  }

  // Legacy templates (will be deprecated)
  const templateElement = (() => {
    switch (template) {
      case TemplateType.SKY_BLOSSOM:
        return <SkyBlossom profile={profile} />;
      case TemplateType.REGAL_ANVIKA:
        return <RegalAnvika profile={profile} />;
      case TemplateType.IVORY_LINES:
        return <IvoryLines profile={profile} />;
      case TemplateType.ROYAL_RED:
        return <RoyalRed profile={profile} />;
      case TemplateType.MINIMALIST:
        return <Minimalist profile={profile} />;
      case TemplateType.MAROON_HERITAGE:
        return <MaroonHeritage profile={profile} />;
      case TemplateType.ROYAL_MANDALA:
        return <RoyalMandala profile={profile} />;
      case TemplateType.EMERALD_CRESCENT:
        return <EmeraldCrescent profile={profile} />;
      case TemplateType.BACKGROUND_SHOWCASE:
        return <BackgroundShowcase profile={profile} />;
      case TemplateType.SHUBH_VIVAH:
        return <ShubhVivah profile={profile} />;
      case TemplateType.MANGAL_SUTRA:
        return <MangalSutra profile={profile} />;
      default:
        return <div className="p-10 text-center text-gray-500">Select a template</div>;
    }
  })();

  return (
    <div id="template-content" className="w-full flex justify-center">
      {/* Wrapper to enforce A4 size on legacy templates */}
      <div className="w-[210mm] min-h-[297mm] bg-white shadow-lg print:shadow-none overflow-hidden">
        {templateElement}
      </div>
    </div>
  );
});

TemplateRenderer.displayName = 'TemplateRenderer';

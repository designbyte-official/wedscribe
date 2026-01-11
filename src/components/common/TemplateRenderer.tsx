import React from 'react';
import { BiodataProfile, TemplateType } from '../../types';
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

  // Legacy templates have been removed.
  return <div className="p-10 text-center text-gray-500">Template not found</div>;
});

TemplateRenderer.displayName = 'TemplateRenderer';

import React from 'react';
import { BiodataProfile } from '@/types';
import { BackgroundTemplate } from '../BackgroundTemplate';
import { getTemplateConfig } from '@/templateConfigs';

interface Props {
    profile: BiodataProfile;
}

export const VelvetRose: React.FC<Props> = ({ profile }) => {
    const config = getTemplateConfig('VELVET_ROSE');

    if (!config) {
        return <div>Template configuration not found</div>;
    }

    return <BackgroundTemplate profile={profile} styleProps={config.styleProps} />;
};

export default VelvetRose;

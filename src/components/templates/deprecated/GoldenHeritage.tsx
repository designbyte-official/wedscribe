import React from 'react';
import { BiodataProfile } from '@/types';
import { BackgroundTemplate } from '../BackgroundTemplate';
import { getTemplateConfig } from '@/templateConfigs';

interface Props {
    profile: BiodataProfile;
}

export const GoldenHeritage: React.FC<Props> = ({ profile }) => {
    const config = getTemplateConfig('GOLDEN_HERITAGE');

    if (!config) {
        return <div>Template configuration not found</div>;
    }

    return <BackgroundTemplate profile={profile} styleProps={config.styleProps} />;
};

export default GoldenHeritage;

import React from 'react';
import { BiodataProfile, TemplateType } from '../../types';
import { SkyBlossom } from '@/components/templates/SkyBlossom';
import { RegalAnvika } from '@/components/templates/RegalAnvika';
import { IvoryLines } from '@/components/templates/IvoryLines';
import { MintBlossom } from '@/components/templates/MintBlossom';
import { RoyalRed } from '@/components/templates/RoyalRed';
import { Minimalist } from '@/components/templates/Minimalist';
import { SacredSaffron } from '@/components/templates/SacredSaffron';
import { NoorCrescent } from '@/components/templates/NoorCrescent';
import { GracefulLily } from '@/components/templates/GracefulLily';

interface Props {
  profile: BiodataProfile;
  template: TemplateType;
}

export const TemplateRenderer: React.FC<Props> = ({ profile, template }) => {
  switch (template) {
    case TemplateType.SKY_BLOSSOM:
      return <SkyBlossom profile={profile} />;
    case TemplateType.REGAL_ANVIKA:
      return <RegalAnvika profile={profile} />;
    case TemplateType.IVORY_LINES:
      return <IvoryLines profile={profile} />;
    case TemplateType.MINT_BLOSSOM:
      return <MintBlossom profile={profile} />;
    case TemplateType.ROYAL_RED:
      return <RoyalRed profile={profile} />;
    case TemplateType.MINIMALIST:
      return <Minimalist profile={profile} />;
    case TemplateType.SACRED_SAFFRON:
      return <SacredSaffron profile={profile} />;
    case TemplateType.NOOR_CRESCENT:
      return <NoorCrescent profile={profile} />;
    case TemplateType.GRACEFUL_LILY:
      return <GracefulLily profile={profile} />;
    default:
      return <div className="p-10 text-center text-gray-500">Select a template</div>;
  }
};

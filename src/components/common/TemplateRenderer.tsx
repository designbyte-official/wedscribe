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
import { ClassicGold } from '@/components/templates/ClassicGold';
import { ModernSlate } from '@/components/templates/ModernSlate';
import { PastelPeony } from '@/components/templates/PastelPeony';
import { NavyMinimal } from '@/components/templates/NavyMinimal';
import { RusticKraft } from '@/components/templates/RusticKraft';
import { EmeraldLeaf } from '@/components/templates/EmeraldLeaf';
import { BlushMarble } from '@/components/templates/BlushMarble';
import { DesertSands } from '@/components/templates/DesertSands';
import { LavenderMist } from '@/components/templates/LavenderMist';
import { NoirElegant } from '@/components/templates/NoirElegant';
import { AquaGlass } from '@/components/templates/AquaGlass';
import { IvoryModern } from '@/components/templates/IvoryModern';

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
    case TemplateType.CLASSIC_GOLD:
      return <ClassicGold profile={profile} />;
    case TemplateType.MODERN_SLATE:
      return <ModernSlate profile={profile} />;
    case TemplateType.PASTEL_PEONY:
      return <PastelPeony profile={profile} />;
    case TemplateType.NAVY_MINIMAL:
      return <NavyMinimal profile={profile} />;
    case TemplateType.RUSTIC_KRAFT:
      return <RusticKraft profile={profile} />;
    case TemplateType.EMERALD_LEAF:
      return <EmeraldLeaf profile={profile} />;
    case TemplateType.BLUSH_MARBLE:
      return <BlushMarble profile={profile} />;
    case TemplateType.DESERT_SANDS:
      return <DesertSands profile={profile} />;
    case TemplateType.LAVENDER_MIST:
      return <LavenderMist profile={profile} />;
    case TemplateType.NOIR_ELEGANT:
      return <NoirElegant profile={profile} />;
    case TemplateType.AQUA_GLASS:
      return <AquaGlass profile={profile} />;
    case TemplateType.IVORY_MODERN:
      return <IvoryModern profile={profile} />;
    default:
      return <div className="p-10 text-center text-gray-500">Select a template</div>;
  }
};

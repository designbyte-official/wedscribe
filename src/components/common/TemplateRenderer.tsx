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
import { KalyanMandap } from '@/components/templates/KalyanMandap';
import { ZehraCrescent } from '@/components/templates/ZehraCrescent';
import { GraceChapel } from '@/components/templates/GraceChapel';
import { KhalsaHeritage } from '@/components/templates/KhalsaHeritage';
import { ShantiJain } from '@/components/templates/ShantiJain';
import { LotusSerenity } from '@/components/templates/LotusSerenity';
import { RangoliFestive } from '@/components/templates/RangoliFestive';
import { HeritagePeacock } from '@/components/templates/HeritagePeacock';
import { MonsoonTeal } from '@/components/templates/MonsoonTeal';
import { MaroonHeritage } from '@/components/templates/MaroonHeritage';
import { RoyalMandala } from '@/components/templates/RoyalMandala';
import { EmeraldCrescent } from '@/components/templates/EmeraldCrescent';

interface Props {
  profile: BiodataProfile;
  template: TemplateType;
}

export const TemplateRenderer: React.FC<Props> = React.memo(({ profile, template }) => {
  const templateElement = (() => {
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
      case TemplateType.KALYAN_MANDAP:
        return <KalyanMandap profile={profile} />;
      case TemplateType.ZEHRA_CRESCENT:
        return <ZehraCrescent profile={profile} />;
      case TemplateType.GRACE_CHAPEL:
        return <GraceChapel profile={profile} />;
      case TemplateType.KHALSA_HERITAGE:
        return <KhalsaHeritage profile={profile} />;
      case TemplateType.SHANTI_JAIN:
        return <ShantiJain profile={profile} />;
      case TemplateType.LOTUS_SERENITY:
        return <LotusSerenity profile={profile} />;
      case TemplateType.RANGOLI_FESTIVE:
        return <RangoliFestive profile={profile} />;
      case TemplateType.HERITAGE_PEACOCK:
        return <HeritagePeacock profile={profile} />;
      case TemplateType.MONSOON_TEAL:
        return <MonsoonTeal profile={profile} />;
      case TemplateType.MAROON_HERITAGE:
        return <MaroonHeritage profile={profile} />;
      case TemplateType.ROYAL_MANDALA:
        return <RoyalMandala profile={profile} />;
      case TemplateType.EMERALD_CRESCENT:
        return <EmeraldCrescent profile={profile} />;
      default:
        return <div className="p-10 text-center text-gray-500">Select a template</div>;
    }
  })();

  return (
    <div id="template-content" className="w-full">
      {templateElement}
    </div>
  );
});

TemplateRenderer.displayName = 'TemplateRenderer';

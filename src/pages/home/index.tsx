import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../../components/pages/home/navbar';
import { Hero } from '../../components/pages/home/hero';
import { Features } from '../../components/pages/home/features';
import { ReligionSelection } from '../../components/pages/home/religion-selection';
import { FAQ } from '../../components/pages/home/faq';
import { Footer } from '../../components/pages/home/footer';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>WedScribe - Premium Biodata Maker | Create Beautiful Indian Wedding Biodata Online</title>
        <meta name="description" content="Create professional, elegant biodata for Indian weddings with WedScribe. 30+ premium templates, AI-powered content generation, and instant PDF/PNG downloads. Free online biodata maker." />
        <meta name="keywords" content="biodata maker, wedding biodata, matrimonial biodata, Indian wedding biodata, biodata generator, marriage biodata, biodata template, online biodata maker, biodata creator, shadi biodata" />
        <meta property="og:title" content="WedScribe - Premium Biodata Maker | Create Beautiful Indian Wedding Biodata" />
        <meta property="og:description" content="Create professional, elegant biodata for Indian weddings with 30+ premium templates, AI-powered content generation, and instant downloads. Free online biodata maker." />
        <meta property="og:url" content="https://studio.designbyte.dev" />
        <meta name="twitter:title" content="WedScribe - Premium Biodata Maker | Create Beautiful Indian Wedding Biodata" />
        <meta name="twitter:description" content="Create professional, elegant biodata for Indian weddings with 30+ premium templates, AI-powered content generation, and instant downloads." />
        <link rel="canonical" href="https://studio.designbyte.dev" />
      </Helmet>
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <Hero />
        <Features />
        <div id="templates">
          <ReligionSelection />
        </div>
        <FAQ />
        <Footer />
      </div>
    </>
  );
};
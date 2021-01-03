import React from 'react';

import Navbar from '../Navbar';
import PriceSectionOther from '../Section/Other';
import Footer from '../Footer';

import { Container } from '../../../styles/styledComponents';
import TitleWithParralax from '../Section/FirstTitleWithParallax';
import PriceSection from '../Section/Price';

const LandingHome = () => {
  return (
    <>
      <Navbar />
      <Container>
        <TitleWithParralax />
        <PriceSection />
        <PriceSectionOther />
      </Container>
      <Footer position="footer" />
    </>
  );
};

export default LandingHome;

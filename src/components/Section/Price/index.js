import React from 'react';

import PriceCodeAndDriveSection from './CodeAndDrive';

import imageAuto from '../../../../assets/SVG/blueCar.svg';
import imageBook from '../../../../assets/SVG/book.svg';

import { PriceSectionContainer, TextPriceSection } from './styledComponents';

const PriceSection = () => {
  return (
    <PriceSectionContainer>
      <PriceCodeAndDriveSection
        src={imageBook}
        widthImage="40%"
        title="Code de la route"
        price="29.90 €"
        textInfo="10 x moin cher"
        textButton="J'obtiens mon permis"
      />
      <PriceCodeAndDriveSection
        src={imageAuto}
        title="Permis de conduire"
        price="749 €"
        textInfo="35% moins cher"
        textButton="J'obtient mon code"
        marginPhone
      />
    </PriceSectionContainer>
  );
};

export default PriceSection;

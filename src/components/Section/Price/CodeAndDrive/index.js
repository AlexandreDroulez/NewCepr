import React from 'react';

import { ImagePriceSection, Section, TitleSection } from '../../../../../styles/styledComponents';
import { PriceSection, TextPriceSection } from '../styledComponents';
import ButtonDefault from '../../../Button/Default';

const PriceCodeAndDriveSection = ({
  src,
  widthImage,
  title,
  price,
  textInfo,
  textButton,
  marginPhone,
}) => {
  return (
    <Section marginPhone={marginPhone}>
      <ImagePriceSection src={src} widthImage={widthImage} />
      <TitleSection>{title}</TitleSection>
      <PriceSection>{price}</PriceSection>
      <TextPriceSection>{textInfo}</TextPriceSection>
      <ButtonDefault margin="1rem 0 0 0">{textButton}</ButtonDefault>
    </Section>
  );
};

export default PriceCodeAndDriveSection;

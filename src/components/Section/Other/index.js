import React from 'react';
import { Carousel } from 'react-bootstrap';
import testImage from './../../../../assets/cropped-Des-manifestations-auto-ecoles-lieu-dans-grandes-villes-francaises-lundi-29-fevrier_0_730_454.jpg';

import { Section, TitleSection } from '../../../../styles/styledComponents';
import { StyledCarousel } from './styledComponents';

const PriceSectionOther = () => {
  return (
    <Section>
      <TitleSection>Avis certifiés</TitleSection>
      <StyledCarousel>
        <Carousel.Item>
          <img className="d-block w-100" src={testImage} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={testImage} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={testImage} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </StyledCarousel>
    </Section>
  );
};

export default PriceSectionOther;

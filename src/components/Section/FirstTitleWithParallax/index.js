import React from 'react';

import palette from './../../../../styles/theme';

import testImage from './../../../../assets/buildings-1851246 (1).jpg';

import { TitleLanding } from '../../../../styles/styledComponents';
import { Parralax, ContainerInsideParalax, TextParralax } from './styledComponents';

const TitleWithParralax = () => {
  return (
    <ContainerInsideParalax>
      <Parralax bgImage={testImage} bgImageAlt="the car" strength={-400}>
        <div style={{ height: '100vh' }} />
      </Parralax>
      <TextParralax>Une auto école a votre écoute !!!</TextParralax>
    </ContainerInsideParalax>
  );
};

export default TitleWithParralax;

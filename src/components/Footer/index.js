import React from 'react';
import { FooterStyled } from './styledComponents';
import Logo from '../Logo';

const Footer = ({ position }) => {
  return (
    <FooterStyled>
      <Logo position={position} />
    </FooterStyled>
  );
};

export default Footer;

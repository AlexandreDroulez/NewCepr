import React from 'react';
import { ImageBurger } from './styledComponents';
import burgerMenu from '../../../../assets/SVG/burger.png';

const BurgerMenu = ({ onClick }) => {
  return <ImageBurger onClick={onClick} src={burgerMenu} />;
};

export default BurgerMenu;

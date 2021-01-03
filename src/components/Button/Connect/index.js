import React from 'react';
import { ButtonConnect } from './styledComponents';

const ConnectButton = ({ name, onClick }) => {
  return <ButtonConnect onClick={onClick}>{name}</ButtonConnect>;
};

export default ConnectButton;

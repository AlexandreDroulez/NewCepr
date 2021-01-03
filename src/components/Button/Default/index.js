import React from 'react';
import { DefaultButton } from './styledComponents';

const ButtonDefault = ({ children, margin }) => {
  return <DefaultButton margin={margin}>{children}</DefaultButton>;
};

export default ButtonDefault;

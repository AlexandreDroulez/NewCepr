import React from 'react';
import { LinksStyled } from './styledComponents';

const Links = ({ href, name }) => {
  const AllLinks = { linkOne: ' https://www.google.fr/', linkTwo: 'https://www.jeuxvideo.com/' };
  return <LinksStyled href={AllLinks[href]}>{name}</LinksStyled>;
};

export default Links;

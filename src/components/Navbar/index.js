import React, { useState } from 'react';
import Logo from '../Logo';
import {
  ContainerDesktopLinkNavbar,
  MainContainerNavbar,
  ContainerPhoneLinkNavbar,
} from './styledComponents';
import Links from '../Links';
import ConnectButton from '../Button/Connect';
import BurgerMenu from '../Button/Burger';
import RollingDownPhoneMenu from './RollingDownPhoneMenu';
import { DefaultButton } from '../Button/Default/styledComponents';

const Navbar = () => {
  const [showPhoneLinks, setShowPhoneLinks] = useState(false);
  console.log({ showPhoneLinks });

  return (
    <>
      <MainContainerNavbar>
        <Logo />
        <ContainerDesktopLinkNavbar>
          <Links href="linkOne" name="Code de la Route" />
          <Links href="linkOne" name="Permis de conduire" />
          <a href="linkOne">
            <DefaultButton margin="0 0 0 1rem">Connexion</DefaultButton>
          </a>
        </ContainerDesktopLinkNavbar>
        <ContainerPhoneLinkNavbar>
          <BurgerMenu onClick={() => setShowPhoneLinks(!showPhoneLinks)} />
        </ContainerPhoneLinkNavbar>
      </MainContainerNavbar>
      {showPhoneLinks && <RollingDownPhoneMenu showPhoneLinks={showPhoneLinks} />}
    </>
  );
};

export default Navbar;

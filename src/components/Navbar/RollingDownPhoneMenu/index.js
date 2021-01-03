import React from 'react';
import { ContainerRollingDownPhoneMenu } from './styledComponents';
import Links from '../../Links';
import ConnectButton from '../../Button/Connect';
import { ContainerDesktopLinkNavbar } from '../styledComponents';
import { DefaultButton } from '../../Button/Default/styledComponents';

const RollingDownPhoneMenu = ({ showPhoneLinks }) => {
  return (
    <ContainerRollingDownPhoneMenu showPhoneLinks={showPhoneLinks}>
      <Links href="linkOne" name="Code de la Route" />
      <Links href="linkOne" name="Permis de conduire" />
      <a href="linkOne">
        <DefaultButton>Connexion</DefaultButton>
      </a>
    </ContainerRollingDownPhoneMenu>
  );
};

export default RollingDownPhoneMenu;

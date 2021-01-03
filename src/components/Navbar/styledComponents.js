import styled from 'styled-components';
import { deviceMedia } from '../../../styles/helper';

export const MainContainerNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const ContainerDesktopLinkNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${deviceMedia.tablet`
  display:none;
  `}
`;

export const ContainerPhoneLinkNavbar = styled.div`
  display: none;
  ${deviceMedia.tablet`
    display: flex;
    flex-direction:row-reverse;
    align-items: center;
  `}
`;

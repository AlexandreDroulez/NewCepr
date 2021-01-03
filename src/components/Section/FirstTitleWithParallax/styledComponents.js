import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';
import { deviceMedia } from '../../../../styles/helper';

export const Parralax = styled(Parallax)``;

export const ContainerInsideParalax = styled.div`
  position: relative;
`;
export const TextParralax = styled.div`
  color: white;
  position: absolute;
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  ${deviceMedia.phone`
    font-size:4rem;
  `}
`;

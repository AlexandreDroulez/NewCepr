import styled from 'styled-components';
import { deviceMedia } from '../../../../styles/helper';

export const ButtonConnect = styled.button`
  all: unset;
  cursor: pointer;
  color: ${props => props.theme.palette.lightGray3};
  font-weight: bold;
  margin-left: 1rem;
  ${deviceMedia.tablet`
  margin: 0.5rem
  `}
`;

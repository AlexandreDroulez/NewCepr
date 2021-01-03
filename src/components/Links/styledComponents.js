import styled from 'styled-components';
import { deviceMedia } from '../../../styles/helper';

export const LinksStyled = styled.a`
  all: unset;
  cursor: pointer;
  text-align: center;
  color: ${props => props.theme.palette.lightGray3};
  font-weight: bold;
  margin-left: 1rem;
  ${deviceMedia.tablet`
  margin: 0.5rem
  `}
`;

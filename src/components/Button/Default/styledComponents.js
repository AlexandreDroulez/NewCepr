import styled from 'styled-components';
import { palette } from '../../../../styles/theme';
import { deviceMedia } from '../../../../styles/helper';

export const DefaultButton = styled.button`
  all: unset;
  background-color: ${palette.transparent};
  border: 1px solid ${palette.blue2};
  border-radius: 8px;
  cursor: pointer;
  color: ${palette.lightGray3};
  font-weight: bold;
  padding: 0.5rem;
  margin: ${props => props.margin};
  transition: 0.5s;
  ${deviceMedia.tablet`
    margin: 0.5rem
  `}
    :hover {
    background-color: ${palette.blue2};
    color: ${palette.white};
  }
`;

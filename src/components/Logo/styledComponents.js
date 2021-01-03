import styled from 'styled-components';

export const LogoNavbar = styled.div`
  font-weight: bold;
  font-size: 26px;
  color: ${props => (props.position === 'footer' ? 'white' : props.theme.palette.lightGray3)};
  font-weight: bold;
`;

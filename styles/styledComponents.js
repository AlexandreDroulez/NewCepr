import styled from 'styled-components';
import { deviceMedia } from './helper';
import { palette } from './theme';

export const Container = styled.div`
  margin: auto;
`;

export const Section = styled.section`
  position: relative;
  text-align: center;
  width: ${props => props.width && props.width};
  ${deviceMedia.tablet`
  padding: 2rem 0 0 0
  `};
  ${deviceMedia.phone`
    margin:${props => (props.marginPhone ? '7rem 0 0 0' : '2rem 0 0 0')};
  `}
`;

export const TitleLanding = styled.h1`
  text-align: center;
  color: ${props => (props.color ? props.color : palette.lightGray3)};
  width: 80%;
  font-size: 4rem;
  margin: 8rem auto;
  ${deviceMedia.tablet`
  font-size: 2rem;
  margin:2rem auto;
  `}
`;

export const TitleSection = styled.h2`
  text-align: center;
  color: ${palette.lightGray3};
  font-size: 3rem;
  margin: 4rem 2rem 0 2rem;
  ${deviceMedia.tablet`
  font-size: 1.5rem;
  margin:2rem auto;
  `}
`;

//FIXME
export const ImagePriceSection = styled.img`
  width: ${props => props.widthImage};
  position: absolute;
  transform: translate(-50%, -50%);
  top: -15px;
  width: 150px;
  ${deviceMedia.tablet`
  width:150px
  `};
  ${deviceMedia.phone`
  top: -35px;
  `};
`;

import styled from 'styled-components';
import { deviceMedia } from '../../../../styles/helper';
import { palette } from '../../../../styles/theme';

export const PriceSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  ${deviceMedia.tablet`
    justify-content: space-around;
  `}
  ${deviceMedia.phone`
    flex-direction:column;
    margin:auto;
  `}
`;

export const TextPriceSection = styled.div`
  color: ${palette.lightGray3};
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const PriceSection = styled.div`
  color: ${palette.blue2};
  font-weight: 700;
  margin-top: 1rem;
`;

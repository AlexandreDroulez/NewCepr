import styled, { keyframes } from 'styled-components';
import { deviceMedia } from '../../../../styles/helper';

export const TransitionSlidownUp = keyframes`
  0% {
    transform: translateY(-80px);
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;
export const TransitionSlidownDown = keyframes`
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    transform: translateY(-80px);
    opacity: 0;
  }
`;

export const ContainerRollingDownPhoneMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${props => props.showPhoneLinks && TransitionSlidownUp} 0.5s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${deviceMedia.tablet`
  padding: 0 0 0.5rem 0;
  `}
`;

import { css } from 'styled-components';

export const DEFAULT_BODY_FONT_SIZE = 16;

/**
 * @see https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints
 // Small devices (landscape phones, 576px and up)
 // Medium devices (tablets, 768px and up)
 // Large devices (desktops, 992px and up)
 // Extra large devices (large desktops, 1200px and up)
 */

const sizes = {
  phone: 576,
  tablet: 768,
  desktop: 992,
  largeDesktop: 1200,
  extraLargeDesktop: 1500,
};

const deviceSizes = ['phone', 'tablet', 'desktop', 'largeDesktop', 'extraLargeDesktop'];

export const deviceMedia = deviceSizes.reduce((acc, deviceSizeName) => {
  acc[deviceSizeName] = (first, ...interpolations) => css`
    @media (max-width: ${sizes[deviceSizeName] / DEFAULT_BODY_FONT_SIZE}em) {
      ${css(first, ...interpolations)};
    }
  `;
  return acc;
}, {});

import { mapValues } from 'lodash';
import { css, CSSObject, Interpolation } from 'styled-components';

type DeviceType = 'desktop' | 'tablet' | 'phone';

const sizes: Record<DeviceType, number> = {
  desktop: 1200,
  tablet: 768,
  phone: 600,
};
const media = mapValues(
  sizes,
  (value) =>
    (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<object>[]
    ) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
);

export { media };
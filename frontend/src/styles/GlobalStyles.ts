import { createGlobalStyle } from 'styled-components';
import reset from '@styles/reset';
import base from '@styles/base';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyles = createGlobalStyle`
${reset}
${base}
`;

export default GlobalStyles;

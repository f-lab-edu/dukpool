import { createGlobalStyle } from 'styled-components';
import reset from '@styles/reset';
import base from '@styles/base';

const GlobalStyles = createGlobalStyle`
${reset}
${base}
`;

export default GlobalStyles;

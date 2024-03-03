import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/font.css';
import GlobalStyles from '@styles/GlobalStyles';
import ReactGA from 'react-ga4';
import { CONFIG } from '@config';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

if (CONFIG.GOOGLE_ANALYTICS) {
  ReactGA.initialize(CONFIG.GOOGLE_ANALYTICS);
}

root.render(
  <>
    <GlobalStyles />
    <App />
  </>,
);

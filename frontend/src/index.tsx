import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/font.css';
import GlobalStyles from '@styles/GlobalStyles';
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>,
);

import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/font.css';
import { AuthProvider } from '@context/AuthContext';
import GlobalStyles from '@styles/GlobalStyles';
import ErrorBoundary from '@components/common/ErrorBoundary';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <AuthProvider>
    <ErrorBoundary>
      <GlobalStyles />
      <App />
    </ErrorBoundary>
  </AuthProvider>,
);

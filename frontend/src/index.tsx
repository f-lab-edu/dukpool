import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/font.css';
import GlobalStyles from '@styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

export const queryClient = new QueryClient();
const root = ReactDOM.createRoot(rootElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <App />
  </QueryClientProvider>,
);

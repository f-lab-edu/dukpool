import { RouterProvider } from 'react-router-dom';
import router from './router';
import Header from '@components/Header';
import { memo } from 'react';

const App = memo(() => (
  <>
    <Header />
    <RouterProvider router={router} />
  </>
));
App.displayName = 'App';

export default App;

import { RouterProvider } from 'react-router-dom';
import router from './router';
import { memo } from 'react';

const App = memo(() => <RouterProvider router={router} />);
App.displayName = 'App';

export default App;

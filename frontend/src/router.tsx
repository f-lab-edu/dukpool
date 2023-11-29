import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootPage from '@pages/RootPage';
import Article from '@pages/Article';
import Home from '@pages/Home';
import MyPage from '@pages/MyPage';
import NotFound from '@pages/NotFound';
import Search from '@pages/Search';

type routeElement = {
  path: string;
  element: ReactNode;
  errorElement: ReactNode;
  children: { path: string; element: ReactNode }[];
};

const routes: routeElement[] = [
  {
    path: '/',
    element: <RootPage />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <Home /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'search/:searchId', element: <Search /> },
      { path: 'article', element: <Article /> },
    ],
  },
];

const router = createBrowserRouter(
  routes.map((route) => {
    const childs = route.children?.map((childRoute) => {
      return {
        path: childRoute.path,
        element: childRoute.element,
        errorElement: <NotFound />,
      };
    });
    return {
      ...route,
      children: childs,
    };
  }),
);

export default router;

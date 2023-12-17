import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootPage from '@pages/RootPage';
import Article from '@pages/Article';
import Home from '@pages/Home';
import MyPage from '@pages/MyPage';
import NotFound from '@pages/NotFound';
import Search from '@pages/Search';
import Talk from '@pages/Talk';
import Login from '@pages/Login';
import Kakao from '@pages/Kakao';

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
      { path: 'article', element: <Article /> },
      { path: 'talk', element: <Talk /> },
      { path: 'login', element: <Login /> },
      { path: 'auth/kakao', element: <Kakao /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'search/:searchId', element: <Search /> },
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

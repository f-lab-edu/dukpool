import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '@components/common/Layout/AuthLayout';
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
  children: { path: string; element: ReactNode; auth: boolean }[];
};

const routes: routeElement[] = [
  {
    path: '/',
    element: <RootPage />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <Home />, auth: false },
      { path: 'article', element: <Article />, auth: false },
      { path: 'talk', element: <Talk />, auth: false },
      { path: 'login', element: <Login />, auth: false },
      { path: 'auth/kakao', element: <Kakao />, auth: false },
      { path: 'mypage', element: <MyPage />, auth: true },
      { path: 'search/:searchId', element: <Search />, auth: false },
    ],
  },
];

const router = createBrowserRouter(
  routes.map((route) => {
    const childs = route.children?.map((childRoute) => {
      if (childRoute.auth) {
        return {
          path: childRoute.path,
          element: <AuthLayout>{childRoute.element}</AuthLayout>,
          errorElement: <NotFound />,
        };
      }
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

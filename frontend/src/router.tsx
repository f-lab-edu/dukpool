import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootPage from '@pages/RootPage';
import ArticlePost from '@pages/ArticlePost';
import Home from '@pages/Home';
import MyPage from '@pages/MyPage';
import NotFound from '@pages/NotFound';
import Search from '@pages/Search';
import TalkPost from '@pages/TalkPost';
import Login from '@pages/Login';
import Kakao from '@pages/Kakao';
import Article from '@pages/Article';
import Talk from '@pages/Talk';
import NewArticle from '@pages/NewArticle';

type routeElement = {
  path: string;
  element: ReactNode;
  errorElement?: ReactNode;
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
      { path: 'article/:articleId', element: <ArticlePost /> },
      { path: 'article/new', element: <NewArticle /> },
      { path: 'talk', element: <Talk /> },
      { path: 'talk/:talkId', element: <TalkPost /> },
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
      };
    });
    return {
      ...route,
      children: childs,
    };
  }),
);

export default router;

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
import EditArticle from '@pages/EditArticle';
import NewTalk from '@pages/NewTalk';
import EditTalk from '@pages/EditTalk';
import Tagged from '@pages/Tagged';

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
      { path: 'article/edit/:articleId', element: <EditArticle /> },
      { path: 'talk', element: <Talk /> },
      { path: 'talk/:talkId', element: <TalkPost /> },
      { path: 'talk/new', element: <NewTalk /> },
      { path: 'talk/edit/:talkId', element: <EditTalk /> },
      { path: 'login', element: <Login /> },
      { path: 'api/auth/kakao/callback', element: <Kakao /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'search/:searchId', element: <Search /> },
      { path: 'tagged/:tagName', element: <Tagged /> },
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

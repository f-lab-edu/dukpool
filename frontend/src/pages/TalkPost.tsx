import { Suspense } from 'react';
import Layout from '@components/common/Layout';
import ArticlePostSkeleton from '@components/common/Skeleton/ArticlePostSkeleton';
import TalkDetail from '@components/talk/TalkDetail';

const TalkPost = () => {
  return (
    <Layout>
      <Suspense fallback={<ArticlePostSkeleton />}>
        <TalkDetail />
      </Suspense>
    </Layout>
  );
};

export default TalkPost;

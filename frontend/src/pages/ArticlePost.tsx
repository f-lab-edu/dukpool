import { Suspense } from 'react';
import Layout from '@components/common/Layout';
import ArticlePostSkeleton from '@components/common/Skeleton/ArticlePostSkeleton';
import ArticleDetail from '@components/article/ArticleDetail';

const ArticlePost = () => {
  return (
    <Layout>
      <Suspense fallback={<ArticlePostSkeleton />}>
        <ArticleDetail />
      </Suspense>
    </Layout>
  );
};

export default ArticlePost;

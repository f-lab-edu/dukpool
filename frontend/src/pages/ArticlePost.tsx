import { Suspense } from 'react';
import DukpoolArticlePost from '@components/common/Post/DukpoolArticlePost';
import Layout from '@components/common/Layout';
import ArticlePostSkeleton from '@components/common/Skeleton/ArticlePostSkeleton';

const ArticlePost = () => {
  return (
    <Layout>
      <Suspense fallback={<ArticlePostSkeleton />}>
        <DukpoolArticlePost />
      </Suspense>
    </Layout>
  );
};

export default ArticlePost;

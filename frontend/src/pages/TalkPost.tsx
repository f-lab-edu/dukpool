import { Suspense } from 'react';
import Layout from '@components/common/Layout';
import ArticlePostSkeleton from '@components/common/Skeleton/ArticlePostSkeleton';
import DukpoolTalkPost from '@components/common/Post/DukpoolTalkPost';

const TalkPost = () => {
  return (
    <Layout>
      <Suspense fallback={<ArticlePostSkeleton />}>
        <DukpoolTalkPost />
      </Suspense>
    </Layout>
  );
};

export default TalkPost;

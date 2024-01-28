import Layout from '@components/common/Layout';
import MyInfoSkeleton from '@components/common/Skeleton/MyInfoSkeleton';
import MyPostsSkeleton from '@components/common/Skeleton/MyPostsSkeleton';
import MyInfo from '@components/mypage/MyInfo';
import MyPosts from '@components/mypage/MyPosts';
import useToken from '@hooks/useToken';
import { Suspense } from 'react';

const MyPage = () => {
  useToken();
  return (
    <Layout>
      <Suspense fallback={<MyInfoSkeleton />}>
        <MyInfo />
      </Suspense>
      <Suspense fallback={<MyPostsSkeleton />}>
        <MyPosts />
      </Suspense>
    </Layout>
  );
};

export default MyPage;

import Layout from '@components/common/Layout';
import MyInfoSkeleton from '@components/common/Skeleton/MyInfoSkeleton';
import MyInfo from '@components/mypage/MyInfo';
import { Suspense } from 'react';

const MyPage = () => {
  return (
    <Layout>
      <Suspense fallback={<MyInfoSkeleton />}>
        <MyInfo />
      </Suspense>
    </Layout>
  );
};

export default MyPage;

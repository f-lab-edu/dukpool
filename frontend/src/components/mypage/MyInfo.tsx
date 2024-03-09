import { memo } from 'react';
import { useUserData } from '@hooks/useGetQueries';
import MyPosts from '@components/mypage/MyPosts';
import MyProfile from '@components/mypage/MyProfile';

const MyInfo = memo(() => {
  const { data: user } = useUserData();
  return (
    <>
      <MyProfile profileImg={user.profileImg} nickname={user.nickname} />
      <MyPosts
        userNickname={user.nickname}
        userProfile={user.profileImg}
        articles={user.content}
        talks={user.talkContent}
      />
    </>
  );
});

MyInfo.displayName = 'MyInfo';

export default MyInfo;

import { useGetArticle } from '@hooks/useGetQueries';
import getIdFromUrl from '@utils/getIdFromUrl';
import PostImage from '@components/common/Post/PostImage';
import PostDescription from '@components/common/Post/PostDescription';
import PostComment from '@components/common/Post/PostComment';

const DukpoolArticlePost = () => {
  const { data } = useGetArticle(getIdFromUrl());
  return (
    <>
      <PostImage images={data.images} />
      <PostDescription
        userProfile={data.userProfile}
        title={data.title}
        date={data.date}
        content={data.content}
      />
      <PostComment id={data.id} comments={data.comments} />
    </>
  );
};

export default DukpoolArticlePost;
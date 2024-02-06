import { useParams } from 'react-router-dom';
import { useTalk } from '@hooks/useGetQueries';
import { InvalidUrlError } from '@utils/errors';
import assert from '@utils/assert';
import PostImage from '@components/common/Post/PostImage';
import PostDescription from '@components/common/Post/PostDescription';
import PostComment from '@components/common/Post/PostComment';

const DukpoolTalkPost = () => {
  const { talkId } = useParams();
  assert(talkId, new InvalidUrlError('InvalidUrlError'));
  const { data } = useTalk(Number(talkId));
  return (
    <>
      <PostImage images={data.images} />
      <PostDescription
        userProfile={data.userProfile}
        title={data.title}
        date={data.date}
        content={data.content}
        tags={data.tags}
      />
      <PostComment id={data.id} comments={data.comments} />
    </>
  );
};

export default DukpoolTalkPost;

import { useParams } from 'react-router-dom';
import { useTalk } from '@hooks/useGetQueries';
import assert from 'assert';
import PostImage from '@components/common/PostDetail/PostImage';
import TalkDescription from '@components/talk/TalkDetail/TalkDescription';
import TalkComment from '@components/talk/TalkDetail/TalkComment';

const TalkDetail = () => {
  const { talkId } = useParams();
  assert(talkId);
  const { data } = useTalk(talkId);
  return (
    <>
      <PostImage title={data.title} images={data.img} />
      <TalkDescription {...data} />
      <TalkComment contentId={data.id} comments={data.comment} />
    </>
  );
};

export default TalkDetail;

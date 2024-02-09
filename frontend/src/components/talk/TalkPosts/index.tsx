import TalkCard from '@components/talk/TalkCard';
import { useAllTalks } from '@hooks/useGetQueries';
import { TalkPostProps } from '@utils/mockData';
import { memo } from 'react';

const TalkPosts = memo(({ sortType }: { sortType: string }) => {
  const { data: talks } = useAllTalks(sortType);
  return (
    <>
      {talks.map((talk: TalkPostProps) => (
        <TalkCard key={talk.id} {...talk}></TalkCard>
      ))}
    </>
  );
});

TalkPosts.displayName = 'TalkPosts';

export default TalkPosts;

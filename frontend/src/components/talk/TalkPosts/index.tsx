import TalkCard from '@components/talk/TalkCard';
import { useGetAllTalks } from '@hooks/useGetQueries';
import { ArticleProps } from '@utils/mockData';
import { memo } from 'react';

const TalkPosts = memo(({ sortType }: { sortType: string }) => {
  const { data: talks } = useGetAllTalks(sortType);
  return (
    <>
      {talks.map((talk: ArticleProps) => (
        <TalkCard key={talk.id} {...talk}></TalkCard>
      ))}
    </>
  );
});

TalkPosts.displayName = 'TalkPosts';

export default TalkPosts;

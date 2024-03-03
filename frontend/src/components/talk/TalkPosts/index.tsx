import TalkCardSkeleton from '@components/common/Skeleton/TalkCardSkeleton';
import TalkCard from '@components/talk/TalkCard';
import { useAllTalks } from '@hooks/useGetQueries';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { memo, useCallback, useMemo } from 'react';

const TalkPosts = memo(({ sortType }: { sortType: string }) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useAllTalks(sortType);
  const talks = useMemo(
    () => data.pages.flatMap((page) => page.data),
    [data.pages],
  );

  const getMoreContent = async () => {
    if (hasNextPage) await fetchNextPage();
  };

  const onIntersect = useCallback(
    async (
      [entry]: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      if (entry.isIntersecting && !isFetchingNextPage) {
        observer.unobserve(entry.target);
        await getMoreContent();
        observer.observe(entry.target);
      }
    },
    [fetchNextPage, hasNextPage],
  );
  const { target } = useIntersectionObserver({
    onIntersect,
  });
  return (
    <>
      {talks.map((talk) => (
        <TalkCard key={talk.id} {...talk}></TalkCard>
      ))}
      {isFetchingNextPage &&
        Array.from({ length: 20 }, (_, idx) => (
          <li key={idx}>
            <TalkCardSkeleton />
          </li>
        ))}
      <div ref={target}></div>
    </>
  );
});

TalkPosts.displayName = 'TalkPosts';

export default TalkPosts;

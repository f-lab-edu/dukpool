import ArticleCard from '@components/article/ArticleCard';
import ArticleCardSkeleton from '@components/common/Skeleton/ArticleCardSkeleton';
import { useAllArticles } from '@hooks/useGetQueries';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { memo, useCallback, useMemo } from 'react';

const ArticlePosts = memo(({ sortType }: { sortType: string }) => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useAllArticles(sortType);
  const articles = useMemo(
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
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article}></ArticleCard>
      ))}
      {isFetchingNextPage &&
        Array.from({ length: 20 }, (_, idx) => (
          <li key={idx}>
            <ArticleCardSkeleton />
          </li>
        ))}
      <div ref={target}></div>
    </>
  );
});

ArticlePosts.displayName = 'ArticlePosts';

export default ArticlePosts;

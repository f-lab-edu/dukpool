import ArticleCard from '@components/article/ArticleCard';
import { useAllArticles } from '@hooks/useGetQueries';
import { memo } from 'react';

const ArticlePosts = memo(({ sortType }: { sortType: string }) => {
  const { data: articles } = useAllArticles(sortType);
  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article}></ArticleCard>
      ))}
    </>
  );
});

ArticlePosts.displayName = 'ArticlePosts';

export default ArticlePosts;

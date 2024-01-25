import ArticleCard from '@components/article/ArticleCard';
import { useGetAllArticles } from '@hooks/useGetQueries';
import { ArticlePostProps } from '@utils/mockData';
import { memo } from 'react';

const ArticlePosts = memo(({ sortType }: { sortType: string }) => {
  const { data: articles } = useGetAllArticles(sortType);
  return (
    <>
      {articles.map((article: ArticlePostProps) => (
        <ArticleCard key={article.id} {...article}></ArticleCard>
      ))}
    </>
  );
});

ArticlePosts.displayName = 'ArticlePosts';

export default ArticlePosts;

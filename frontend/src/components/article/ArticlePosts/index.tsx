import ArticleCard from '@components/ArticleCard';
import { useGetAllArticles } from '@hooks/useGetQueries';
import { ArticleProps } from '@utils/mockData';
import { memo } from 'react';

const ArticlePosts = memo(() => {
  const { data: articles } = useGetAllArticles();
  return (
    <>
      {articles.map((article: ArticleProps) => (
        <ArticleCard key={article.id} {...article}></ArticleCard>
      ))}
    </>
  );
});

ArticlePosts.displayName = 'ArticlePosts';

export default ArticlePosts;

import { useGetArticle } from '@hooks/useGetQueries';
import getIdFromUrl from '@utils/getIdFromUrl';
import ArticleImage from '@components/article/ArticlePost/ArticleImage';
import ArticleDescription from '@components/article/ArticlePost/ArticleDescription';
import ArticleComment from '@components/article/ArticlePost/ArticleComment';

const DukpoolArticlePost = () => {
  const { data } = useGetArticle(getIdFromUrl());
  return (
    <>
      <ArticleImage images={data.images} />
      <ArticleDescription
        userProfile={data.userProfile}
        title={data.title}
        date={data.date}
        content={data.content}
      />
      <ArticleComment id={data.id} comments={data.comments} />
    </>
  );
};

export default DukpoolArticlePost;

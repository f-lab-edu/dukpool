import PostImage from '@components/common/PostDetail/PostImage';
import ArticleDescription from '@components/article/ArticleDetail/ArticleDescription';
import ArticleComment from '@components/article/ArticleDetail/ArticleComment';
import assert from 'assert';
import { useParams } from 'react-router-dom';
import { useArticle } from '@hooks/useGetQueries';
import styled from 'styled-components';

const ArticleDetail = () => {
  const { articleId } = useParams();
  assert(articleId);
  const { data } = useArticle(articleId);
  return (
    <StyledArticle>
      <PostImage images={data.img} />
      <ArticleDescription {...data} />
      <ArticleComment contentId={data.id} comments={data.comment} />
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  position: relative;
`;

export default ArticleDetail;

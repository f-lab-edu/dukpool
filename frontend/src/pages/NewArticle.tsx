import Layout from '@components/common/Layout';
import styled from 'styled-components';
import useInnerHeight from '@hooks/useInnerHeight';
import { media } from '@styles/media';
import { FormEvent } from 'react';
import { usePostArticle } from '@hooks/usePostMutations';
import Title from '@components/article/NewArticle/Title';
import Tags from '@components/article/NewArticle/Tags';
import { useAtomValue } from 'jotai';
import { postStateAtom } from '@atoms/postStateAtom';
import Content from '@components/article/NewArticle/Content';
import Images from '@components/article/NewArticle/Images';
import Button from '@components/common/Button';

const NewArticle = () => {
  const articleContent = useAtomValue(postStateAtom);
  const { height } = useInnerHeight();
  const { mutate: postNewArticle } = usePostArticle();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postNewArticle(articleContent);
  };

  return (
    <Layout>
      <StyledSection>
        <StyledForm $height={height} onSubmit={handleSubmit}>
          <Title />
          <Tags />
          <Content />
          <Images />
          <StyledButtonContainer>
            <StyledButtonWrapper>
              <Button text="등록" disabled={false} $colorType="dark" />
            </StyledButtonWrapper>
          </StyledButtonContainer>
        </StyledForm>
      </StyledSection>
    </Layout>
  );
};

const StyledSection = styled.section`
  max-width: 1140px;
  width: 100%;
  padding: 0 50px;
  margin: 30px auto;
  margin-bottom: 0;
  ${media.phone`
    padding: 0 20px;
  `}
`;

const StyledForm = styled.form<{ $height: number }>`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const StyledButtonContainer = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledButtonWrapper = styled.div`
  width: 100px;
`;

export default NewArticle;

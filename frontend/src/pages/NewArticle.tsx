import { useForm } from 'react-hook-form';
import { media } from '@styles/media';
import { usePostArticle } from '@hooks/usePostMutations';
import styled from 'styled-components';
import Layout from '@components/common/Layout';
import Title from '@components/article/ArticleForm/Title';
import Tags from '@components/article/ArticleForm/Tags';
import Content from '@components/article/ArticleForm/Content';
import Images from '@components/article/ArticleForm/Images';
import Button from '@components/common/Button';
import ErrorMessage from '@components/common/ErrorMessage.tsx';

type FormValues = {
  title: string;
  tags: string[];
  content: string;
  images: string[] | File[];
};

const NewArticle = () => {
  const { mutate: postNewArticle } = usePostArticle();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      tags: [],
      images: [],
    },
    mode: 'onTouched',
  });

  const onSubmit = ({ title, tags, content, images }: FormValues) => {
    console.log(title, tags, content, images);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    tags.forEach((tag) => formData.append('tags', tag));
    images.forEach((image) => formData.append('images', image));
    postNewArticle(formData);
  };

  return (
    <Layout>
      <StyledSection>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledTitle>덕질 자랑하기</StyledTitle>
          <Title register={register('title', { value: '', minLength: 5 })} />
          {errors.title && (
            <ErrorMessage message="제목을 최소 5자 이상 입력해주세요." />
          )}
          <Tags setValue={setValue} tagList={watch('tags')} />
          <Content
            register={register('content', { value: '', minLength: 10 })}
          />
          {errors.content && (
            <ErrorMessage message="내용을 최소 10자 이상 입력해주세요." />
          )}
          <Images setValue={setValue} imageList={watch('images')} />
          {errors.content && (
            <ErrorMessage message="파일은 최대 5개까지 첨부할 수 있습니다." />
          )}
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

const StyledForm = styled.form`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const StyledTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
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

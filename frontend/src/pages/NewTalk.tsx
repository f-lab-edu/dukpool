import { FormProvider, useForm } from 'react-hook-form';
import { media } from '@styles/media';
import { usePostTalk } from '@hooks/usePostMutations';
import styled from 'styled-components';
import Layout from '@components/common/Layout';
import Title from '@components/common/Form/Title';
import Tags from '@components/common/Form/Tags';
import Content from '@components/common/Form/Content';
import Images from '@components/common/Form/Images';
import Button from '@components/common/Button';

type FormValues = {
  title: string;
  tags: string[];
  content: string;
  images: (string | File)[];
};

const NewTalk = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      title: '',
      tags: [],
      content: '',
      images: [],
    },
  });
  const { mutate: postNewTalk } = usePostTalk();

  const onSubmit = ({ title, tags, content, images }: FormValues) => {
    console.log(title, tags, content, images);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    tags.forEach((tag) => formData.append('tags', tag));
    images.forEach((image) => formData.append('images', image));
    postNewTalk(formData);
  };

  return (
    <FormProvider {...methods}>
      <Layout>
        <StyledSection>
          <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
            <StyledTitle>덕질 토크하기</StyledTitle>
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
    </FormProvider>
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

export default NewTalk;

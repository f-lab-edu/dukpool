import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { useGetArticle } from '@hooks/useGetQueries';
import { usePatchArticle } from '@hooks/usePatchMutations';
import getIdFromUrl from '@utils/getIdFromUrl';
import Title from '@components/article/ArticleForm/Title';
import Tags from '@components/article/ArticleForm/Tags';
import Content from '@components/article/ArticleForm/Content';
import Images from '@components/article/ArticleForm/Images';
import Button from '@components/common/Button';
import ErrorMessage from '@components/common/ErrorMessage.tsx';
import styled from 'styled-components';
import { convertURLtoFile } from '@utils/convertURLtoFile';

type FormValues = {
  title: string;
  tags: string[];
  content: string;
  images: (string | File)[];
};

const DukpoolEditArticle = memo(() => {
  const articleId = getIdFromUrl();
  const { data: article } = useGetArticle(articleId);
  const { mutate: patchArticle } = usePatchArticle();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: article.title,
      tags: article.tags,
      content: article.content,
      images: article.images,
    },
    mode: 'onTouched',
  });

  const onSubmit = async ({ title, tags, content, images }: FormValues) => {
    console.log(title, tags, content, images);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    tags.forEach((tag) => formData.append('tags', tag));
    await Promise.all(
      images.map(async (image) => {
        if (typeof image === 'string') {
          const file = await convertURLtoFile(image);
          formData.append('images', file);
          return file;
        } else {
          formData.append('images', image);
        }
      }),
    );
    patchArticle({ articleId, formData });
  };

  console.log(errors.title?.type);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title
        register={register('title', {
          value: '',
          minLength: 5,
          required: true,
        })}
      />
      {errors.title && <ErrorMessage type={errors.title?.type} field="제목" />}
      <Tags setValue={setValue} currentTags={watch('tags')} />
      <Content
        register={register('content', {
          value: '',
          minLength: 10,
          required: true,
        })}
      />
      {errors.content && (
        <ErrorMessage type={errors.content?.type} field="내용" />
      )}
      <Images setValue={setValue} currentImages={watch('images')} />
      <StyledButtonContainer>
        <StyledButtonWrapper>
          <Button text="등록" disabled={false} $colorType="dark" />
        </StyledButtonWrapper>
      </StyledButtonContainer>
    </form>
  );
});

DukpoolEditArticle.displayName = 'DukpoolEditArticle';

const StyledButtonContainer = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledButtonWrapper = styled.div`
  width: 100px;
`;

export default DukpoolEditArticle;

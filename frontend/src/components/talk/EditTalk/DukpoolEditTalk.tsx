import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTalk } from '@hooks/useGetQueries';
import { usePatchTalk } from '@hooks/usePatchMutations';
import getIdFromUrl from '@utils/getIdFromUrl';
import Title from '@components/common/Form/Title';
import Tags from '@components/common/Form/Tags';
import Content from '@components/common/Form/Content';
import Images from '@components/common/Form/Images';
import Button from '@components/common/Button';
import styled from 'styled-components';
import { convertURLtoFile } from '@utils/convertURLtoFile';

type FormValues = {
  title: string;
  tags: string[];
  content: string;
  images: (string | File)[];
};

const DukpoolEditTalk = memo(() => {
  const talkId = getIdFromUrl();
  const { data: article } = useTalk(talkId);
  const { mutate: patchTalk } = usePatchTalk();

  const methods = useForm<FormValues>({
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
    patchTalk({ talkId, formData });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Title />
        <Tags />
        <Content />
        <Images />
        <StyledButtonContainer>
          <StyledButtonWrapper>
            <Button text="등록" disabled={false} $colorType="dark" />
          </StyledButtonWrapper>
        </StyledButtonContainer>
      </form>
    </FormProvider>
  );
});

DukpoolEditTalk.displayName = 'DukpoolEditTalk';

const StyledButtonContainer = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledButtonWrapper = styled.div`
  width: 100px;
`;

export default DukpoolEditTalk;

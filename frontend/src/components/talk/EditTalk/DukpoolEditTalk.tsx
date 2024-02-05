import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTalk } from '@hooks/useGetQueries';
import { usePatchTalk } from '@hooks/usePatchMutations';
import Tags from '@components/common/Form/Tags';
import Images from '@components/common/Form/Images';
import Button from '@components/common/Button';
import styled from 'styled-components';
import { convertURLtoFile } from '@utils/convertURLtoFile';
import Input from '@components/common/Input';
import TextArea from '@components/common/TextArea';
import ErrorMessage from '@components/common/ErrorMessage.tsx';
import { useParams } from 'react-router-dom';
import assert from '@utils/assert';

type FormValues = {
  title: string;
  tags: string[];
  content: string;
  images: (string | File)[];
};

const DukpoolEditTalk = memo(() => {
  const { talkId } = useParams();
  assert(talkId);
  const { data: article } = useTalk(Number(talkId));
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
  const { title, content } = methods.formState.errors;

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
    patchTalk({ id: Number(talkId), body: formData });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input
          label="제목"
          placeholder="제목을 입력해주세요."
          registerType="title"
          required={true}
          minLength={5}
        />
        {<ErrorMessage field="제목" type={title?.type!} length={5} />}
        <Tags />
        <TextArea
          label="내용"
          placeholder="최소 10자의 내용을 입력해주세요"
          registerType="content"
          required={true}
          minLength={10}
        />
        {<ErrorMessage field="내용" type={content?.type!} length={10} />}
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

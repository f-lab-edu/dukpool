import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { useTalk } from '@hooks/useGetQueries';
import { usePatchTalk } from '@hooks/usePatchMutations';
import { convertURLtoFile } from '@utils/convertURLtoFile';
import assert from 'assert';
import Tags from '@components/common/Form/Tags';
import Images from '@components/common/Form/Images';
import Button from '@components/common/Button';
import styled from 'styled-components';
import Input from '@components/common/Input';
import TextArea from '@components/common/TextArea';
import ErrorMessage from '@components/common/ErrorMessage.tsx';

type FormValues = {
  title: string;
  tags: string[];
  desc: string;
  files: (string | File)[];
};

const DukpoolEditTalk = memo(() => {
  const { talkId } = useParams();
  assert(talkId);
  const { data: talk } = useTalk(talkId);
  const { mutate: patchTalk } = usePatchTalk();
  const methods = useForm<FormValues>({
    defaultValues: {
      title: talk.title,
      tags: talk.tag,
      desc: talk.desc,
      files: talk.img,
    },
    mode: 'onTouched',
  });
  const { title: titleErrorState, desc: descErrorState } =
    methods.formState.errors;

  const onSubmit = async ({ title, tags, desc, files }: FormValues) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('desc', desc);
    tags.forEach((tag) => formData.append('tag[]', tag));
    await Promise.all(
      files.map(async (image) => {
        if (typeof image === 'string') {
          const file = await convertURLtoFile(image);
          formData.append('files', file);
          return file;
        } else {
          formData.append('files', image);
        }
      }),
    );
    patchTalk({ id: talkId, body: formData });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input
          label="제목"
          placeholder="제목을 입력해주세요."
          registerType="title"
          required={true}
          minLength={2}
        />
        {titleErrorState && (
          <ErrorMessage field="제목" type={titleErrorState.type} length={2} />
        )}
        <Tags />
        <TextArea
          label="내용"
          placeholder="최소 10자의 내용을 입력해주세요"
          registerType="desc"
          required={true}
          minLength={10}
        />
        {descErrorState && (
          <ErrorMessage field="내용" type={descErrorState?.type} length={10} />
        )}
        <Images />
        <StyledButtonContainer>
          <StyledButtonWrapper>
            <Button type="submit" text="등록" disabled={false} />
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

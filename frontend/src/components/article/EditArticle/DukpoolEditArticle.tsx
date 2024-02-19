import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useArticle } from '@hooks/useGetQueries';
import { usePatchArticle } from '@hooks/usePatchMutations';
import { useParams } from 'react-router-dom';
import { convertURLtoFile } from '@utils/convertURLtoFile';
import Tags from '@components/common/Form/Tags';
import Images from '@components/common/Form/Images';
import Button from '@components/common/Button';
import styled from 'styled-components';
import Input from '@components/common/Input';
import ErrorMessage from '@components/common/ErrorMessage.tsx';
import TextArea from '@components/common/TextArea';
import assert from 'assert';

type FormValues = {
  title: string;
  tags: string[];
  desc: string;
  files: (string | File)[];
};

const DukpoolEditArticle = memo(() => {
  const { articleId } = useParams();
  assert(articleId);
  const { data: article } = useArticle(articleId);
  const { mutate: patchArticle } = usePatchArticle();

  const methods = useForm<FormValues>({
    defaultValues: {
      title: article.title,
      tags: article.tag,
      desc: article.desc,
      files: article.img,
    },
    mode: 'onTouched',
  });
  const { title: titleErrorState, desc: descErrorState } =
    methods.formState.errors;

  const onSubmit = async ({ title, tags, desc, files }: FormValues) => {
    console.log(title, tags, desc, files);
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
          console.log(image);
          formData.append('files', image);
        }
      }),
    );
    patchArticle({ id: articleId, body: formData });
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
        {titleErrorState && (
          <ErrorMessage field="제목" type={titleErrorState.type} length={5} />
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
          <ErrorMessage field="내용" type={descErrorState.type} length={10} />
        )}
        <Images />
        <StyledButtonContainer>
          <StyledButtonWrapper>
            <Button
              type="submit"
              text="등록"
              disabled={false}
              $colorType="dark"
            />
          </StyledButtonWrapper>
        </StyledButtonContainer>
      </form>
    </FormProvider>
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

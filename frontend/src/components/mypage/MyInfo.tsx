import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useCheckNickname, useUserData } from '@hooks/useGetQueries';
import { usePatchNickname } from '@hooks/usePatchMutations';
import { media } from '@styles/media';
import styled from 'styled-components';
import useDebounce from '@hooks/useDebounce';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import placeholderImage from '@assets/images/placeholder-image.png';
import MyPosts from '@components/mypage/MyPosts';
import ErrorMessage from '@components/common/ErrorMessage.tsx';

type FormValue = {
  nickname: string;
};

const MyInfo = memo(() => {
  const { data: user } = useUserData();
  const methods = useForm<FormValue>({
    defaultValues: {
      nickname: user.nickname,
    },
    mode: 'onTouched',
  });
  const nickname = methods.watch('nickname');
  const debouncedNickname = useDebounce(nickname, 200);
  const { data: validate } = useCheckNickname(debouncedNickname, user.nickname);
  const { mutate: updateNickname } = usePatchNickname();
  const onSubmit = ({ nickname }: FormValue) => {
    if (!validate) updateNickname(nickname);
  };
  console.log(validate);
  return (
    <FormProvider {...methods}>
      <StyledSection>
        <StyledSectionTitle>유저 정보</StyledSectionTitle>
        <StyledContainer>
          <StyledImg src={user.profileImg ?? placeholderImage} />
          <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
            <Input
              label="닉네임"
              placeholder="닉네임을 입력해주세요."
              registerType="nickname"
              required={true}
              maxLength={8}
            />
            {validate && nickname !== user.nickname ? (
              <ErrorMessage type="duplicate" />
            ) : null}
            <StyledButtonContainer>
              <StyledButtonWrapper>
                <Button
                  type="submit"
                  text="수정"
                  disabled={
                    nickname === user.nickname ||
                    validate ||
                    nickname.length < 2
                  }
                  $colorType="dark"
                />
              </StyledButtonWrapper>
            </StyledButtonContainer>
          </StyledForm>
        </StyledContainer>
      </StyledSection>
      <MyPosts
        userNickname={user.nickname}
        userProfile={user.profileImg}
        articles={user.content}
        talks={user.talkContent}
      />
    </FormProvider>
  );
});

MyInfo.displayName = 'MyInfo';

const StyledSection = styled.section`
  max-width: 1140px;
  width: 100%;
  padding: 0 50px;
  margin: 40px auto;
  ${media.phone`
    padding: 0 20px;
  `}
`;

const StyledSectionTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const StyledImg = styled.img`
  max-width: 160px;
  overflow: hidden;
  border-radius: 50%;
  aspect-ratio: 1;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
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

export default MyInfo;

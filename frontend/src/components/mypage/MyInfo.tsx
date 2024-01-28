import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useGetUserProfile } from '@hooks/useGetQueries';
import { usePostNickname } from '@hooks/usePostMutations';
import { media } from '@styles/media';
import styled from 'styled-components';
import useDebounce from '@hooks/useDebounce';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import placeholderImage from '@assets/images/placeholder-image.png';

type FormValue = {
  nickname: string;
};

const MyInfo = memo(() => {
  const { data: profile } = useGetUserProfile();
  const methods = useForm<FormValue>({
    defaultValues: {
      nickname: profile.userName,
    },
    mode: 'onTouched',
  });
  const nicknameValue = methods.watch('nickname');
  const debouncedValue = useDebounce(nicknameValue, 200);
  // const { data: validate } = useGetCheckNickname(debouncedValue);
  console.log(debouncedValue);
  const { mutate: updateNickname } = usePostNickname();
  const onSubmit = ({ nickname }: FormValue) => {
    updateNickname(nickname);
  };
  return (
    <FormProvider {...methods}>
      <StyledSection>
        <StyledSectionTitle>유저 정보</StyledSectionTitle>
        <StyledContainer>
          <StyledImg src={profile.image ?? placeholderImage} />
          <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
            <Input
              label="닉네임"
              placeholder="닉네임을 입력해주세요."
              registerType="nickname"
              required={true}
              maxLength={8}
            />
            <StyledButtonContainer>
              <StyledButtonWrapper>
                <Button
                  type="submit"
                  text="수정"
                  disabled={false}
                  $colorType="dark"
                />
              </StyledButtonWrapper>
            </StyledButtonContainer>
          </StyledForm>
        </StyledContainer>
      </StyledSection>
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
  align-items: center;
  justify-content: center;
  width: 70%;
  // margin: 0 auto;
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

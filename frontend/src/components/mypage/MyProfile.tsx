import { memo, useContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useCheckNickname } from '@hooks/useGetQueries';
import { usePatchNickname } from '@hooks/usePatchMutations';
import { media } from '@styles/media';
import styled from 'styled-components';
import useDebounce from '@hooks/useDebounce';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import placeholderImage from '@assets/images/placeholder-image.png';
import ErrorMessage from '@components/common/ErrorMessage.tsx';
import editLogo from '@assets/icons/edit.svg';
import { logoutAtom, withdrawAtom } from '@atoms/authAtom';
import { useSetAtom } from 'jotai';
import { ModalContext } from '@context/ModalContext';
import ResignModal from '@components/common/Modal/ResignModal';

type FormValue = {
  nickname: string;
};

type MyProfileProps = {
  profileImg: string;
  nickname: string;
};

const MyProfile = memo(({ profileImg, nickname }: MyProfileProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const methods = useForm<FormValue>({
    defaultValues: {
      nickname,
    },
    mode: 'onTouched',
  });
  const newNickname = methods.watch('nickname');
  const debouncedNickname = useDebounce(newNickname, 200);
  const { data: validate } = useCheckNickname(debouncedNickname, nickname);
  const { mutate: updateNickname } = usePatchNickname();
  const { openModal } = useContext(ModalContext);
  const logout = useSetAtom(logoutAtom);
  const withdraw = useSetAtom(withdrawAtom);

  const handleWithdrawal = async () => {
    const isWithdrawal = await openModal(<ResignModal />).catch(() => false);
    if (isWithdrawal) withdraw();
  };

  const onSubmit = ({ nickname }: FormValue) => {
    if (!validate) updateNickname(nickname);
  };
  return (
    <FormProvider {...methods}>
      <StyledSection>
        <StyledSectionTitle>유저 정보</StyledSectionTitle>
        <StyledContainer>
          <StyledImg alt={nickname} src={profileImg ?? placeholderImage} />
          {isEdit ? (
            <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
              <Input
                label="닉네임"
                placeholder="닉네임을 입력해주세요."
                registerType="nickname"
                required={true}
                maxLength={8}
              />
              {validate && newNickname !== nickname ? (
                <ErrorMessage type="duplicate" />
              ) : null}
              <StyledButtonContainer>
                <StyledButtonWrapper>
                  <Button
                    text="취소"
                    disabled={false}
                    $colorType="error"
                    onClick={() => setIsEdit(false)}
                  />
                  <Button
                    type="submit"
                    text="수정"
                    disabled={
                      newNickname === nickname ||
                      validate ||
                      nickname.length < 2
                    }
                  />
                </StyledButtonWrapper>
              </StyledButtonContainer>
            </StyledForm>
          ) : (
            <StyledInfoContainer>
              <StyledInfo>
                <span>{nickname}</span>
                <StyledLogo
                  src={editLogo}
                  alt="edit"
                  onClick={() => setIsEdit(true)}
                />
              </StyledInfo>
              <StyledButtonContainer>
                <StyledButtonWrapper>
                  <Button
                    text="로그아웃"
                    disabled={false}
                    $colorType="light"
                    onClick={() => logout()}
                  />
                  <Button
                    text="회원탈퇴"
                    disabled={false}
                    $colorType="error"
                    onClick={handleWithdrawal}
                  />
                </StyledButtonWrapper>
              </StyledButtonContainer>
            </StyledInfoContainer>
          )}
        </StyledContainer>
      </StyledSection>
    </FormProvider>
  );
});

MyProfile.displayName = 'MyProfile';

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
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  aspect-ratio: 1;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledLogo = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  ${media.phone`
    width: 50%;
  `}
`;

const StyledButtonContainer = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export default MyProfile;

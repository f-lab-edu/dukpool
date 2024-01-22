import { memo } from 'react';
import styled from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';
import { media } from '@styles/media';

type DescriptionProps = {
  userProfile: { image: string | null; name: string };
  title: string;
  date: string;
  content: string;
};

const PostDescription = memo(
  ({ userProfile, title, date, content }: DescriptionProps) => {
    return (
      <StyledWrapper>
        <StyledInfoContainer>
          <StyledUserProfileContainer>
            <StyledUserProfile>
              <StyledProfileImgContainer>
                <StyledProfileImg src={userProfile.image ?? placeholderImage} />
              </StyledProfileImgContainer>
              <StyledProfileName>{userProfile.name}</StyledProfileName>
            </StyledUserProfile>
            <StyledEditContainer>
              <StyledEditButton>수정</StyledEditButton>
              <StyledEditButton>삭제</StyledEditButton>
            </StyledEditContainer>
          </StyledUserProfileContainer>
          <StyledDesciption>
            <StyledTitle>{title}</StyledTitle>
            <StyledDate>{date}</StyledDate>
            <StyledContent>{content}</StyledContent>
          </StyledDesciption>
        </StyledInfoContainer>
      </StyledWrapper>
    );
  },
);

PostDescription.displayName = 'PostDescription';

const StyledWrapper = styled.section`
  margin: 30px 100px;
  ${media.tablet`
    margin: 20px 30px;
  `}
  ${media.phone`
    margin: 0px 15px;
  `}
`;

const StyledInfoContainer = styled.div`
  max-width: 730px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;

const StyledUserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid var(--gray-4);
`;

const StyledUserProfile = styled.div`
  display: flex;
  align-items: center;
`;

const StyledProfileImgContainer = styled.div`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 4px;
`;

const StyledProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledProfileName = styled.span`
  font-size: 14px;
`;

const StyledEditContainer = styled.div`
  display: flex;
`;

const StyledEditButton = styled.button`
  font-size: 12px;
  background-color: transparent;
  border: none;
  font-weight: 500;
  color: var(--gray-1);
`;

const StyledDesciption = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid var(--gray-4);
`;

const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const StyledDate = styled.p`
  margin-bottom: 12px;
  font-size: 11px;
  color: var(--gray-1);
`;

const StyledContent = styled.div`
  padding: 10px 0;
`;

export default PostDescription;

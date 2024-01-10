import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';
import likeIcon from '@assets/icons/outlined-like.svg';
import commentIcon from '@assets/icons/comment.svg';

type TalkProps = {
  title: string;
  userProfile: {
    name: string;
    image: string | null;
  };
  image: string | null;
  content: string;
  date: string;
  id: number;
  likeCount: string;
  commentCount: string;
};

const TalkCard = memo(
  ({
    title,
    userProfile,
    image,
    content,
    date,
    id,
    likeCount,
    commentCount,
  }: TalkProps) => {
    return (
      <StyledList>
        <StyledLink to={`/talk/${id}`}>
          <StyledContainer>
            <StyledImgContainer>
              <StyledImage src={image ?? placeholderImage} />
            </StyledImgContainer>
            <StyledContentContainer>
              <StyledTitle>{title}</StyledTitle>
              <StyledContent>{content}</StyledContent>
            </StyledContentContainer>
          </StyledContainer>
          <StyledInfoContainer>
            <StyledProfileContainer>
              <StyledProfileDiv>
                <StyledProfileImageContainer>
                  <StyledProfileImage
                    src={userProfile.image ?? placeholderImage}
                  />
                </StyledProfileImageContainer>
                <StyledProfile>{userProfile.name}</StyledProfile>
              </StyledProfileDiv>
              <StyledCountBox>
                <StyledCount>
                  <StyledIcon src={likeIcon} />
                  <span>{likeCount}</span>
                </StyledCount>
                <StyledCount>
                  <StyledIcon src={commentIcon} />
                  <span>{commentCount}</span>
                </StyledCount>
              </StyledCountBox>
            </StyledProfileContainer>
            <StyledDate>{date}</StyledDate>
          </StyledInfoContainer>
        </StyledLink>
      </StyledList>
    );
  },
);

TalkCard.displayName = 'TalkCard';

const StyledList = styled.li``;

const StyledLink = styled(Link)`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 50%;
  justify-content: space-between;
  display: flex;
`;

const StyledImgContainer = styled.div`
  width: 25%;
  min-width: 80px;
  overflow: hidden;
  border-radius: 8px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledContentContainer = styled.div`
  width: 70%;
  height: 80px;
`;

const StyledContent = styled.div`
  width: 100%;
  line-height: 1.36;
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const StyledTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const StyledInfoContainer = styled.div`
  width: 100%;
  font-size: 14px;
  padding: 12px 0;
`;

const StyledProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  justify-content: space-between;
`;

const StyledProfileDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledProfileImageContainer = styled.div`
  width: 25px;
  overflow: hidden;
  border-radius: 50%;
`;

const StyledProfileImage = styled.img`
  width: 25px;
  height: 25px;
  object-fit: cover;
`;

const StyledProfile = styled.p`
  margin-left: 2px;
`;

const StyledDate = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 11px;
  margin-bottom: 4px;
  color: var(--gray-1);
`;

const StyledCountBox = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const StyledIcon = styled.img`
  width: 16px;
`;

export default TalkCard;

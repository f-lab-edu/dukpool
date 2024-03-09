import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';
import likeIcon from '@assets/icons/like.svg';
import commentIcon from '@assets/icons/comment.svg';
import { AllContentResponse } from 'src/@types/content';

const TalkCard = memo(
  ({
    id,
    createdAt,
    title,
    desc,
    img,
    commentCount,
    likeCount,
    writer,
  }: AllContentResponse) => {
    return (
      <StyledList>
        <StyledLink to={`/talk/${id}`}>
          <StyledContainer>
            <StyledImgContainer>
              <StyledImage alt={title} src={img[0] ?? placeholderImage} />
            </StyledImgContainer>
            <StyledContentContainer>
              <StyledTitle>{title}</StyledTitle>
              <StyledContent>{desc}</StyledContent>
            </StyledContentContainer>
          </StyledContainer>
          <StyledInfoContainer>
            <StyledProfileContainer>
              <StyledProfileDiv>
                <StyledProfileImageContainer>
                  <StyledProfileImage
                    alt={writer.nickname}
                    src={writer.profileImg ?? placeholderImage}
                  />
                </StyledProfileImageContainer>
                <StyledProfile>{writer.nickname}</StyledProfile>
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
            <StyledDate>{createdAt.slice(0, 10)}</StyledDate>
          </StyledInfoContainer>
        </StyledLink>
      </StyledList>
    );
  },
);

TalkCard.displayName = 'TalkCard';

const StyledList = styled.li`
  padding: 0 12px;
  max-width: 550px;
`;

const StyledLink = styled(Link)`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
`;

const StyledImgContainer = styled.div`
  width: 30%;
  min-width: 80px;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 1;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledContentContainer = styled.div`
  width: 65%;
`;

const StyledContent = styled.div`
  width: 100%;
  line-height: 1.36;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const StyledTitle = styled.h3`
  font-size: 16px;
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
  height: 25px;
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

import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';
import likeIcon from '@assets/icons/outlined-like.svg';
import commentIcon from '@assets/icons/comment.svg';
import { ArticlePostProps } from '@utils/mockData';

const ArticleCard = memo(
  ({
    title,
    userProfile,
    images,
    date,
    id,
    likeCount,
    comments,
  }: ArticlePostProps) => {
    return (
      <StyledList>
        <StyledLink to={`/article/${id}`}>
          <StyledImgContainer>
            <StyledImage src={images[0] ?? placeholderImage} />
          </StyledImgContainer>
          <StyledInfoContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledProfileContainer>
              <StyledProfileImageContainer>
                <StyledProfileImage
                  src={userProfile.image ?? placeholderImage}
                />
              </StyledProfileImageContainer>
              <StyledProfile>{userProfile.name}</StyledProfile>
            </StyledProfileContainer>
            <StyledDate>{date}</StyledDate>
            <StyledCountBox>
              <StyledCount>
                <StyledIcon src={likeIcon} />
                <span>{likeCount}</span>
              </StyledCount>
              <StyledCount>
                <StyledIcon src={commentIcon} />
                <span>{comments.users.length}</span>
              </StyledCount>
            </StyledCountBox>
          </StyledInfoContainer>
        </StyledLink>
      </StyledList>
    );
  },
);

ArticleCard.displayName = 'ArticleCard';

const StyledList = styled.li`
  padding: 0 8px;
  max-width: 250px;
  min-width: 150px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const StyledImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 1;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledInfoContainer = styled.div`
  width: 100%;
  font-size: 12px;
  padding: 12px 0;
`;

const StyledTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const StyledProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
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

export default ArticleCard;

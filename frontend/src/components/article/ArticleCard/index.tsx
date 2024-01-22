import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';
import likeIcon from '@assets/icons/outlined-like.svg';
import commentIcon from '@assets/icons/comment.svg';
import { ArticleProps } from '@utils/mockData';
import { media } from '@styles/media';

const ArticleCard = memo(
  ({
    title,
    userProfile,
    image,
    date,
    id,
    likeCount,
    commentCount,
  }: ArticleProps) => {
    return (
      <StyledList>
        <Link to={`/article/${id}`}>
          <StyledImgContainer>
            <StyledImage src={image ?? placeholderImage} />
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
                <span>{commentCount}</span>
              </StyledCount>
            </StyledCountBox>
          </StyledInfoContainer>
        </Link>
      </StyledList>
    );
  },
);

ArticleCard.displayName = 'ArticleCard';

const StyledList = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImgContainer = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  ${media.tablet`
    width: 150px;
    height: 150px;
  `}
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledInfoContainer = styled.div`
  width: 200px;
  font-size: 14px;
  padding: 12px 0;
  ${media.tablet`
    width: 150px;
  `}
`;

const StyledTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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

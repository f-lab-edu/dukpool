import { lazy, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';
import likeIcon from '@assets/icons/like.svg';
import commentIcon from '@assets/icons/comment.svg';
import { AllContentResponse } from 'src/@types/content';

const LazyImage = lazy(() => import('@components/common/Image/LazyImage'));

const ArticleCard = memo(
  ({
    id,
    createdAt,
    title,
    img,
    commentCount,
    likeCount,
    writer,
  }: AllContentResponse) => {
    return (
      <StyledList>
        <StyledLink to={`/article/${id}`}>
          <LazyImage src={img[0]} alt={title} />
          <StyledInfoContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledProfileContainer>
              <StyledProfileImageContainer>
                <StyledProfileImage
                  alt={writer.nickname}
                  src={writer.profileImg ?? placeholderImage}
                />
              </StyledProfileImageContainer>
              <StyledProfile>{writer.nickname}</StyledProfile>
            </StyledProfileContainer>
            <StyledDate>{createdAt.slice(0, 10)}</StyledDate>
            <StyledCountBox>
              <StyledCount>
                <StyledIcon src={likeIcon} alt="like" />
                <span>{likeCount}</span>
              </StyledCount>
              <StyledCount>
                <StyledIcon src={commentIcon} alt="comment" />
                <span>{commentCount}</span>
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

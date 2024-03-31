import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';
import likeIcon from '@assets/icons/like.svg';
import commentIcon from '@assets/icons/comment.svg';
import { ContentResponse } from 'src/@types/content';
import LazyImage from '@components/common/Image/LazyImage';

type MyTalkCardProps = {
  nickname: string;
  profileImg: string;
  data: Omit<Omit<ContentResponse, 'comment'>, 'writer'>;
};

const MyTalkCard = memo(({ nickname, profileImg, data }: MyTalkCardProps) => {
  return (
    <StyledList>
      <StyledLink to={`/talk/${data.id}`}>
        <StyledContainer>
          <LazyImage
            src={data.img[0]}
            alt={data.title}
            isTalkContentImg={true}
          />
          <StyledContentContainer>
            <StyledTitle>{data.title}</StyledTitle>
            <StyledContent>{data.desc}</StyledContent>
          </StyledContentContainer>
        </StyledContainer>
        <StyledInfoContainer>
          <StyledProfileContainer>
            <StyledProfileDiv>
              <StyledProfileImageContainer>
                <StyledProfileImage
                  alt={nickname}
                  src={profileImg ?? placeholderImage}
                />
              </StyledProfileImageContainer>
              <StyledProfile>{nickname}</StyledProfile>
            </StyledProfileDiv>
            <StyledCountBox>
              <StyledCount>
                <StyledIcon src={likeIcon} alt="like" />
                <span>{data.likeCount}</span>
              </StyledCount>
              <StyledCount>
                <StyledIcon src={commentIcon} alt="comment" />
                <span>{data.commentCount}</span>
              </StyledCount>
            </StyledCountBox>
          </StyledProfileContainer>
          <StyledDate>{data.createdAt.slice(0, 10)}</StyledDate>
        </StyledInfoContainer>
      </StyledLink>
    </StyledList>
  );
});

MyTalkCard.displayName = 'MyTalkCard';

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

export default MyTalkCard;

import { memo, useContext } from 'react';
import { ModalContext } from '@context/ModalContext';
import { ToastContext } from '@context/ToastContext';
import { useAtomValue } from 'jotai';
import { userUniqIdAtom } from '@atoms/authAtom';
import { useNavigate } from 'react-router-dom';
import { media } from '@styles/media';
import { usePostArticlePrefer } from '@hooks/usePostMutations';
import {
  useDeleteArticle,
  useDeleteArticlePrefer,
} from '@hooks/useDeleteMutations';
import { ContentResponse } from 'src/@types/content';
import styled from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';
import Tag from '@components/common/Tag';
import LikeButton from '@components/common/Button/LikeButton';
import PostModal from '@components/common/Modal/PostModal';
import LoginModal from '@components/common/Modal/LoginModal';

const ArticleDescription = memo(
  ({
    id,
    writer,
    title,
    createdAt,
    desc,
    tag,
    likeCount,
    isLiked,
  }: ContentResponse) => {
    const userUniqId = useAtomValue(userUniqIdAtom);
    const { openModal } = useContext(ModalContext);
    const { showToast } = useContext(ToastContext);
    const navigate = useNavigate();
    const { mutate: deleteContent } = useDeleteArticle();
    const { mutate: postLike } = usePostArticlePrefer();
    const { mutate: deleteLike } = useDeleteArticlePrefer();
    const handleDelete = async () => {
      const isDeleted = await openModal(<PostModal />).catch(() => false);
      if (isDeleted) {
        deleteContent(id);
        showToast('게시물이 삭제되었습니다!');
      }
    };
    const handlePrefer = () => {
      if (!userUniqId) openModal(<LoginModal />).catch(() => false);
      else {
        if (isLiked) deleteLike(id);
        else postLike(id);
      }
    };
    return (
      <StyledWrapper>
        <StyledInfoContainer>
          <StyledUserProfileContainer>
            <StyledUserProfile>
              <StyledProfileImgContainer>
                <StyledProfileImg src={writer.profileImg ?? placeholderImage} />
              </StyledProfileImgContainer>
              <StyledProfileName>{writer.nickname}</StyledProfileName>
            </StyledUserProfile>
            {userUniqId === writer.id && (
              <StyledEditContainer>
                <StyledEditButton
                  onClick={() => navigate(`/article/edit/${id}`)}
                >
                  수정
                </StyledEditButton>
                <StyledEditButton onClick={handleDelete}>삭제</StyledEditButton>
              </StyledEditContainer>
            )}
          </StyledUserProfileContainer>
          <StyledDesciption>
            <StyledTitle>{title}</StyledTitle>
            <StyledDate>{createdAt.slice(0, 10)}</StyledDate>
            <StyledContent>{desc}</StyledContent>
            <StyledTagList>
              {tag.map((tagItem) => (
                <Tag key={tagItem} tagName={tagItem} />
              ))}
            </StyledTagList>
            <LikeButton
              onClick={handlePrefer}
              isLiked={isLiked}
              likeCount={likeCount}
            />
          </StyledDesciption>
        </StyledInfoContainer>
      </StyledWrapper>
    );
  },
);

ArticleDescription.displayName = 'ArticleDescription';

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

const StyledTagList = styled.ul`
  display: flex;
  height: 20px;
  gap: 4px;
  flex-wrap: wrap;
`;

export default ArticleDescription;

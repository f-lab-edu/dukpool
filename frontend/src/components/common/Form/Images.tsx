import { memo } from 'react';
import styled from 'styled-components';
import closeIcon from '@assets/icons/close.svg';
import cameraIcon from '@assets/icons/camera.svg';
import plusIcon from '@assets/icons/plus.svg';
import { makeBlob } from '@utils/makeBlob';
import { useFormContext } from 'react-hook-form';

const Images = memo(() => {
  const { setValue, watch } = useFormContext();
  const currentImages: (string | File)[] = watch('images');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && currentImages.length + files.length <= 5) {
      setValue('images', [...currentImages, ...files]);
    }
  };

  const handleDeleteFile = (imageToDelete: string | File) => {
    setValue(
      'images',
      currentImages.filter((image) => image !== imageToDelete),
    );
  };

  return (
    <>
      <StyledContainer>
        <label htmlFor="fileImage">
          <StyledCustomInput>
            <StyledCameraImg src={cameraIcon} />
            <StyledTopContainer>
              <StyledTopImg src={plusIcon} />
            </StyledTopContainer>
          </StyledCustomInput>
        </label>
        <StyledInput
          multiple
          type="file"
          id="fileImage"
          onChange={handleFileChange}
        />
        {currentImages.map((image) => (
          <StyledImgWrapper
            key={typeof image === 'string' ? image : image.name}
          >
            <StyledImg
              src={typeof image === 'string' ? image : makeBlob(image)}
            />
            <StyledTopContainer onClick={() => handleDeleteFile(image)}>
              <StyledTopImg src={closeIcon} />
            </StyledTopContainer>
          </StyledImgWrapper>
        ))}
      </StyledContainer>
      <StyledParagraph>최대 5개의 파일을 첨부할 수 있습니다.</StyledParagraph>
    </>
  );
});

Images.displayName = 'Images';

const StyledContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 8px;
  display: flex;
  gap: 12px;
`;

const StyledCustomInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-color: var(--gray-6);
  cursor: pointer;
`;

const StyledCameraImg = styled.img`
  width: 40%;
  height: 40%;
`;

const StyledTopContainer = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
`;

const StyledTopImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledImgWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

const StyledImg = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledParagraph = styled.p`
  font-size: 12px;
  color: var(--gray-3);
`;

export default Images;

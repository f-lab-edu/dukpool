import { ChangeEvent, memo } from 'react';
import styled from 'styled-components';
import { imagesAtom } from '@atoms/postStateAtom';
import { useAtom } from 'jotai';
import closeIcon from '@assets/icons/close.svg';
import cameraIcon from '@assets/icons/camera.svg';
import plusIcon from '@assets/icons/plus.svg';
import { makeBlob } from '@utils/makeBlob';

const Images = memo(() => {
  const [images, setImages] = useAtom(imagesAtom);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && images.length + files.length <= 5) {
      const fileArray: File[] = Array.from(files);
      setImages([...images, ...fileArray]);
    }
  };

  const handleDeleteFile = (imageToDelete: File) => {
    setImages(images.filter((image) => image.name !== imageToDelete.name));
  };

  return (
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
      {images.map((image) => (
        <StyledImgWrapper key={image.name}>
          <StyledImg src={makeBlob(image)} />
          <StyledTopContainer onClick={() => handleDeleteFile(image)}>
            <StyledTopImg src={closeIcon} />
          </StyledTopContainer>
        </StyledImgWrapper>
      ))}
    </StyledContainer>
  );
});

Images.displayName = 'Images';

const StyledContainer = styled.div`
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

export default Images;

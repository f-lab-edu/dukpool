import imageCompression from 'browser-image-compression';

export const compressImage = async (file: File) => {
  try {
    const options = {
      maxSizeMB: 0.15,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    return await imageCompression(file, options);
  } catch (error) {
    console.error('Image compression failed:', error);
    return file;
  }
};

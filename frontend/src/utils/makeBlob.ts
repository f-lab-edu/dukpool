export const makeBlob = (file: File): any => {
  if (!file) return;
  const fileURL = URL.createObjectURL(file);
  return fileURL;
};

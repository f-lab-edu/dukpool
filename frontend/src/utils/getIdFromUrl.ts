const getIdFromUrl = () => {
  const segment = window.location.pathname.split('/');
  const articleId = Number(segment[segment.length - 1]);
  return articleId;
};

export default getIdFromUrl;

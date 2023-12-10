const Kakao = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  return <div></div>;
};

export default Kakao;

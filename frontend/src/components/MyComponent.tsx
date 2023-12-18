import { memo, useEffect } from 'react';

const MyComponent = memo(() => {
  useEffect(() => {
    throw new Error('마이 컴포넌트 에러');
  });
  return <div>asd</div>;
});

export default MyComponent;

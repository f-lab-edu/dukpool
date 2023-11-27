import { Outlet } from 'react-router-dom';

const RootPage = () => {
  return (
    <div>
      root
      <Outlet />
    </div>
  );
};

export default RootPage;

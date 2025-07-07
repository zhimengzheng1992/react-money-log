import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Outlet />
      this is layout
    </div>
  );
};

export default Layout;

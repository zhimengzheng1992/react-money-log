import { Button } from "antd-mobile";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Outlet />
      this is layout
      <Button color="primary">button</Button>
      <div className="purple">
        <Button color="primary">button</Button>
      </div>
    </div>
  );
};

export default Layout;

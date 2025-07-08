import { getBillList } from "@/store/slices/billSlice";
import { Button } from "antd-mobile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);
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

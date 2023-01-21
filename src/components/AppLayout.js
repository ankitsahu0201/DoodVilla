import HeaderComponent from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

export default AppLayout;

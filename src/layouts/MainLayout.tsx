import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Aside from "../screens/Dashboard/components/Aside";

const MainLayout = () => {
  return (
    <div className="relative flex h-screen w-full items-center">
      <div className="h-full">
        <Aside />
      </div>
      <div className={`relative h-full w-full transition-all duration-500`}>
        <Header />
        <div className="h-full w-full overflow-y-auto bg-[#EBDFD7] pt-[100px]">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

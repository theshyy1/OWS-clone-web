import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar/sidebar-component";

const MainLayout = () => {
  return (
    <div className="relative flex h-screen w-full items-center">
      <Sidebar />
      <div className="h-full w-full overflow-hidden transition-all duration-500">
        <Header />
        <div className="bg-background-dark mx-auto h-full w-full overflow-y-auto px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

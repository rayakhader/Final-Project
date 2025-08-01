import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className={`p-5 flex flex-col flex-1 w-[calc(100%-3.5rem)] md:ml-[280px] ml-3.5rem overflow-hidden`}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;

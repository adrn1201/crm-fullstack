import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import MainNav from "../components/MainNavbar";

export default function RootLayout() {
  return (
    <>
      <SideNav />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <MainNav />
        <Outlet />
      </main>
    </>
  );
}

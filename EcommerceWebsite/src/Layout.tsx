import { Outlet } from "react-router-dom";
import NavBar from "./Components/navBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

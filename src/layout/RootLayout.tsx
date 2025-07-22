import { Outlet } from "react-router";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div className="min-h-screen bg-black ">
      <Header />
      <Outlet />
    </div>
  );
}

export default RootLayout;

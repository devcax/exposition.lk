import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="min-h-screen bg-black">
      <Outlet/>
    </div>
  );
}

export default RootLayout;

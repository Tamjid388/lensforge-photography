import { Navbar } from "../components/Navbar/Navbar";

import { Footer } from "../components/Footer/Footer";
import { Outlet } from "react-router";

export const MainLayout = () => {


  return (
    <div>
      <Navbar />
      <div >
        <Outlet />
      </div>
     <div className="bg-black text-white">
       <Footer />
     </div>
    </div>
  );
};

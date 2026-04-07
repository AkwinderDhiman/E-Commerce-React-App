import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNavigation";
import useResponsive from "../hooks/useResponsive";

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isMobile } = useResponsive();

  // Auto-hide sidebar on mobile, show on desktop
  useEffect(() => {
    if (isMobile) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleCategoriesClick = () => {
    setDrawerOpen(true);
  };

  return (
    <>
      {isMobile ? (
        // Mobile Layout
        <div className="flex flex-col h-screen">
          <Header toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-y-auto pb-20">
            <Outlet />
          </div>
          <BottomNav onCategoriesClick={handleCategoriesClick} />
        </div>
      ) : (
        // Desktop Layout
        <>
          <Header toggleSidebar={toggleSidebar} />
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="flex">
            <Sidebar openSidebar={openSidebar} />
            <div className="p-4 w-full">
              <Outlet />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
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
  const [activeCategory, setActiveCategory] = useState(null);
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

  const handleCategorySelect = (categoryName) => {
    setActiveCategory(categoryName);
  };

  return (
    <>
      {isMobile ? (
        // Mobile Layout
        <div className="flex flex-col h-screen bg-white">
          <Header toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-y-auto pb-20">
            <Outlet />
          </div>
          <BottomNav onCategoriesClick={handleCategoriesClick} />
        </div>
      ) : (
        // Desktop Layout
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header toggleSidebar={toggleSidebar} />
          <Navbar toggleSidebar={toggleSidebar} activeCategory={activeCategory} />
          <div className="flex flex-1 gap-0">
            <div 
              className={`transition-all duration-300 ${openSidebar ? 'w-auto' : 'w-0 overflow-hidden'}`}
            >
              <Sidebar openSidebar={openSidebar} onCategorySelect={handleCategorySelect} activeCategory={activeCategory} />
            </div>
            <div className="flex-1 p-4">
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
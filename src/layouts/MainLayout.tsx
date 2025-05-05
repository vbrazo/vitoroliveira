import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // or your routing library
import { SidebarProvider } from "@/components/ui/sidebar";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const sidebarPages = ['/fit-score', '/fit-score/list', '/fit-score/new', '/user-settings'];

  useEffect(() => {
    const shouldCloseSidebar = sidebarPages.some(path => location.pathname.startsWith(path));
    if (shouldCloseSidebar) {
      document.cookie = "sidebar:state=false; path=/; max-age=604800";
    }
  }, [location.pathname]);

  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  );
};

export default MainLayout; 
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

import { Navbar, Sidebar } from '~/components';

export const MainLayout = () => {
  const isDesktopView = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box
      display={isDesktopView ? 'flex' : 'block'}
      width="100%"
      height="100%"
    >
      <Sidebar
        isDesktopView={isDesktopView}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

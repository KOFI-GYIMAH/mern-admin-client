import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

import { Navbar } from '~/components';

export const MainLayout = () => {
  return (
    <Box
      width="100%"
      height="100%"
    >
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

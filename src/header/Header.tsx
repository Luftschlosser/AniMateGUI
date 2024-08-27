import React, { FC } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import UsbDevice from '../components/UsbDevice.tsx';

export const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <UsbDevice />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

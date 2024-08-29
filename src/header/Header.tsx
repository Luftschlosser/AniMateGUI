import React, { FC } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import UsbDevice from '../components/UsbDevice.tsx';
import { LanguageSelect } from './LanguageSelect.tsx';

export const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <UsbDevice />
            <LanguageSelect />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

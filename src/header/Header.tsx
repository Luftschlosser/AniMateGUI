import React, { FC } from 'react';
import { AppBar, Box, Toolbar, useTheme } from '@mui/material';
import UsbDevice from '../components/UsbDevice.tsx';
import { LanguageSelect } from './LanguageSelect.tsx';
import { ThemeSwitch } from './ThemeSwitch.tsx';
import { HEADER_HEIGHT } from '../Constants.ts';

export const Header: FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <AppBar
        position="fixed"
        style={{ height: HEADER_HEIGHT, backgroundColor: theme.palette.primary.main }}
      >
        <Toolbar>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <UsbDevice />
            <div>
              <ThemeSwitch />
              <LanguageSelect />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

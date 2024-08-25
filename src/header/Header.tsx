import React, { FC } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';

export const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  );
};

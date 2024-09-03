import { forwardRef } from 'react';
import { AppBar, Box, IconButton, Toolbar, useTheme } from '@mui/material';
import UsbDevice from '../UsbDevice.tsx';
import { LanguageSelect } from './LanguageSelect.tsx';
import { ThemeSwitch } from './ThemeSwitch.tsx';
import { HEADER_HEIGHT } from '../../Constants.ts';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useConfigurationDrawerState } from '../../contexts/ConfigurationDrawerContext.tsx';
import ConfigurationNameInput from '../ConfigurationNameInput.tsx';
import SaveAndBurn from '../SaveAndBurn.tsx';

const Header = forwardRef<HTMLButtonElement>((_props, ref) => {
  const theme = useTheme();
  const { open, setOpen } = useConfigurationDrawerState();

  return (
    <Box>
      <AppBar
        position="fixed"
        style={{ height: HEADER_HEIGHT, backgroundColor: theme.palette.primary.main }}
      >
        <Toolbar>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={() => setOpen((prevState) => !prevState)} ref={ref}>
                {open ? (
                  <MenuOpenIcon style={{ pointerEvents: 'none' }} />
                ) : (
                  <MenuIcon style={{ pointerEvents: 'none' }} />
                )}
              </IconButton>
              <ConfigurationNameInput />
              <SaveAndBurn />
            </div>
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
});

export default Header;

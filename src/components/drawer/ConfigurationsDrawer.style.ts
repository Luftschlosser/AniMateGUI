import { styled } from '@mui/material';
import { DRAWER_WIDTH, HEADER_HEIGHT } from '../../Constants.ts';

interface DrawerWrapperProps {
  menuOpen: boolean;
}

export const DrawerWrapper = styled(
  'div',
  {},
)<DrawerWrapperProps>(({ theme, menuOpen }) => ({
  position: 'fixed',
  top: HEADER_HEIGHT,
  transform: menuOpen ? 'translateX(0)' : `translateX(-${DRAWER_WIDTH}px)`,
  height: `calc(100% - ${HEADER_HEIGHT}px)`,
  width: DRAWER_WIDTH,
  display: 'flex',
  flexDirection: 'column',
  padding: 10,
  boxSizing: 'border-box',
  backgroundColor: theme.palette.background.paper,
  transition: 'transform 0.2s',
  zIndex: 999,
}));

import { FC, useRef } from 'react';
import { MenuList } from '@mui/material';
import { useConfigurationDrawerState } from '../../contexts/ConfigurationDrawerContext.tsx';
import { DrawerWrapper } from './ConfigurationsDrawer.style.ts';
import useClickOutside from '../../hooks/useClickOutside.ts';

const ConfigurationsDrawer: FC<{ menuButton: HTMLButtonElement | null }> = ({ menuButton }) => {
  const { open, setOpen } = useConfigurationDrawerState();
  const menuRef = useRef(null);

  const handleClickOutside = (): void => {
    if (menuButton) {
      setOpen(false);
    }
  };

  useClickOutside([menuRef], handleClickOutside, menuButton);

  return (
    <DrawerWrapper menuOpen={open} ref={menuRef}>
      <MenuList>asd</MenuList>
    </DrawerWrapper>
  );
};

export default ConfigurationsDrawer;

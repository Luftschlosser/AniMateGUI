import { FC, MutableRefObject, useEffect, useRef } from 'react';
import { MenuList } from '@mui/material';
import { useConfigurationDrawerState } from '../../contexts/ConfigurationDrawerContext.tsx';
import { DrawerWrapper } from './ConfigurationsDrawer.style.ts';
import useClickOutside from '../../hooks/useClickOutside.ts';

const ConfigurationsDrawer: FC<{ menuButton: MutableRefObject<HTMLButtonElement | null> }> = ({
  menuButton,
}) => {
  const { open, setOpen } = useConfigurationDrawerState();
  const menuRef = useRef(null);

  useEffect(() => {
    console.log('ConfigurationsDrawer', menuButton);
  }, [menuButton]);

  const handleClickOutside = (): void => {
    if (menuButton) {
      setOpen(false);
    }
  };

  useClickOutside([menuRef], handleClickOutside, menuButton.current);

  return (
    <DrawerWrapper menuOpen={open} ref={menuRef}>
      <MenuList>asd</MenuList>
    </DrawerWrapper>
  );
};

export default ConfigurationsDrawer;

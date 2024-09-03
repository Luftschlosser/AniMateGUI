import { FC, useEffect, useRef, useState } from 'react';
import {
  Button,
  CircularProgress,
  ListItemButton,
  ListItemText,
  MenuList,
  useTheme,
} from '@mui/material';
import { useConfigurationDrawerState } from '../../contexts/ConfigurationDrawerContext.tsx';
import { DrawerWrapper } from './ConfigurationsDrawer.style.ts';
import useClickOutside from '../../hooks/useClickOutside.ts';
import { useConfigurations } from '../../contexts/ConfigurationsContext.tsx';
import { useTranslation } from 'react-i18next';

const ConfigurationsDrawer: FC<{ menuButton: HTMLButtonElement | null }> = ({ menuButton }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { open, setOpen } = useConfigurationDrawerState();
  const menuRef = useRef(null);
  const { configurations, activeConfiguration } = useConfigurations();

  const [currentActiveConfig, setCurrentActiveConfig] = useState(activeConfiguration);

  useEffect(() => {
    setCurrentActiveConfig(activeConfiguration);
  }, [activeConfiguration]);

  const handleClickOutside = (): void => {
    if (menuButton) {
      setOpen(false);
    }
  };

  useClickOutside([menuRef], handleClickOutside, menuButton);

  return (
    <DrawerWrapper menuOpen={open} ref={menuRef}>
      <MenuList>
        <Button variant={'contained'} style={{ width: '100%' }}>
          {t('newConfigButton')}
        </Button>
        {!configurations ? (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginTop: theme.spacing(2),
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <div style={{ marginTop: theme.spacing(2) }}>
            {Object.values(configurations).map((config) => (
              <ListItemButton
                selected={currentActiveConfig.id === config.id}
                key={config.id}
                onClick={() => console.log('open', config.id)}
              >
                <ListItemText style={{ color: theme.palette.text.primary }}>
                  {config.name}
                </ListItemText>
              </ListItemButton>
            ))}
          </div>
        )}
      </MenuList>
    </DrawerWrapper>
  );
};

export default ConfigurationsDrawer;

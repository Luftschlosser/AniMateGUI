import './i18n';
import { HEADER_HEIGHT } from './Constants.ts';
import { useTheme } from '@mui/material';
import Builder from './components/builder/Builder.tsx';
import ConfigurationsDrawer from './components/drawer/ConfigurationsDrawer.tsx';
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import Header from './header/Header.tsx';

const App: FC = () => {
  const theme = useTheme();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const [menuButton, setMenuButton] = useState<MutableRefObject<HTMLButtonElement | null>>(null); // Create state for the button ref

  useEffect(() => {
    setMenuButton(menuButtonRef);
  }, [menuButtonRef]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      <Header ref={menuButtonRef} />
      {menuButton && <ConfigurationsDrawer menuButton={menuButton} />}
      <div
        style={{
          height: `calc(100% - ${HEADER_HEIGHT}px)`,
          width: '100%',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Builder />
      </div>
    </div>
  );
};

export default App;

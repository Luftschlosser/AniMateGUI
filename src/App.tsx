import './i18n';
import { Header } from './header/Header.tsx';
import { HEADER_HEIGHT } from './Constants.ts';
import { useTheme } from '@mui/material';

function App() {
  const theme = useTheme();

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
      <Header />
      <div
        style={{
          height: `calc(100% - ${HEADER_HEIGHT}px)`,
          width: '100%',
          backgroundColor: theme.palette.background.default,
        }}
      ></div>
    </div>
  );
}

export default App;

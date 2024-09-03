import { FC } from 'react';
import { CircularProgress, useTheme } from '@mui/material';

const Loading: FC = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;

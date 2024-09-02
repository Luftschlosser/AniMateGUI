import { Box, styled } from '@mui/material';
import BuildingBlock from './BuildingBlock.tsx';

export const BuilderWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  margin: 0,
  width: '90%',
  height: '100%',
  backgroundImage: `linear-gradient(to right, ${theme.palette.background.subtle} 1px, transparent 1px)`,
  backgroundSize: 'calc(100% / 15) 100%',
  borderRight: `1px solid ${theme.palette.background.subtle}`,
}));

export const GridItem = styled(BuildingBlock)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.background.paper}`,
  '& .react-resizable-handle': {
    '&::after': {
      borderRight: `2px solid ${theme.palette.text.primary}`,
      borderBottom: `2px solid ${theme.palette.text.primary}`,
    },
  },
}));

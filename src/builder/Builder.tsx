import React, { FC } from 'react';
import GridLayout, { WidthProvider } from 'react-grid-layout';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import { BuilderWrapper, GridItem } from './Builder.style.ts';
import './test.css';
import { styled } from '@mui/material';
const Builder: FC = () => {
  const ResponsiveGridLayout = WidthProvider(GridLayout);

  const StyledResponsiveGridLayout = styled(ResponsiveGridLayout)(({ theme }) => ({
    height: ' 100%',
    minHeight: '100%',
  }));

  return (
    <BuilderWrapper>
      <StyledResponsiveGridLayout
        className="layout"
        cols={15}
        rowHeight={30}
        preventCollision
        verticalCompact={false}
        resizeHandles={['w', 'e']}
        containerPadding={[0, 0]}
        margin={[0, 10]}
        isBounded
      >
        <GridItem key={'a'} placement={{ x: 0, y: 0, w: 1, h: 1 }} />
        <GridItem key={'b'} placement={{ x: 0, y: 0, w: 1, h: 1 }} />
        <GridItem key={'c'} placement={{ x: 0, y: 0, w: 1, h: 1 }} />
      </StyledResponsiveGridLayout>
    </BuilderWrapper>
  );
};

export default Builder;

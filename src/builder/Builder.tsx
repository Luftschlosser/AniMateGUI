import React, { FC } from 'react';
import GridLayout, { WidthProvider } from 'react-grid-layout';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import { BuilderWrapper, GridItem } from './Builder.style.ts';
import './test.css';
const Builder: FC = () => {
  const ResponsiveGridLayout = WidthProvider(GridLayout);
  return (
    <BuilderWrapper>
      <ResponsiveGridLayout
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
      </ResponsiveGridLayout>
    </BuilderWrapper>
  );
};

export default Builder;

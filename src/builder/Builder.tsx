import React, { FC } from 'react';
import GridLayout from 'react-grid-layout';
import BuildingBlock from './BuildingBlock.tsx';

const Builder: FC = () => {
  return (
    <GridLayout
      className="layout"
      cols={12}
      rowHeight={30}
      width={1200}
      style={{ backgroundColor: 'green' }}
    >
      <div key="d" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
        c
      </div>
      <BuildingBlock key={'a'} placement={{ x: 0, y: 0, w: 1, h: 1 }} />
      <BuildingBlock key={'b'} placement={{ x: 2, y: 2, w: 1, h: 1 }} />
      <BuildingBlock key={'c'} placement={{ x: 4, y: 4, w: 1, h: 1 }} />
    </GridLayout>
  );
};

export default Builder;

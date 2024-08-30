import React, { FC, forwardRef } from 'react';

export interface BuildingBlockPlacement {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface BuildingBlockInterface {
  key: string;
  placement: BuildingBlockPlacement;
}

const BuildingBlock = forwardRef<HTMLDivElement, BuildingBlockInterface>(
  ({ style, className, onMouseDown, onMouseUp, onTouchEnd, children, key, placement }, ref) => {
    return (
      <div
        data-grid={{ x: placement.x, y: placement.y, w: placement.w, h: placement.h }}
        style={{ ...style, backgroundColor: 'red' }}
        key={key}
        className={className}
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
      >
        {key}
      </div>
    );
  },
);

export default BuildingBlock;

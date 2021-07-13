import React, { PropsWithChildren } from 'react';

import cn from 'classnames';

import { Board } from '../../types/Board';
import { getArrayMax2d } from '../../utils/Array';
import { COLORS } from './constants';

interface Props {
  className?: string;
  matrix?: Board;
  handleToggle?: (i: number, j: number) => void;
  title?: string;
}

function Matrix({
  className,
  matrix,
  handleToggle,
  title,
}: PropsWithChildren<Props>) {
  const totalClusters = matrix && getArrayMax2d(matrix) + 1;
  const colors = COLORS.slice(0, totalClusters);

  return (
    <div className={className}>
      {title && <h1 className="text-center my-4">{title}</h1>}
      {matrix?.map((row, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className="flex flex-row justify-center"
        >
          {row.map((col, j) => {
            const color = typeof col === 'number' && colors[col];

            return (
              <button
                onClick={() => handleToggle && handleToggle(i, j)}
                className={cn('w-10 h-10', color, {
                  'cursor-not-allowed': !handleToggle,
                  'hover:text-blue-500': handleToggle,
                })}
                // eslint-disable-next-line react/no-array-index-key
                key={j}
                type="button"
              >
                {(handleToggle && (col ? 'o' : '-')) || (col === false && '·')}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Matrix;

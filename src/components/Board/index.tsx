import React from 'react';

import NoResults from '../NoData';

interface Props {
  matrix: boolean[][];
  handleToggle: (i: number, j: number) => void;
}

function Board({ matrix, handleToggle }: Props) {
  return (
    <>
      {matrix ? (
        matrix.map((row, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="flex flex-row justify-center" key={i}>
            {row.map((col, j) => (
              <button
                onClick={() => handleToggle(i, j)}
                className="mx-3 px-1 w-3"
                // eslint-disable-next-line react/no-array-index-key
                key={j}
                type="button"
              >
                {col ? 'o' : '-'}
              </button>
            ))}
          </div>
        ))
      ) : (
        <NoResults />
      )}
    </>
  );
}

export default Board;

import React, { useEffect } from 'react';

import { useQuery } from 'react-query';

import { getBoard } from '../../services/BoardServices';
import { Nullable } from '../../types/Global';
import Button from '../Button';
import NoResults from '../NoData';
import WithLoading from '../WithLoading';

interface Props {
  matrix?: boolean[][];
  setMatrix: (value: boolean[][]) => void;
}

function Board({ matrix, setMatrix }: Props) {
  const thereIsMatrix = !!(matrix && matrix.length);

  const handleToggle = (i: number, j: number) => {
    if (matrix?.[i]) {
      const value = matrix[i]?.[j];
      const newRow = Object.assign([], matrix[i], { [j]: !value });
      const newMatrix = Object.assign([], matrix, { [i]: newRow });
      setMatrix(newMatrix);
    }
  };

  const { isLoading, isFetching, error, refetch } = useQuery(
    'getMatrix',
    getBoard,
    {
      enabled: false,
      onSuccess: (res) => res.data && res.data.length && setMatrix(res.data),
    }
  );

  const handleFetchAgain = () => {
    setMatrix([]);
    refetch();
  };

  useEffect(() => {
    if (!thereIsMatrix) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thereIsMatrix]);

  const handleSendData = () => {
    // Create service to send data
    // Use reactQuery
    // 1. POST to endpoint with data
    // 2. If response ok -> Update data && Toast -> Data updated ok
    // 3. If response fails -> Toast -> An error occurred
    console.log('Send data');
  };

  return (
    <WithLoading
      isLoading={isLoading || isFetching}
      error={error as Nullable<string>}
    >
      {thereIsMatrix ? (
        <div>
          {matrix?.map((row, i) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className="flex flex-row justify-center"
            >
              {row.map((col, j) => (
                <button
                  onClick={() => handleToggle(i, j)}
                  className="mx-3 px-1 w-3 hover:text-blue-500 hover:-translate-y-1"
                  // eslint-disable-next-line react/no-array-index-key
                  key={j}
                  type="button"
                >
                  {col ? 'o' : '-'}
                </button>
              ))}
            </div>
          ))}
          <div className="flex flex-col sm:flex-row items-center justify-center mt-5">
            <Button
              className="mb-3 sm:mb-0 sm:mr-3"
              onClick={handleSendData}
              text="Save board!"
            />
            <Button onClick={handleFetchAgain} text="Fetch board again" />
          </div>
        </div>
      ) : (
        <NoResults />
      )}
    </WithLoading>
  );
}

export default Board;

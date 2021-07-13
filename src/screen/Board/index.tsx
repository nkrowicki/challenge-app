import React, { useEffect, useMemo, useState } from 'react';

import { useMutation, useQuery } from 'react-query';

import { CLUSTER_MOCK } from '../../../mocks/Board';
import Button from '../../components/Button';
import Matrix from '../../components/Matrix';
import NoResults from '../../components/NoData';
import WithLoading from '../../components/WithLoading';
import { getBoard, postBoard } from '../../services/BoardServices';
import { Board as BoardType } from '../../types/Board';
import { Nullable } from '../../types/Global';

interface Props {
  matrix?: BoardType;
  setMatrix: (value: BoardType) => void;
}

function Board({ matrix, setMatrix }: Props) {
  const thereIsMatrix = !!(matrix && matrix.length);
  const [matrixClusters, setMatrixClusters] = useState<BoardType>();
  const [viewClusters, setViewClusters] = useState(false);
  const {
    isLoading: isLoadingPOST,
    error: errorPOST,
    mutate,
  } = useMutation('postMatrix', postBoard, {
    onSuccess: (res) => {
      const mockedMatrix: BoardType = CLUSTER_MOCK;
      const cluster = res.data;
      cluster.forEach((coordinates: [], index: number) => {
        coordinates.forEach((values: [number, number]) => {
          const [x, y] = values;
          if (
            typeof mockedMatrix[y] !== 'undefined' &&
            typeof mockedMatrix[y]?.[x] !== 'undefined'
          )
            mockedMatrix[y][x] = index;
        });
      });
      setMatrixClusters(mockedMatrix);
    },
    onMutate: (board: BoardType) => board,
  });

  const {
    isLoading: isLoadingGET,
    isFetching,
    error: errorGET,
    refetch,
  } = useQuery('getMatrix', getBoard, {
    enabled: false,
    onSuccess: (res) => res.data && res.data.length && setMatrix(res.data),
  });

  const isError =
    (errorGET as Nullable<string>) || (errorPOST as Nullable<string>);
  const isLoading = isLoadingGET || isFetching || isLoadingPOST;

  useEffect(() => {
    if (!thereIsMatrix) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thereIsMatrix]);

  const handleToggle = (i: number, j: number) => {
    if (matrix?.[i]) {
      const value = matrix[i]?.[j];
      const newRow = Object.assign([], matrix[i], { [j]: !value });
      const newMatrix = Object.assign([], matrix, { [i]: newRow });
      setMatrix(newMatrix);
    }
  };

  const buttons = useMemo(() => {
    const handleSendData = () => {
      setViewClusters(true);
      if (matrix) mutate(matrix);
    };
    const handleFetchAgain = () => {
      setViewClusters(false);
      setMatrix([]);
      refetch();
    };

    return (
      <div className="flex flex-col sm:flex-row items-center justify-center mt-5 mb-10">
        {!errorGET && (
          <Button
            className="mb-3 sm:mb-0 sm:mr-3"
            onClick={handleSendData}
            text="See active points!"
          />
        )}
        <Button onClick={handleFetchAgain} text="Fetch board again" />
      </div>
    );
  }, [errorGET, matrix, mutate, refetch, setMatrix]);

  return (
    <div className="flex flex-col items-center">
      <WithLoading
        isLoading={isLoading}
        error={(!isLoading && isError) || null}
      >
        {thereIsMatrix ? (
          <>
            {viewClusters ? (
              <Matrix
                matrix={matrixClusters}
                title="Clusters (Active Points)"
              />
            ) : (
              <Matrix matrix={matrix} handleToggle={handleToggle} />
            )}
            {buttons}
          </>
        ) : (
          <NoResults />
        )}
      </WithLoading>
      {isError && buttons}
    </div>
  );
}

export default Board;

import React, { PropsWithChildren } from 'react';

import { Nullable } from '../../types/Global';

interface Props {
  isLoading?: boolean;
  error: Nullable<String>;
}

function WithLoading({ isLoading, error, children }: PropsWithChildren<Props>) {
  if (isLoading || error) {
    return (
      <div className="flex justify-center items-center">
        {isLoading && (
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500" />
        )}
        {error && <p>{`An error has occurred: ${error}`}</p>}
      </div>
    );
  }
  return <>{children}</>;
}

export default WithLoading;

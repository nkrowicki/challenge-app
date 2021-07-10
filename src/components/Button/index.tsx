import React from 'react';

import cn from 'classnames';

interface Props {
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  text: string;
}

function Board({ className, disabled, onClick, text }: Props) {
  return (
    <button
      type="button"
      className={cn(
        'bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors',
        {
          'bg-gray-500 hover:bg-gray-500 cursor-not-allowed': disabled,
        },
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Board;

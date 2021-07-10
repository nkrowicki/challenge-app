import React, { useState } from 'react';

import Button from '../Button';

interface Props {
  setBoard: (x: number, y: number) => void;
}

function Board({ setBoard }: Props) {
  const [values, setValues] = useState({ x: 0, y: 0 });
  const handleSetValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.target.name]: Number(e.target.value) });
  const handleSetBoard = () => setBoard(values.x, values.y);
  const disableButton = !(values.x > 0 && values.y > 0);

  return (
    <>
      <form action="#">
        <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
          <h1 className="font-bold text-xl text-center">Create your board</h1>
          <div className="flex flex-col justify-center sm:flex-row">
            <div className="sm:mr-3">
              <p className="text-center">Value X</p>
              <input
                type="text"
                name="x"
                value={values.x}
                onChange={handleSetValue}
                className="border-2 rounded text-center px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                placeholder="Value X"
              />
            </div>
            <div>
              <p className="text-center">Value Y</p>
              <input
                type="text"
                name="y"
                value={values.y}
                onChange={handleSetValue}
                className="border-2 rounded text-center px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                placeholder="Value Y"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={handleSetBoard}
              disabled={disableButton}
              text="Create!"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Board;

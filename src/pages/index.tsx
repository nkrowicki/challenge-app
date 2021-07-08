import React, { useState } from 'react';

import Board from '../components/Board';
import CreateBoard from '../components/CreateBoard';
import Menu from '../components/Menu';
import { MENU } from '../components/Menu/constants';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';

const Index = () => {
  const [menu, setMenu] = useState(MENU.CREATE);
  const [boardSize, setBoardSize] = useState<[number, number]>();
  const [matrix, setMatrix] = useState<boolean[][]>([
    [true, false, false],
    [false, false, true],
  ]);

  const handleSetBoard = (x: number, y: number) => {
    setBoardSize([x, y]);
    setMenu(MENU.FETCH);
  };

  // TODO: Read next comments

  // Ask user if wish to create his own matrix with custom size
  // If not: Set matrix value with response endpoint (fetch data)
  // useEffect when MENU change?

  const handleToggle = (i: number, j: number) => {
    const newMatrix = [...matrix];
    newMatrix[i]![j] = !newMatrix[i]![j];
    // 2. POST to endpoint with data
    // 3. If response ok -> Toast -> Data updated ok
    setMatrix(newMatrix);
    // 4. If response fails -> Toast -> An error occurred
  };

  return (
    <Main meta={<Meta title="Challenge" description={AppConfig.description} />}>
      <Menu activeMenu={menu} className="mb-5" setMenu={setMenu} />
      {menu === MENU.CREATE ? (
        <CreateBoard setBoard={handleSetBoard} />
      ) : (
        <Board matrix={matrix} handleToggle={handleToggle} />
      )}
    </Main>
  );
};

export default Index;

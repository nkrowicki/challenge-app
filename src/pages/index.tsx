import React, { useEffect, useState } from 'react';

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
  const [matrix, setMatrix] = useState<boolean[][]>([]);

  const handleSetBoard = (x: number, y: number) => {
    if (x > 0 && y > 0) {
      setBoardSize([x, y]);
      setMenu(MENU.FETCH);
    }
  };

  useEffect(() => {
    const newMatrix = Array(boardSize?.[0]).fill(
      Array(boardSize?.[1]).fill(false)
    );
    setMatrix(newMatrix);
  }, [boardSize]);

  // TODO: Read next comments

  // Ask user if wish to create his own matrix with custom size
  // If not: Set matrix value with response endpoint (fetch data)
  // useEffect when MENU change?

  const handleToggle = (i: number, j: number) => {
    // 1. POST to endpoint with data
    // 3. If response ok -> Update data && Toast -> Data updated ok
    const value = !!matrix[i]?.[j];
    const newRow = Object.assign([], matrix[i], { [j]: !value });
    const newMatrix = Object.assign([], matrix, { [i]: newRow });
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

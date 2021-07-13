import React, { useEffect, useState, useRef } from 'react';

import CreateBoard from '../components/CreateBoard';
import Menu from '../components/Menu';
import { MENU } from '../components/Menu/constants';
import { Meta } from '../layout/Meta';
import Board from '../screen/Board';
import { Main } from '../templates/Main';
import { Board as BoardType } from '../types/Board';
import { AppConfig } from '../utils/AppConfig';

const Index = () => {
  const [menu, setMenu] = useState(MENU.CREATE);
  const [boardSize, setBoardSize] = useState<[number, number]>();
  const [matrix, setMatrix] = useState<BoardType>();
  const isFirstRun = useRef(true);

  const handleSetBoard = (x: number, y: number) => {
    if (x > 0 && y > 0) {
      setBoardSize([x, y]);
    }
  };

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    const newMatrix = Array(boardSize?.[0]).fill(
      Array(boardSize?.[1]).fill(false)
    );
    setMatrix(newMatrix);
    setMenu(MENU.FETCH);
  }, [boardSize]);

  return (
    <Main meta={<Meta title="Challenge" description={AppConfig.description} />}>
      <Menu activeMenu={menu} className="mb-5" setMenu={setMenu} />
      {menu === MENU.CREATE ? (
        <CreateBoard setBoard={handleSetBoard} />
      ) : (
        <Board matrix={matrix} setMatrix={setMatrix} />
      )}
    </Main>
  );
};

export default Index;

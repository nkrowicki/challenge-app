import React from 'react';

import cn from 'classnames';

import { MENU } from './constants';

interface Props {
  className?: string;
  activeMenu: MENU;
  setMenu: (value: MENU) => void;
}

function Menu({ className, activeMenu, setMenu }: Props) {
  return (
    <div className={cn('flex justify-center', className)}>
      <div className="flex flex-col sm:flex-row justify-around sm:w-2/6">
        <button
          className={cn(
            'text-md whitespace-nowrap sm:text-xl text-gray-700 mb-3 sm:mb-0 sm:mr-10 transition duration-500 ease-in-out hover:text-gray-900 hover:-translate-y-1',
            { 'text-gray-900 font-bold': activeMenu === MENU.CREATE }
          )}
          onClick={() => setMenu(MENU.CREATE)}
          type="button"
        >
          Create Board
        </button>
        <button
          type="button"
          className={cn(
            'text-md whitespace-nowrap sm:text-xl text-gray-700 transition duration-500 ease-in-out hover:text-gray-900 hover:-translate-y-1',
            { 'text-gray-900 font-bold': activeMenu === MENU.FETCH }
          )}
          onClick={() => setMenu(MENU.FETCH)}
        >
          Fetch Board
        </button>
      </div>
    </div>
  );
}

export default Menu;

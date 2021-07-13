import { MOCK_RESPONSE } from '../../mocks/Board';
import { Board } from '../types/Board';

// Fake Services
export const getBoard = async () => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve(
          Object({
            data: MOCK_RESPONSE,
          })
        );
      } else reject(new Error('Problem with DataBase (fake response error!)'));
    }, 1000);
  });
};

// eslint-disable-next-line unused-imports/no-unused-vars
export const postBoard = async (board: Board) => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        const newBoard = [
          [
            [0, 1],
            [0, 2],
            [1, 1],
            [2, 1],
          ],
          [[2, 3]],
          [[4, 3]],
          [[7, 3]],
          [[8, 5]],
          [
            [8, 7],
            [8, 8],
          ],
        ];
        resolve(
          Object({
            data: newBoard,
          })
        );
      } else reject(new Error('Problem with Board (fake response error!)'));
    }, 1000);
  });
};

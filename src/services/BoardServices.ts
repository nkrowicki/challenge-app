import { MOCK_RESPONSE } from '../../mocks/Board';

// Fake Service
export const getBoard = async () => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0) {
        resolve(
          Object({
            data: MOCK_RESPONSE,
          })
        );
      } else reject(new Error('Problem with DataBase (fake response!)'));
    }, 1000);
  });
};

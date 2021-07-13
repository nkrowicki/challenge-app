import { getArrayMax, getArrayMax2d } from './Array';

describe('#ArrayUtils', () => {
  test('Check getArrayMax return the maximum value of an array', () => {
    const arr = [1, 2, 3, 4, 10, 4, 5, 5, 7];
    const max = getArrayMax(arr);
    expect(max).toEqual(10);
  });

  test('Check getArrayMax2d return the maximum value of an 2D array', () => {
    const arr = [
      [1, -2, 3],
      [-5, 2, 5],
      [1, 90, 3],
      [1, 2, 96],
    ];
    const max = getArrayMax2d(arr);
    expect(max).toEqual(96);
  });
});

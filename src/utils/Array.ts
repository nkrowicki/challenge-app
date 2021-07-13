export const getArrayMax = (array: number[]) =>
  array.reduce((a, b) => Math.max(a, b));

export const getArrayMax2d = (array2d: any[][]) =>
  getArrayMax(array2d.map(getArrayMax));

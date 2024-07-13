export const randomCoord = (maxCoords: [number, number]) => {
  return [Math.floor(Math.random() * maxCoords[0]), Math.floor(Math.random() * maxCoords[1])];
};

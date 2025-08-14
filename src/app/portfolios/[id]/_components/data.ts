import {range, random} from '@es-toolkit/es-toolkit';

export const scatterData = range(1, 240).map(i => {
  return {
    id: `data-${i}`,
    x1: i,
    y1: random(5, 15),
    y2: random(5, 15),
  }
})

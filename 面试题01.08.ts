namespace M0108 {
  /**
 Do not return anything, modify matrix in-place instead.
 */
  function setZeroes(matrix: number[][]): void {
    const rows: Record<number, boolean> = {};
    const cols: Record<number, boolean> = {};

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          rows[i] = true;
          cols[j] = true;
        }
      }
    }

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (rows[i] === true) {
          matrix[i][j] = 0;
          continue;
        }
        if (cols[j] === true) {
          matrix[i][j] = 0;
          continue;
        }
      }
    }
  }

  const matrix: number[][] = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ];

  setZeroes(matrix);

  console.log(matrix);
}

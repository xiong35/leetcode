namespace T54 {
  function spiralOrder(matrix: number[][]): number[] {
    let dirs = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    let toMoveX = matrix[0].length - 1;
    let toMoveY = matrix.length - 1;

    const result: number[] = [matrix[0][0]];

    let x = 0,
      y = 0,
      dir = 1;

    for (let i = 0; i < toMoveX; i++) {
      x += 1;
      result.push(matrix[y][x]);
    }

    while (toMoveX !== -1 && toMoveY !== -1) {
      dir = dir % 4;
      let [xMovement, yMovement] = dirs[dir++];
      if (xMovement) {
        for (let i = 0; i < toMoveX; i++) {
          x += xMovement;
          result.push(matrix[y][x]);
        }
        toMoveX--;
      } else {
        for (let i = 0; i < toMoveY; i++) {
          y += yMovement;
          result.push(matrix[y][x]);
        }
        toMoveY--;
      }
    }

    return result;
  }

  const matrix = [
    [1, 2],
    [5, 6],
    [9, 7],
  ];

  console.log(spiralOrder(matrix));
}

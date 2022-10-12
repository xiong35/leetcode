namespace T59 {
  function generateMatrix(n: number): number[][] {
    const retMat: number[][] = new Array(n)
      .fill(0)
      .map(() => new Array(n).fill(-1));

    const dirs = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    let curDir = 0,
      x = 0,
      y = 0;

    for (let i = 1; i <= n ** 2; i++) {
      // set
      retMat[y][x] = i;

      // turn
      let [xTryMovement, yTryMovement] = dirs[curDir];
      let xTryNext = x + xTryMovement,
        yTryNext = y + yTryMovement,
        hasTurned = false;
      if (retMat[yTryNext]?.[xTryNext] !== -1) {
        curDir++;
        curDir %= 4;
        hasTurned = true;
      }

      // move
      if (hasTurned) {
        let [xMovement, yMovement] = dirs[curDir];
        x += xMovement;
        y += yMovement;
      } else {
        x = xTryNext;
        y = yTryNext;
      }
    }

    return retMat;
  }

  console.log(generateMatrix(6));
}

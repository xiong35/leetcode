class NumMatrix {
  from_lt: number[][] = [];

  constructor(matrix: number[][]) {
    this.from_lt = Array.from(Array(matrix.length)).map(() =>
      Array(matrix[0]?.length || 0).fill(0)
    );

    matrix.forEach((col, y) => {
      col.forEach((item, x) => {
        const newVal =
          ((this.from_lt[y - 1] ?? [])[x] ?? 0) +
          ((this.from_lt[y] ?? [])[x - 1] ?? 0) -
          ((this.from_lt[y - 1] ?? [])[x - 1] ?? 0) +
          item;
        this.from_lt[y][x] = newVal;
      });
    });
  }

  get(x: number, y: number): number {
    return (this.from_lt[y] ?? [])[x] ?? 0;
  }

  sumRegion(
    row1: number,
    col1: number,
    row2: number,
    col2: number
  ): number {
    return (
      ((this.from_lt[row2] ?? [])[col2] ?? 0) -
      ((this.from_lt[row2] ?? [])[col1 - 1] ?? 0) -
      ((this.from_lt[row1 - 1] ?? [])[col2] ?? 0) +
      ((this.from_lt[row1 - 1] ?? [])[col1 - 1] ?? 0)
    );
  }
}

const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];

var obj = new NumMatrix(matrix);
var param_1 = obj.sumRegion(2, 1, 4, 3);

console.log(param_1);

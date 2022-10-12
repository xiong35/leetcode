namespace T303 {
  class NumArray {
    sums: number[] = [];

    constructor(nums: number[]) {
      nums.reduce((prev, cur) => {
        const sum = prev + cur;
        this.sums.push(sum);
        return sum;
      }, 0);
    }

    sumRange(i: number, j: number): number {
      return this.sums[j] - (this.sums?.[i - 1] ?? 0);
    }
  }
}

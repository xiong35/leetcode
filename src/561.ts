function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);

  return nums.reduce(
    (prev, cur, ind) => (ind % 2 === 0 ? prev + cur : prev),
    0
  );
}

function coinChange(coins: number[], amount: number): number {
  const minNums: number[] = [0];

  coins.forEach((c) => (minNums[c] = 1));

  let i = 1;
  while (i <= amount) {
    let minCount = Infinity;
    coins.forEach((c) => {
      if (i - c >= 0) {
        minCount = Math.min(minCount, minNums[i - c] + 1);
      }
    });
    minNums[i] = minCount;
    i++;
  }

  return minNums[amount] === Infinity ? -1 : minNums[amount];
}

const coins = [1, 2, 5],
  amount = 13;

console.log(coinChange(coins, amount));

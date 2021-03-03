function countBits(num: number): number[] {
  const ones = [0];
  for (let i = 1; i <= num; i++) {
    let curOne = 0;
    let j = i;
    while (j) {
      if (j % 2 === 1) curOne++;
      j >>= 1;
    }
    ones.push(curOne);
  }

  return ones;
}

console.log(countBits(5));

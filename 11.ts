function maxArea(height: number[]): number {
  let i = 0,
    j = height.length - 1,
    max = -Infinity;
  while (i < j) {
    const curArea = (j - i) * Math.min(height[i], height[j]);
    if (curArea > max) max = curArea;

    if (height[j] >= height[i]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
}

console.log('# 11', maxArea([1,8,6,2,5,4,8,3,7]));
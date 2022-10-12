// function threeSum(nums: number[]): number[][] {
//   const answer = new Set<string>();

//   function _threeSum(left: number[], chosen: number[]) {
//     if (chosen.length === 3) {
//       if (chosen.reduce((prev, cur) => prev + cur) === 0) {
//         return answer.add(JSON.stringify(chosen.sort()));
//       } else {
//         return;
//       }
//     }
//     if (left.length + chosen.length < 3) return;

//     _threeSum(left.slice(1), [...chosen, left[0]]);
//     _threeSum(left.slice(1), [...chosen]);
//   }

//   _threeSum(nums, []);

//   return [...answer].map((str) => JSON.parse(str));
// }

function threeSum(nums: number[]): number[][] {
  const answer = new Set<string>();

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        answer.add(JSON.stringify([nums[i], nums[left], nums[right]]));
        left++, right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return [...answer].map((str) => JSON.parse(str));
}

console.log(threeSum([3, 0, -2, -1, 1, 2]));

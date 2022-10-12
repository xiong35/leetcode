namespace T503 {
  interface NumInfo {
    num: number;
    index: number;
  }

  function nextGreaterElements(nums: number[]): number[] {
    const total = nums.length;

    const result: NumInfo[] = new Array(total).fill(null);

    const numInfos = nums
      .map<NumInfo>((num, index) => ({ num, index }))
      .sort((info1, info2) => info1.num - info2.num);

    numInfos.forEach((numInfo, ind) => {
      if (ind === total - 1) return;

      // asc
      const { index, num } = numInfo;
      let pendingIndex = (index + 1) % total;

      while (pendingIndex !== index) {
        const pendingNum = nums[pendingIndex];
        // 比较下一个和现在谁大
        if (pendingNum > num) {
          // 下一个大:
          // 记录当前结果
          // break
          result[index] = {
            num: pendingNum,
            index: pendingIndex,
          };
          break;
        } else {
          // 现在的大:
          // 找下一个的 result
          if (result[pendingIndex] !== null) {
            // 有: 直接指到 result 的 index, continue
            pendingIndex = result[pendingIndex].index;
          } else {
            // 无: 手动改 index
            pendingIndex = (pendingIndex + 1) % total;
          }
        }
      }
    });

    console.log(result);

    return result.map((info) => info?.num ?? -1);
  }

  const nums = [1, 0, 1, 1, 1];

  console.log(nextGreaterElements(nums));
}

function wiggleMaxLength(nums: number[]): number {
    if (nums.length <= 2) return nums.length;
    let max: number = 0;
    let prev: any = [{ state: nums[1] - nums[0], before: 1 }];

    for (let i = 1; i < nums.length; i++) {
        const diff = nums[i] - nums[i - 1];
        if (diff * prev[i - 1].state < 0) {
            prev.push({ state: diff, before: prev[i - 1].before + 1 })
        } else {
            prev.push({ state: diff, before: 1 })
        }
    }
    console.log(prev.slice(1))
    prev.slice(1).forEach(obj => {
        if (obj.before > max) max = obj.before
    });
    return max;
};

wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])
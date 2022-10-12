namespace T35 {
  function searchInsert(nums: number[], target: number): number {
    if (nums.length === 0) {
      return 0;
    }
    let head = 0,
      tail = nums.length - 1,
      mid;

    while (head < tail) {
      mid = Math.floor((head + tail) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        tail = mid - 1;
      } else {
        head = mid + 1;
      }
    }

    if (nums[head] >= target) {
      return head;
    } else {
      return head + 1;
    }
  }
}

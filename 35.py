# mid split search
class Solution:
    def searchInsert(self, nums, target):
        if len(nums) <= 0:
            return 0
        min = 0
        max = len(nums) - 1
        mid = (min + max)//2
        while True:
            if target <= nums[0]:
                return min
            if target > nums[max]:
                return max + 1
            if target ==nums[max]:
                return max
            mid = (min + max)//2
            if target > nums[mid]:
                min = mid + 1
            elif target < nums[mid]:
                max = mid - 1
            else:
                return mid

s = Solution()
print(s.searchInsert([1], 1))

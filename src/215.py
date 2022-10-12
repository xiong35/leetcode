class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        list = []
        for i in range(k):
            list.append(nums[i])
        list.sort(reverse=True)
        for i in range(k, len(nums)):
            if nums[i] > list[k-1]:
                for j in range(k):
                    if nums[i] > list[j]:
                        list.insert(j, nums[i])
                        break
        return list[k-1]
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        j = 0
        i = 0
        while j < n and i < m:
            if nums1[i+j] <= nums2[j]:
                i += 1
            else:
                nums1.insert(i+j, nums2[j])
                j += 1
        while j < n:
            nums1.insert(i+j, nums2[j])
            j += 1
        for i in range(n):
            nums1.pop()

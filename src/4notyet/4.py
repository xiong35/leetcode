class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        smaller = 0

        start1 = 0
        end1 = len(nums1)
        start2 = 0
        end2 = len(nums2)

        target = (end1+end2)//2
        is_odd = (target == (end1+end2)/2)

        while True:
            mid1 = (start1 + end1)//2
            mid2 = (start2 + end2)//2

            if mid1+mid2 == target:
                pass
            
            if nums1[mid1] <= nums2[mid2]:
                start1 = mid1+1
                end2 = mid2
            else:
                end1 = mid1
                start2 = mid2+1

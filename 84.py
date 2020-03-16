class Solution:
    def largestRectangleArea(self, heights):
        height_set = set(heights)
        max_area = 0
        for cur_height in height_set:
            cur_area = 0
            for height in heights:
                if height >= cur_height:
                    cur_area += cur_height
                else:
                    if cur_area > max_area:
                        max_area = cur_area
                    cur_area = 0
            if cur_area > max_area:
                max_area = cur_area
        return max_area


s = Solution()
input = [x for x in range(100000) ]
x = s.largestRectangleArea(input)
print(x)

class Solution:
    def longestCommonPrefix(self, strs):
        if len(strs) <= 0:
            return ''
        min_len = len(min(strs, key=lambda i: len(i)))
        num_strs = len(strs)
        max_sub = ''
        for i in range(min_len):
            for j in range(num_strs):
                if strs[0][i] != strs[j][i]:
                    return max_sub
            max_sub += strs[0][i]

        return max_sub


s = Solution()
strs = ["aca", "ac"]
print(s.longestCommonPrefix(strs))

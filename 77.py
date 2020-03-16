# class Solution:
#     _step = 0
#     _rtList = []
#     cur_list = []

#     def combine(self, n, k):
#         if self._step == k:
#             self._rtList.append(self.cur_list[:])
#             return self._rtList
#         for i in range(1, n+1):
#             if i not in self.cur_list:
#                 self.cur_list.append(i)
#                 self._step += 1
#                 self.combine(n, k)
#                 self._step -= 1
#                 self.cur_list.pop()
#         return self._rtList
class Solution:
    def combine(self, n: int, k: int):
        def backtrack(first = 1, curr = []):
            # if the combination is done
            if len(curr) == k:  
                output.append(curr[:])
            for i in range(first, n + 1):
                # add i into the current combination
                curr.append(i)
                # use next integers to complete the combination
                backtrack(i + 1, curr)
                # backtrack
                curr.pop()
        
        output = []
        backtrack()
        return output



s = Solution()
n, k = (6, 6)
print(s.combine(n, k))

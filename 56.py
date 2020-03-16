class Solution:
    def merge(self, intervals):
        if len(intervals) <= 1:
            return intervals
        intervals = sorted(intervals, key=lambda i: i[0])
        index = 0
        rt_intervals = []
        cur_interval = intervals[0]
        for index in range(len(intervals)-1):
            if cur_interval[1] >= intervals[index+1][0]:
                cur_interval[1] = max(
                    cur_interval[1], intervals[index+1][1])
            else:
                rt_intervals.append(cur_interval)
                cur_interval = intervals[index+1]
        rt_intervals.append(cur_interval)
        return rt_intervals


s = Solution()
input = [[2,3],[4,5],[6,7],[8,9],]
print(s.merge(input))

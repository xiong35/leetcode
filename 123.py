from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) == 1:
            return max(0, prices[0])
        newlist = []
        j = -1
        i = 1
        while True:
            newlist.append(0)
            j += 1
            while prices[i] >= prices[i-1]:
                newlist[j] += prices[i] - prices[i-1]
                i += 1
                if i == len(prices) :
                    break
            if i == len(prices) :
                break
            newlist.append(0)
            j += 1
            while prices[i] < prices[i-1]:
                newlist[j] -= prices[i-1] - prices[i]
                i += 1
                if i == len(prices) :
                    break
            if i == len(prices) :
                break
        if len(newlist) == 1:
            return max(0, newlist[0])
        l_to_r = [newlist[0]]
        for i in range(1, len(newlist)):
            if l_to_r[i-1] >= 0:
                l_to_r.append(newlist[i]+l_to_r[i-1])
            else:
                l_to_r.append(newlist[i])
        r_to_l = [newlist[-1]]
        for i in range(1, len(newlist)):
            if r_to_l[-i] >= 0:
                r_to_l.insert(0, newlist[-i-1]+r_to_l[-i])
            else:
                r_to_l.insert(0, newlist[-i-1])
        maximum = []
        print(newlist)
        print(l_to_r)
        print(r_to_l)
        for i in range(len(newlist)):
            maximum.append(l_to_r[i])
            maximum.append(r_to_l[i])
            for j in range(i+1, len(newlist)):
                maximum.append(l_to_r[i]+r_to_l[j])
        return max(maximum)


s = Solution()
list = [5,4]
print(s.maxProfit(list))

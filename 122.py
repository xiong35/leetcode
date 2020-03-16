class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        sum = 0
        for i in range(1, len(prices)):
            if prices[i-1]< prices[i]:
                sum += prices[i] - prices[i-1]
        return sum

def memoize(fn):
    known = {1: 1, 2: 2}

    def memoizer(n):
        if n not in known:
            known[n] = fn(n)
        return known[n]
    return memoizer


@memoize
def climb(n):
    return climb(n-1)+climb(n-2)


class Solution:

    def climbStairs(self, n: int) -> int:
        return climb(n)


s = Solution()
input = 5
print(s.climbStairs(input))

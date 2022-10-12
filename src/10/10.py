class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        self.string = s
        self.pattern = p

        self.s_len = len(s)
        self.p_len = len(p)
        if self.s_len == 0:
            if self.p_len == 0:
                return True
            return self.isNull(0)
        if self.p_len == 0:
            return False
        if p[0] == "*":
            return False

        return self.match(0, 0)

    def match(self, s_ind, p_ind):
        if self.s_len <= s_ind:
            if self.p_len <= p_ind:
                return self.s_len == s_ind and self.p_len == p_ind
            else:
                return self.isNull(p_ind)

        if self.p_len <= p_ind:
            return self.s_len == s_ind and self.p_len == p_ind

        cur_p = self.pattern[p_ind]
        if cur_p == "*":
            return False
        if self.string[s_ind] == cur_p or cur_p == ".":
            if p_ind+1 < self.p_len:
                if self.pattern[p_ind+1] == "*":
                    if self.match(s_ind+1, p_ind):
                        return True
                    if self.match(s_ind+1, p_ind+2):
                        return True
                    if self.match(s_ind, p_ind+2):
                        return True
                    return False
            if self.match(s_ind+1, p_ind+1):
                return True
            return False
        else:
            return False or self.match(s_ind, p_ind+2)

    def isNull(self, p_ind):
        if self.pattern[-1] != "*":
            return False
        if self.pattern[p_ind] != "*":
            p_ind += 1
        while p_ind < self.p_len:
            if not self.pattern[p_ind] == "*":
                return False
            if self.pattern[p_ind-1] == "*":
                return False
            p_ind += 2
        return True


S = Solution()

s = "aaaaaaaab"
p = "a*a*a*a*a*a*a*a*a*a*a*a*a*a*n"
print(S.isMatch(s, p))

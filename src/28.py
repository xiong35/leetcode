# KMP
class Solution:
    _pattern = None
    _index = []

    def buildIndex(self):
        shadow = 0
        self._index[0][ord(self._pattern[0])] = 1
        for state in range(1, len(self._pattern)):
            for word in range(256):
                if word == ord(self._pattern[state]):
                    self._index[state][word] = state + 1
                else:
                    self._index[state][word] = self._index[shadow][word]
            shadow = self._index[shadow][ord(self._pattern[state])]

    def find(self, txt):
        cur_state = 0
        for i in range(len(txt)):
            cur_state = self._index[cur_state][ord(txt[i])]
            if cur_state == len(self._index):
                return i - cur_state + 1
        return -1

    def strStr(self, haystack: str, needle: str) -> int:
        if len(needle) == 0:
            return 0
        for i in range(len(needle)):
            self._index.append([])
            for _ in range(256):
                self._index[i].append(0)
        self._pattern = needle
        self.buildIndex()
        return self.find(haystack)


s = Solution()
print(s.strStr('cc', 'ccc'))

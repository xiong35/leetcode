class Solution:
    def groupAnagrams(self, strs):
        strHash = []
        for obj in strs:
            thisStrHash = 0
            for word in obj:
                thisStrHash += hash(word+'salt')
            strHash += [thisStrHash]
        hashSet = set(strHash)
        rtList = []
        for idHash in hashSet:
            thisList = []
            for hashVal in strHash:
                if hashVal == idHash:
                    index = strHash.index(hashVal)
                    thisList.append(strs[index])
                    strHash[index] += 0.5
            rtList.append(thisList)
        return rtList

s = Solution()
print(s.groupAnagrams(["", "1", " ", "123", "nat", "bat"]))
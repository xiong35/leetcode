package leetcode884

class Solution {
    fun uncommonFromSentences(A: String, B: String): Array<String> {
        var rtArray: Array<String> = arrayOf()
        var total = A.split(" ") + B.split(" ")
        total.toSet().forEach {
            if (total.count { it_ -> it_ == it } == 1) {
                rtArray += it
            }
        }
        return rtArray
    }
}
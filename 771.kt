class Solution {
    fun numJewelsInStones(J: String, S: String): Int {
        var count = 0
        S.forEach{
            if (it in J){
                count++
            }
        }
        return count
    }
}
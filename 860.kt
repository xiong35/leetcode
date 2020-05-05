class Solution {
    fun lemonadeChange(bills: IntArray): Boolean {
        var dollar5 = 0
        var dollar10 = 0
        bills.forEach {
            when (it) {
                5 -> dollar5++
                10 -> {
                    dollar10++
                    dollar5--
                }
                20 -> {
                    if (dollar10 > 0) {
                        dollar10--
                        dollar5--
                    } else {
                        dollar5 -= 3
                    }
                }
            }
            if (dollar5 < 0) return false
        }
        return true
    }
}


package leetcode20
class Solution {
    fun isValid(s: String): Boolean {
        val stack: MutableList<Char> = mutableListOf()
        s.forEach {
            if (it in "{[(") {
                stack.add(it)
            } else if (it in "]})") {
                when {
                    it == ')' && stack.lastOrNull() == '(' -> {
                        stack.removeAt(stack.size - 1)
                    }
                    it == ']' && stack.lastOrNull() == '[' -> {
                        stack.removeAt(stack.size - 1)
                    }
                    it == '}' && stack.lastOrNull() == '{' -> {
                        stack.removeAt(stack.size - 1)
                    }
                    else -> {
                        return false
                    }
                }
            }
        }
        return stack.isEmpty()
    }
}

fun main(args: Array<String>) {
    val s = Solution()
    println(s.isValid("{{{[[()]]}}}"))
}

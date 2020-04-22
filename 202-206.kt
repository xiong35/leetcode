import kotlin.math.sqrt

// general
class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

fun creatChain(): ListNode? {
    val nodeVals: List<Int> = listOf(1)
    val chain: ListNode? = ListNode(0)
    var curNode: ListNode? = chain
    nodeVals.forEach {
        curNode!!.next = ListNode(it)
        curNode = curNode?.next
    }
    return chain!!.next
}

fun printChain(chain: ListNode?) {
    println()
    var node = chain
    while (true) {
        print(node?.`val` ?: return)
        node = node.next
    }
}


// 202
class Solution202 {
    fun isHappy(n: Int): Boolean {
        var shownNums: MutableList<Int> = mutableListOf()
        var sum = n
        while (true) {
            sum = getSumOfNums(sum)
            if (sum == 1) {
                return true
            }
            if (sum in shownNums) {
                return false
            }
            shownNums.add(sum)
        }
    }

    fun getSumOfNums(input: Int): Int {
        var n = input
        var sum = 0
        while (n > 0) {
            var curNum = n % 10
            sum += curNum * curNum
            n /= 10
        }
        return sum
    }
}

// 203
class Solution203 {
    fun removeElements(head: ListNode?, `val`: Int): ListNode? {
        var localHead = head
        var node = head
        while (true) {
            when {
                node?.`val` == `val` -> {
                    localHead = localHead?.next
                    node = node.next
                }
                node?.next == null -> return localHead
                node.next!!.`val` == `val` -> remove(node)
                else -> node = node.next
            }
        }
    }

    fun remove(father: ListNode) {
        father.next = father.next?.next
    }
}

// 204
class Solution204 {
    fun countPrimes(n: Int): Int {
        if (n <= 2) return 0
        var curNum = 3
        var count = 1
        while (curNum < n) {
            if (isPrime(curNum)) count++
            curNum += 2
        }
        return count
    }

    private fun isPrime(input: Int): Boolean {
        if (input == 2) return true
        var div = 3
        var maxDiv = Math.sqrt(input.toDouble())
        while (div <= maxDiv) {
            if (input % div == 0) return false
            div += 2
        }
        return true
    }
}

// 205
class Solution205 {
    fun isIsomorphic(s: String, t: String): Boolean {
        val wordMap: MutableMap<Char, Char> = mutableMapOf()
        s.forEachIndexed { index, char ->
            if (char in wordMap.keys) {
                if (wordMap[char] != t[index]) return false
            } else {
                wordMap[char] = t[index]
            }
            if (wordMap.filterValues { it == t[index] }.count() >= 2) return false

        }
        return true
    }
}

// 206
class Solution206 {
    fun reverseList(head: ListNode?): ListNode? {
        // 如果只有一个节点, 直接返回
        var curNode: ListNode = head?.next ?: return head
        var foreNode: ListNode? = head
        var nextNode: ListNode? = curNode.next
        head.next = null
        while (true) {
            // 先调转节点
            curNode.next = foreNode
            // 前一个节点挪位
            foreNode = curNode
            // 如果下一个是空, 就返回当前节点, 否则当前节点挪位
            curNode = nextNode ?: return curNode
            // 下一个节点挪位
            nextNode = nextNode.next
        }
    }
}

fun main(args: Array<String>) {
/*    var s202 = Solution202()
   println(s202.isHappy(19)) */

/*     var chain = creatChain()
    printChain(chain)
    var s203 = Solution203()
    printChain(s203.removeElements(chain, 1)) */

/*    var s204 = Solution()
    println(s204.countPrimes(12222))*/

/*    var s205 = Solution205()
    println(s205.isIsomorphic("abbbe", "acccS"))*/

/*    var s206 = Solution206()
    var chain = creatChain()
    printChain(chain)
    printChain(s206.reverseList(chain))*/

}


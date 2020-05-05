package leetcode160

import kotlin.math.min

// general
class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

fun creatChain(nodeVals: List<Int>): ListNode? {
    val chain: ListNode? = ListNode(0)
    var curNode: ListNode? = chain
    nodeVals.forEach {
        curNode!!.next = ListNode(it)
        curNode = curNode?.next
    }
    return chain!!.next
}

class Solution {
    fun getIntersectionNode(headA: ListNode?, headB: ListNode?): ListNode? {
        val stack1 = genStack(headA)
        val stack2 = genStack(headB)
        var iterNum = min(stack1?.size ?: 0, stack2?.size ?: 0)
        var last = 1
        while (iterNum >= last) {
            if (stack1!![stack1!!.size - last] != stack2!![stack2!!.size - last]) {
                break
            }
            last++
        }
        var rtNode = headA
        for (i in 0..(stack1?.size ?: 0) - last) {
            rtNode = rtNode?.next
        }
        return rtNode
    }

    fun genStack(head: ListNode?): MutableList<ListNode>? {
        val stack = mutableListOf<ListNode>()
        var head_ = head
        while (head_ != null) {
            stack.add(head_)
            head_ = head_?.next
        }
        return stack
    }
}

fun main(args: Array<String>) {
    val LN1 = creatChain(listOf(897464, 3, 45))
    val LN2 = creatChain(listOf(9, 7, 0, 3, 45))
    val s = Solution()
    println(s.getIntersectionNode(LN1, LN2)?.`val`)
}

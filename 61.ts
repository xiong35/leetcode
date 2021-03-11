namespace T61 {
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  function rotateRight(
    head: ListNode | null,
    k: number
  ): ListNode | null {
    if (!head) return null;
    let len = 0;
    let pt = head,
      h = head;
    while (pt) {
      len++;
      pt = pt.next;
    }

    k = k % len;
    if (!k) return head;

    pt = head;

    while (k--) {
      pt = pt.next;
    }

    while (pt.next) {
      pt = pt.next;
      h = h.next;
    }

    let rt = h.next;

    pt.next = head;
    h.next = null;

    return rt;
  }
}

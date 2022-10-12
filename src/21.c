#include <stdio.h>

struct ListNode
{
    int val;
    struct ListNode *next;
};

struct ListNode *mergeTwoLists(struct ListNode *l1, struct ListNode *l2)
{
    if (l1 == NULL)
    {
        return l2;
    }
    if (l2 == NULL)
    {
        return l1;
    }
    struct ListNode head;
    head.next = NULL;
    struct ListNode *cur = &head;
    while (1)
    {
        if (l1 == NULL)
        {
            cur->next = l2;
            return head.next;
        }
        if (l2 == NULL)
        {
            cur->next = l1;
            return head.next;
        }

        if (l1->val > l2->val)
        {
            cur->next = l2;
            cur= cur->next;
            l2 = l2->next;
        }
        else
        {
            cur->next = l1;
            cur= cur->next;
            l1 = l1->next;
        }
    }
}

int main(void)
{
    struct ListNode List[6];
    List[0].val = 1;
    List[0].next = &List[1];
    List[1].val = 4;
    List[1].next = &List[2];
    List[2].next = NULL;
    List[2].val = 8;

    List[3].val = 1;
    List[3].next = &List[4];
    List[4].val = 6;
    List[4].next = &List[5];
    List[5].next = NULL;
    List[5].val = 7;
    mergeTwoLists(NULL, &List[3]);
}
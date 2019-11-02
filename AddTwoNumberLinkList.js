// https://leetcode.com/problems/add-two-numbers/solution/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    // carry = 0
    // if l1 finished before then add carry  plus l2
    // if l2 finishes before then add carry plus l1

    let dummyNode = new ListNode(0);
    let tail = dummyNode;
    let carry = 0;
    while (l1 != null || l2 !== null) {
        let sum = 0;
        if (l1 == null) {
            sum = l2.val + carry;
            l2 = l2.next;
        }
        else if (l2 == null) {
            sum = l1.val + carry;
            l1 = l1.next;
        }
        else {
            sum = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        }
        tail.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);

        tail = tail.next;
    }
    if (l1 == null && l2 == null) {
        if (carry > 0) {
            tail.next = new ListNode(carry);
            tail = tail.next;
        }
    }

    return dummyNode.next;

};


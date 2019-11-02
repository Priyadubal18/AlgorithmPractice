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

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function (l1, l2) {
    let dummyNode = new ListNode(0);
    let tail = dummyNode
    while (true) {
        // if either list runs out
        if (l1 == null) {
            tail.next = l2;
            break;
        }
        if (l2 == null) {
            tail.next = l1;
            break;
        }
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }

        tail = tail.next;
    }
    return dummyNode.next;
};


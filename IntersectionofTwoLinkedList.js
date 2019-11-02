/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


// Share
// Write a program to find the node at which the intersection of two singly linked lists begins.


var getIntersectionNode = function (headA, headB) {

    if (headA == null || headB == null) {
        return null;
    }
    let hAHeight = getheight(headA);
    let hBHeight = getheight(headB);

    if (hAHeight >= hBHeight) {
        let diffHeight = hAHeight - hBHeight;
        return checkintersection(headA, headB, diffHeight);
    } else {
        let diffHeight = hBHeight - hAHeight;
        return checkintersection(headB, headA, diffHeight);
    }

};

var checkintersection = function (node1, node2, difHeight) {

    while (difHeight > 0) {
        node1 = node1.next;
        difHeight--
    }

    while (node1 != null || node2 != null) {

        if (node1 == node2) {
            return node1;
        }
        node1 = node1.next;
        node2 = node2.next;
    }
    return null;

}

var getheight = function (nodep) {

    let count = 0;
    while (nodep != null) {
        count++;
        nodep = nodep.next;
    }
    return count;
}
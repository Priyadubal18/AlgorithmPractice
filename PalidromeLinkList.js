// https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var isPalindrome = function (head) {
    // Initiate the pointer
    let fast = head;
    let slow = head;
    let previouSlow = head;
    // In case of odd numbers
    let midNode = null;

    if (head != null && head.next != null) {
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            previousSlow = slow;
            slow = slow.next;
        }

        // Odd number in list then move slow one more location
        if (fast != null) {
            mid = slow;
            slow = slow.next;
        }


        //terminate the head
        previousSlow.next = null;

        //iniate the list
        let secondHalfList = slow;
        let prev = null;

        //reverse the list
        while (secondHalfList != null) {
            // next node val
            let temp = secondHalfList.next;
            secondHalfList.next = prev;
            prev = secondHalfList;
            secondHalfList = temp;
        }

        secondHalfList = prev;

        while (head != null && secondHalfList != null) {
            if (head.val == secondHalfList.val) {
                head = head.next;
                secondHalfList = secondHalfList.next
            } else {
                return false;
            }
        }

        if (head == null && secondHalfList == null) {
            return true
        }
        return false; // one is null other is not
    }
    return true;
};
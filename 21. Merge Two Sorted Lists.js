/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // Check if either of the lists is null
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    // Head of the new linked list - this is the head of the resultant list
    let head = null;
    // Reference of head which is null at this point
    let temp = head;
    // Choose head which is smaller of the two lists
    if (l1.val < l2.val) {
        temp = head = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        temp = head = new ListNode(l2.val);
        l2 = l2.next;
    }
    // Loop until any of the list becomes null
    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = new ListNode(l1.val);
            l1 = l1.next;
            temp = temp.next;
        } else {
            temp.next = new ListNode(l2.val);
            l2 = l2.next;
            temp = temp.next;
        }
    }
    // Add all the nodes in l1, if remaining
    while (l1) {
        temp.next = new ListNode(l1.val);
        l1 = l1.next;
        temp = temp.next;
    }
    // Add all the nodes in l2, if remaining
    while (l2) {
        temp.next = new ListNode(l2.val);
        l2 = l2.next;
        temp = temp.next;
    }
    return head;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const list1 = [1, 2, 4]
const list2 = [1, 3, 4]
console.log(mergeTwoLists(list1, list2))


//You are given the heads of two sorted linked lists list1 and list2.
//
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
//
// Return the head of the merged linked list.

//Dont't solved

//BEST
//var mergeTwoLists = function(list1, list2) {
//
//     if(list1 === null) return list2;
//     if(list2 === null) return list1;
//
//     if(list1.val < list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2;
//     }
//
// };
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let l3 = { ...l1 };
    let l4 = { ...l2 };
    let arr = [];
    if (l1 != null) {
        while (l3 != null) {
          arr.push(l3.val);
          l3 = l3.next;
        }    
    }
    if (l2 != null) {
        while (l4 != null) {
          arr.push(l4.val);
          l4 = l4.next;
        }
    }
    return arr.sort((a, b) => b - a).reduce((next, val) => new ListNode(val, next), null);
  };
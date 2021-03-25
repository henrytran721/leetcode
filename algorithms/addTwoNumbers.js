var addTwoNumbers = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let headPointer = new ListNode();
    let head = headPointer;
    let carry = 0;
    
    while(p1 !== null || p2 !== null) {
        let val1 = p1 !== null ? p1.val : null;
        // set to null if other list overflows length
        let val2 = p2 !== null ? p2.val : null;
        let sum = carry + val1 + val2;
        // console.log(val1, val2, sum);
        if(sum > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
        
        headPointer.next = new ListNode(sum % 10);
        headPointer = headPointer.next;
        p1 = p1 !== null ? p1.next : null;
        // set to null if other list overflows the length
        p2 = p2 !== null ? p2.next : null;
    }
    if(carry > 0) {
        headPointer.next = new ListNode(carry);
    }
    
    return head.next;
};


// create a new linked list
// have two pointers one pointed at each linked list 
// traverse the list while each list still contains values

/**
 *  have 2 pointers one pointed at each list
 *  traverse the list and grab the values of each node 
 *  set sum to be the sum of val1 + val2 + carry
 *   
 *  calculate carry:
 *  if sum is greater than 9 set carry to 1 to be used in next cycle
 *  else set carry to 0 (clean slate)
 * 
 * use headPointer to create new linkedlist to return 
 * construct new nodes with sum % 10
 *  
 * Time: O(max(n, m))
 * Space O(max(n, m))
 */


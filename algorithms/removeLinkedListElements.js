// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * set pointer, when we encounter head.next = val then set head.next to head.next.next
 * 
 * edge case: only one element in linked list, check if the element is equal to our val and set it to null
 */

var removeElements = function(head, val) {
    // remove first element if equal to head
    while(head && head.val === val) {
        head = head.next;
    }
    if(head === null) return head;
    
    var current = head;
    
    while(current !== null && current.next !== null) {
        if(current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    
    return head;
};
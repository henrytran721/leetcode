// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

var reverseList = function(head) {
    let next,
        prev = null,
        node = head;
    
    // 1 -> 2 -> 3 -> 4 -> 5 -> null
//                        prev   n
    // 5 -> 4 -> 3 -> 2 -> 1 -> null
    while(node !== null) { 
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
        
    }
    
    return prev;
};
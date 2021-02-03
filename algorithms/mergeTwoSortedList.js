// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

/*

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

*/ 

// Similar to merge function in merge sort, comparing values and setting .next to lower value

var mergeTwoLists = function(l1, l2) {
    var list = new ListNode();
    var head = list;
    
    while(l1 !== null && l2 !== null) {
        if(l1.val < l2.val) {
            list.next = l1;
            l1 = l1.next;
        } else {
            list.next = l2;
            l2 = l2.next;
        }
        
        list = list.next;
    }
    
    if(l1 !== null) list.next = l1;
    if(l2 !== null) list.next = l2;
    
    return head.next;
};
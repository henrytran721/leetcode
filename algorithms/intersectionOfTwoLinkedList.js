// Write a program to find the node at which the intersection of two singly linked lists begins.

var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    
    while(headA !== null) {
        set.add(headA);
        headA = headA.next;
    }
    
    while(headB !== null) {
        if(set.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    
    return null;
};
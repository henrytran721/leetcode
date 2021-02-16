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

// Time Complexity: O(n + m) we have to traverse both lists, storing the first list and searching in the set with the second list
// Space Complexity: O(n) because we use a set to store nodes 
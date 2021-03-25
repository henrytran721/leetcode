// Write a program to find the node at which the intersection of two singly linked lists begins.

var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    let aPointer = headA;
    let bPointer = headB;
    
    while(aPointer !== null) {
        set.add(aPointer);
        aPointer = aPointer.next;
    }
    
    while(bPointer !== null) {
        if(set.has(bPointer)) {
            return bPointer;
        }
        
        bPointer = bPointer.next;
    }
};

// loop through listA and add values to set 

// Time Complexity: O(n + m) we have to traverse both lists, storing the first list and searching in the set with the second list
// Space Complexity: O(n) because we use a set to store nodes 
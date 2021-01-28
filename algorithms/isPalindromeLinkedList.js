// Given a singly linked list, determine if it is a palindrome.

var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    
    // find middle element
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // reverse from middle to end 
    slow = reverse(slow);
    fast = head;
    
    // compare head to reversed head, return false if elements don't match
    while(slow !== null) {
        if(slow.val !== fast.val) {
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    
    return true;
};

function reverse(head) {
    let next,
        node = head,
        prev = null;
    
    while(node !== null) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    
    return prev;
}

/**
 * Time Complexity: O(n)
 */
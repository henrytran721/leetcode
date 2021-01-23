// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

/**
 * Example: [1,1,2,3,3]
 * returns [1,2,3]
 */

 var deleteDuplicates = function(head) {
     if(!head) return null;
     var current = head;
     
     while(current !== null && current.next !== null) {
         if(current.val === current.next.val) {
             // skip over the next value
             current.next = current.next.next;
         } else {
             current = current.next;
         }
     }

     return head;
 }
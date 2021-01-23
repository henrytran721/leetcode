/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

    Example: [3,2,0,-4] pos = 1;
    3 -> 2 -> 0 -> -4 ---> 2 (cycles back to node.val = 2)
 */

 var hasCycle = function(head) {
     // check base case to detect if our head doesnt exist
     if(head == null) {
         return false;
     }

     // set up our two pointers
     var slow = head;
     var fast = head.next;

     // condition to break out of loop + return true
     // if slow is ever equal to fast, we have detected a cycle because fast had to loop back
     while(slow !== fast) {
        if(fast == null || fast.next == null) return false;
        slow = slow.next;
        fast = fast.next.next;
     }

     return true;
 }
 
 
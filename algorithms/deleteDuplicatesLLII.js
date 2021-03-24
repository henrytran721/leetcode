var deleteDuplicates = function(head) {
    let sentinel = new ListNode(0, head);
    let prev = sentinel;
    
    while(head !== null) {
        if(head.next !== null && head.val === head.next.val) {
            while(head.next !== null && head.val === head.next.val) {
                head = head.next;
            }
            prev.next = head.next;
        } else {
            prev = prev.next;
        }
        head = head.next;
    }
    return sentinel.next;
};

// 2 --> 3 --> 3 --> 4
// with sentinel
// s/p
// 0 --> 2 --> 3 --> 3 --> 4
//       h

// head.val !== head.next.val move prev = prev.next & head = head.next
// s/    p
// 0 --> 2 --> 3 --> 3 --> 4
//             h

// find duplicate, move h until no more duplicates
// s/    p
// 0 --> 2 --> 3 --> 3 --> 4
//                   h

// reassign prev.next to be node after duplicates

// s/    p
// 0 --> 2 --> 4
//   

// Time O(n)
// Space O(1)
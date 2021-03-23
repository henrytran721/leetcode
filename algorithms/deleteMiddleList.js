// Delete the middle node (without given access to the head or tail) from the singly linked list
// a -> b -> c -> d -> e -> f
// a -> b -> d -> e -> f


class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    print() {
      let result = [];
      let current = this.head;
  
      while(current !== null) {
        result.push(current.val);
        current = current.next;
      }
  
      return result;
    }
  
    push(val) {
      var newNode = new Node(val);
      if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.length++;
      return this;
    }
  
    deleteMiddle(node) {
      if(node == null || node.next == null) return false;
      node.val = node.next.val;
      node.next = node.next.next;
      return true;
    }
  
  }
  
  let sll = new SinglyLinkedList();
  sll.push('a');
  sll.push('b');
  sll.push('c');
  sll.push('d');
  sll.push('e');
  sll.push('f');
  console.log(sll.print());
  console.log(sll.deleteMiddle(sll.head.next));
  console.log(sll.print());
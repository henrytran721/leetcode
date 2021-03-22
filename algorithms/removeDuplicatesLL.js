// write code to remove duplicates from an unsorted linked list


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
  
      removeDuplicates() {
      let set = new Set();
      let prev = new Node(null);
  
      let current = this.head;
      while(current !== null) {
        console.log(prev);
        if(set.has(current.val)) {
           prev.next = current.next;
        } else {
          set.add(current.val);
          prev = current;
        }
        current = current.next;
      }
    }
  
  }
  
  let sll = new SinglyLinkedList();
  sll.push(3);
  sll.push(3);
  sll.push(2);
  sll.push(2);
  sll.push(6);
  console.log(sll.print());
  console.log(sll.removeDuplicates());
  console.log(sll.print());
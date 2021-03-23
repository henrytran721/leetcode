// Implement an algorithm to find the kth to last element of a singly linked list


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
  
    findElem(i) {
      if(i >= this.length || i < 0) return null;
      let len = this.length;
      let counter = 0;
      let current = this.head;
  
      // find element from the end based on i
      // if i == 0 return last element
      if(i === 0) {
        return this.tail;
      } else {
        let lenFromEnd = len - i - 1;
        while(lenFromEnd !== counter) {
          counter++;
          current = current.next;
        }
  
        return current;
      }
    }
  
  }
  
  let sll = new SinglyLinkedList();
  sll.push(0);
  sll.push(1);
  sll.push(2);
  sll.push(3);
  sll.push(4);
  sll.push(5);
  console.log(sll.print());
  console.log(sll.findElem(0));
// Let's build a linked list (or another data structure you are more comfortable with)
// 
// The focus for this session should be on...
//     * Completeness
//     * Communication & Openness
//     * Engagement
// 
// Please dont shy away from questions or comments. This is collaborative. 

// 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> null

// push, pop, shift, unshift, get, set, insert, remove

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
      let newNode = new Node(val);
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
    
    pop() {
      let newTail = this.head;
      let current = this.head;
      
      if(!this.head) return undefined;
      
      if(this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        while(current.next !== null) {
          newTail = current;
          current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        }
        this.length--;
        return current;
    }
    
    // removing from the head
    shift() {
      let oldHead = this.head;
      
      if(this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = oldHead.next;
        oldHead.next = null;
      }
      
      this.length--;
      return oldHead;
    }
    
    reverse() {
      let next,
          prev = null,
          node = this.head;
          this.head = this.tail;
          this.tail = node;
      
      for(let i = 0; i < this.length; i++) {
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
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
  sll.push(6);
  sll.push(7);
  sll.push(8);
  sll.push(9);
  console.log(sll.print());
  sll.reverse();
  console.log(sll.print());
  
     
  // 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> null
  //     
  // prev  n  next
  
  // 1 -> 0 -> null

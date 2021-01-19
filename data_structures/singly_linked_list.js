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

    // remove from end of linked list
    pop() {
        if(!this.length) return undefined;
        var current = this.head;
        var newTail = current;
        // traverse to the tail
        // break out of loop when current is element before null
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        // set up pointers for new tail
        this.tail = newTail;
        this.tail.next = null;
        // decrement length
        this.length--;
        // if last node in linkedlist, set both head and tail to null
        if(!this.length) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // remove from beginning of linked list
    shift() {
        if(!this.length) return undefined;
        var oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        oldHead.next = null;
        if(!this.length) {
            this.head = null;
            this.tail = null;
        }
        return oldHead;
    }

    // insert at the beginning
    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(i) {
        var counter = 0;
        if(i < 0 || i > this.length) return null;
        var current = this.head;
        while(counter !== i) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(i, val) {
        var foundNode = this.get(i);
        if(foundNode) {
            foundNode.val = val;
            return true;
        } else {
            return false;
        }
    }

    insert(i, val) {
        var newNode = new Node(val);
        if(i < 0 || i > this.length) return false;
        if(i === 0) {
            return this.unshift(val);
        } else if(i === this.length) {
            return this.push(val);
        } else {
            var prevNode = this.get(i - 1);
            var nextNode = prevNode.next;
            prevNode.next = newNode;
            newNode.next = nextNode;
            this.length++;
            return this;
        }
    }

    remove(i) {
        if(i < 0 || i > this.length - 1) return false;
        if(i === 0) {
            return this.shift();
        } else if(i === this.length - 1) {
            return this.pop();
        } else {
            var prevNode = this.get(i - 1);
            var deletedNode = prevNode.next;
            var nextNode = deletedNode.next;
            prevNode.next = nextNode;
            deletedNode.next = null;
            this.length--;
            return deletedNode;
        }
    }

    // print all nodes by inserting into array
    print() {
        var res = [];
        var current = this.head;
        while(current) {
            res.push(current.val);
            current = current.next;
        }
        return res;
    }

    reverse() {
        var prev = null;
        var next = null;
        var node = this.head;
        
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


var sll = new SinglyLinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.unshift(0);
sll.reverse();
console.log(sll.print());

/**
 * Big O of Singly Linked List
 * 
 * Insertion: O(1), we can insert anywhere without reindexing 
 * Deletion: Best Case O(1), Worst Case O(n) because we have to remove from the end
 * Search: O(n), we have to traverse through the list
 * Access: O(n), we have to travese through the list
 */
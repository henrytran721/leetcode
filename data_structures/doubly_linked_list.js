class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // add to the end
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // add to the beginning 
    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // remove from the end
    pop() {
        if(!this.head) return undefined;
        var oldTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }

    // remove from beginning 
    shift() {
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    // get at index with binary search
    get(i) {
        var mid = Math.floor(this.length / 2);
        if(i < 0 || i > this.length) return null;
        if(i <= mid) {
            console.log('start');
            let current = this.head;
            let counter = 0;
            while(counter !== i) {
                counter++;
                current = current.next;
            }
            return current;
        } else {
            console.log('end');
            let current = this.tail;
            let counter = this.length;
            while(i !== counter) {
                counter--;
                current = current.prev;
            }
            return current;
        }
    }

    // set 
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
        if(i < 0 || i > this.length) return undefined;
        if(i === 0) {
            return this.unshift(val);
        } else if(i === this.length) {
            return this.push(val);
        } else {
            let newNode = new Node(val);
            let prevNode = this.get(i - 1);
            let nextNode = prevNode.next;
            prevNode.next = newNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            newNode.prev = prevNode;
        }
        this.length++;
        return this;
    }

    remove(i) {
        if(i < 0 || i > this.length - 1) return undefined;
        if(i === 0) {
            return this.shift();
        } else if(i === this.length - 1) {
            return this.pop();
        } else {
            var deletedNode = this.get(i);
            var prevNode = deletedNode.prev;
            var nextNode = deletedNode.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            deletedNode.next = null;
            deletedNode.prev = null;
        }
        this.length--;
        return deletedNode;
    }
}

var dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);

/***
 * Doubly Linked List Big O
 * Insertion: O(1), insert at any position of the linkedlist without reindexing
 * Deletion: O(1), remove at any position without reindexing
 * Access: O(n), we have to traverse through the list
 * Search: O(n), we have to travese through the list
 */
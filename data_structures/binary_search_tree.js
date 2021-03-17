/**
 * Binary Search Tree: A tree data structure where each node can have at most 2 descendant nodes
 * - nodes on the left will be less than the parent node
 * - nodes on the right will be greater than the parent nodes
 * - nodes that don't have left or right children are called leaves
 */


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert into BST
    insert(val) {
        var newNode = new Node(val);
        // if root doesnt exist, newNode becomes the new root
        if(!this.root) {
            this.root = newNode;
        } else {
            // use a variable to keep track of our root
            var current = this.root;
            while(true) {
                // if our val is less than our current val go left
                if(val < current.val) {
                    // if left is empty, insert node here
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                        // move down the BST if space is occupied
                    } else {
                        current = current.left;
                    }
                } else {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current  = current.right;
                    }
                }
            }
        }
    }

    find(val) {
        if(!this.root) return false;
        // set variable for our root
        var current = this.root;
        // loop through tree
        while(current) {
            // if value is found return true
            if(current.val === val) {
                return true;
            // if value isnt found yet and is less than our current value move left
            } else if(val < current.val) {
                current = current.left;
            // otherwise move right
            } else {
                current = current.right;
            }
        }

        return false;
    }
    
    bfs() {
        let data = [],
        queue = [],
        node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        return data;
    }

    dfsPreOrder() {
        var res = [];
        
        function traverse(node) {
            res.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return res;
    }

    dfsInOrder() {
        var res = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            res.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return res;
    }

    dfsPostOrder() {
        var res = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            res.push(node.val);
        }
        traverse(this.root);
        return res;
    }
}

var bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(2);
bst.insert(4);
bst.insert(10);
bst.insert(6);
bst.insert(14);
console.log(bst.dfsPostOrder());

/**
 *      5
 *    3   10
 *  2  4 6  14
 * 
 * bfs: traverses the bst horizontally, visiting parents before children
 * [5, 3, 10, 2, 4, 6, 14]
 * 
 * dfsPreOrder: traverses the bst vertically, visiting parent node, left node, then right node
 * [5, 3, 2, 4, 10, 6, 14]
 * 
 * dfsPostOrder: traverses the bst vertically, visiting leaves, children, and then parent nodes
 * [2, 4, 3, 6, 14, 10, 5]
 */


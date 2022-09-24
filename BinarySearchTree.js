class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (current.value === val)
                return undefined
            if (val < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right
            }
        }
    }
    find(val) {
        if (this.root === null)
            return false;
        let current = this.root;
        let found = false
        while (!found && current) {
            if (current.value < val) {
                current = current.right
            } else if (curren.value > val) {
                current = current.left
            } else {
                return true
            }

        }
        return found
    }
    BFS() {
        let node = this.root
        let queue = []
        let data = []
        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            data.push(node.value)
            if (node.left)
                queue.push(node.left)
            if (node.right)
                queue.push(node.right)

        }
        return data
    }
    DFSPreOrder() {
        let data = []
        let current = this.root;
        function traverse(node) {
            data.push(node.value)
            if (node.left)
                traverse(node.left)
            if (node.right)
                traverse(node.right)
        }
        traverse(current)
        return data
    }
    DFSPostOrder() {
        let data = []
        let current = this.root;
        function traverse(node) {

            if (node.left)
                traverse(node.left)
            if (node.right)
                traverse(node.right)
            data.push(node.value)
        }
        traverse(current)
        return data
    }
    DFSInOrder() {
        let data = []
        let current = this.root;
        function traverse(node) {

            if (node.left)
                traverse(node.left)
              data.push(node.value)
            if (node.right)
                traverse(node.right)
          
        }
        traverse(current)
        return data
    }

}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
bst.DFSInOrder()
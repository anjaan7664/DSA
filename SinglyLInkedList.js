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
    push(value) {
        let node = new Node(value);
        if (!this.head) {
            this.tail = node;
            this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head)
            return undefined;
        var current = this.head;
        let secondLast = current;
        while (current.next) {
            secondLast = current;
            current = current.next

        }
        this.tail = secondLast;
        secondLast.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current;
    }
    shift() {
        if (!this.head)
            return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
        return current
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }
    get(val) {
        if (val < 0 || val >= this.length)
            return null;
        let current = this.head;
        for (let i = 0; i < val; i++) {
            current = current.next
        }
        return current;
    }
    set(index, val) {
        let indexAt = this.get(index);
        if (indexAt === null)
            return false;
        indexAt.val = val;
        return true;

    }
    insert(index, val) {

        let newNode = new Node(val)
        let prev = this.get(index - 1);
        if (prev === null)
            return false;
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index) {
        let prev = this.get(index - 1);
        let toRemove = prev.next;
        prev.next = toRemove.next;
        this.length--;
        return this;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next
        }
        return this;
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);

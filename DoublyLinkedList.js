class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
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
            node.prev = this.tail;
            this.tail = node;

        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head)
            return undefined;
        let poppedNode = this.tail;
        let prev = poppedNode.prev;
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            prev.next = null;
            this.tail = prev
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode
    }
    shift() {
        if (this.length === 0)
            return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        let next = oldHead.next
        this.head = next;
        next.prev = null
        oldHead.next = null;
        this.length--;
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {

            let currenHead = this.head;
            newNode.next = currenHead;
            currenHead.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }
    get(index) {
        let current;
        let temp = Math.floor(this.length / 2);
        if (index < temp) {
            current = this.head
            for (let i = 0; i < index; i++) {
                current = current.next
            }
        } else {
            current = this.tail
            for(let i = this.length; i > index + 1; i-- ){
                current = current.prev;
            }
        }
        return current;
    }
    insert(index, val){
        let newNode = new Node(val);
        let prevNode = this.get(index-1);
        let tempNext = prevNode.next;
        newNode.next = tempNext;
        newNode.prev = prevNode;
        prevNode.next = newNode;
        tempNext.prev = newNode;
        this.length++;
        return newNode;
    }
    set(index,val){
        let node = this.get(index)
        node.val = val 
        return this;
    }
    remove(index){
    let currentNode = this.get(index);
        let prevNode = currentNode.prev;
        let nextNode = currentNode.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        currentNode.next = null;
        currentNode.prev = null;
        this.length--;
        return currentNode;
    }
}

let list = new SinglyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
list.push(11);

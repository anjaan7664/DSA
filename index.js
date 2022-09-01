class Node {
  constructor(val) {
    this.val = val;
    this.node = null;
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
    if (this.length === 0) {
      this.tail = node;
      this.head = node;
    }
    else{
      this.head = node;
    }
    this.length++;
  }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");

console.log(list);

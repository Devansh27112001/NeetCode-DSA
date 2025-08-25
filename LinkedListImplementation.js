// Linked-list is a chain of objects called Nodes.
// Each Node has: 1) The data: value we want to store at the node. 2) A pointer (a reference) to the next node.

// First, we need to create a class or constructor for our individual nodes. It's a simple container for our data and the next pointer.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// let's create the LinkedList class itself. This class will manage the entire chain of nodes. It will have a head property to mark the beginning of the list and methods to add, remove, and find nodes.

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
}

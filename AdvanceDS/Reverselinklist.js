// Define a node in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Define the linked list class
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a new node at the end of the list
    add(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    // Reverse the linked list (iterative approach)
    reverse() {
      let prev = null; // Previous node starts as null
      let current = this.head; // Start with the head node
      while (current !== null) {
        const nextNode = current.next; // Store the next node
        current.next = prev; // Reverse the pointer
        prev = current; // Move 'prev' to the current node
        current = nextNode; // Move 'current' to the next node
      }
      this.head = prev; // Update the head to the new first node
    }
  
    // Print all nodes in the list
    printlist() {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  
  const list = new LinkedList();
  
  // Adding nodes
  list.add(10);
  list.add(20);
  list.add(30);
  list.add(40);
  
  console.log("Original List:");
  list.printlist(); // Output: 10, 20, 30, 40
  
  // Reverse the list
  list.reverse();
  
  console.log("Reversed List:");
  list.printlist(); // Output: 40, 30, 20, 10
  
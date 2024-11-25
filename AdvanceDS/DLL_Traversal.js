// Node structure for a doubly linked list
class Node {
    constructor(data) {
      this.data = data;  // Value of the node
      this.prev = null;  // Pointer to the previous node
      this.next = null;  // Pointer to the next node
    }
  }
  
  // Doubly linked list class
  class DoublyLinkedList {
    constructor() {
      this.head = null;  // First node in the list
      this.tail = null;  // Last node in the list
    }
  
    // Method to add a node at the end
    add(data) {
      const newNode = new Node(data);
  
      if (this.head === null) {
        // If the list is empty, set head and tail to the new node
        this.head = newNode;
        this.tail = newNode;
      } else {
        // Otherwise, update the current tail to point to the new node
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode; // Update the tail to the new node
      }
    }
  
    // Traversal forward (from head to tail)
    traverseForward() {
      console.log("Traversal in Forward Direction:");
      let current = this.head; // Start from the head
      while (current !== null) {
        console.log(current.data); // Print current node's data
        current = current.next;   // Move to the next node
      }
    }
  
    // Traversal backward (from tail to head)
    traverseBackward() {
      console.log("Traversal in Backward Direction:");
      let current = this.tail; // Start from the tail
      while (current !== null) {
        console.log(current.data); // Print current node's data
        current = current.prev;   // Move to the previous node
      }
    }
  }
  
  // Example usage:
  const dll = new DoublyLinkedList();
  
  // Adding nodes as per your diagram: 3, 5, 8
  dll.add(3);
  dll.add(5);
  dll.add(8);
  
  // Forward traversal
  dll.traverseForward();  // Output: 3, 5, 8
  
  // Backward traversal
  dll.traverseBackward(); // Output: 8, 5, 3
  
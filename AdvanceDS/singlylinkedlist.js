// Define a node in the linked list
class Node {
    constructor(data) {
      this.data = data; // Data of the node
      this.next = null; // Pointer to the next node
    }
  }
  
  // Define the linked list class
  class LinkedList {
    constructor() {
      this.head = null; // Initially, the list is empty
    }
  
    // Add a new node at the end of the list
    add(data) {
      const newNode = new Node(data); // Create a new node
      if (this.head === null) {
        // If the list is empty, set the new node as the head
        this.head = newNode;
        return;
      }
  
      // Traverse to the last node
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode; // Link the last node to the new node
    }
  
    // Print all nodes in the list
    printlist() {
      let current = this.head; // Start from the head
      while (current !== null) {
        console.log(current.data); // Print the current node's data
        current = current.next; // Move to the next node
      }
    }
  
    // Delete a node by value
    delete(data) {
      if (this.head === null) {
        // If the list is empty, do nothing
        return;
      }
  
      // If the node to delete is at the head
      if (this.head.data === data) {
        this.head = this.head.next; // Move the head to the next node
        return;
      }
  
      // Traverse the list to find the node before the one to delete
      let current = this.head;
      while (current.next !== null && current.next.data !== data) {
        current = current.next;
      }
  
      // If the node to delete is found, update the links
      if (current.next !== null) {
        current.next = current.next.next;
      }
    }
  }
  
  // Example usage:
  
  const list = new LinkedList();
  
  // Adding nodes
  list.add(15);
  list.add(30);
  list.add(50);
  list.add(74);
  
  // Printing the list
  console.log("List after adding nodes:");
  list.printlist(); // Output: 15, 30, 50, 74
  
  // Deleting a node
  list.delete(30);
  
  // Printing the list again
  console.log("List after deleting a node with value 30:");
  list.printlist(); 
  
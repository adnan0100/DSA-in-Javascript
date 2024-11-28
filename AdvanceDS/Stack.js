class Stack {
    constructor() {
        this.items = []; // Array to store stack elements
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }

    // Print all elements of the stack
    print() {
        console.log(this.items.join(", "));
    }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack after pushing:", stack.items); // Output: [10, 20, 30]

console.log("Peek top element:", stack.peek()); // Output: 30

stack.pop();
console.log("Stack after popping:", stack.items); // Output: [10, 20]

console.log("Is stack empty?", stack.isEmpty()); // Output: false

console.log("Stack size:", stack.size()); // Output: 2

stack.clear();
console.log("Stack after clearing:", stack.items); // Output: []

class Queue {
    constructor() {
      this.items = []; // Array to store queue elements
    }
  
    // Add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // Get the element at the front without removing it
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  }

  const q = new Queue();
  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);
  console.log(q.front());
  console.log(q.dequeue()); 
  console.log(q.isEmpty());
  
  /*
  Explanation of `instanceof` Operator:
  `instanceof` is used to check whether an object is an instance of a specific class or constructor function.
  It verifies if the prototype of the given class appears in the object's prototype chain.
  */
  
  console.log(q instanceof Queue); 
  console.log(q instanceof Object);
  

  function processQueue(queueInstance) {
    if (queueInstance instanceof Queue) {
      console.log("Processing queue with size:", queueInstance.items.length);
    } else {
      console.log("Invalid input, not a Queue instance");
    }
  }
  
  processQueue(q);
  processQueue({});
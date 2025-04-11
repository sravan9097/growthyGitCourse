
/*
A Promise in JavaScript has 3 states:

1. Pending: The initial state. The operation is still ongoing and the result is not yet available.
2. Fulfilled (Resolved):The operation completed successfully, and the promise has a resulting value.
3. Rejected: The operation failed, and the promise has a reason for the failure (usually an error).
*/


function delayedLowerCase(str) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(str.toLowerCase());
      }, 5000); // Delay of 5 seconds
    });
  }
  
  /*
  Promise chaining is a technique where multiple `.then()` methods are used
  one after another. Each `.then()` waits for the previous promise to be resolved
  and can pass its result to the next `.then()` in the chain.
  
  This helps us perform a sequence of asynchronous tasks in a readable way.
  */
  
  
  delayedLowerCase("Beautiful Code")
    .then((lowerStr) => {
      const message = `${lowerStr} - ${lowerStr.length}`;
      console.log(message); // Output: "beautiful code - 14"
      return message;
    })
    .catch((error) => {
      console.error("Something went wrong:", error);
    });
  
  
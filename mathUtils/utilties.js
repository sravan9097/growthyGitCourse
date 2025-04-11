
//  adds two numbers
export function add(a, b) {
    return a + b;
  }
  
  // subtracts second number from the first
  export function subtract(a, b) {
    return a - b;
  }
  
  // Default export: an object that includes all utility functions
  const mathUtils = {
    add,
    subtract,
  };
  
  export default mathUtils;
  
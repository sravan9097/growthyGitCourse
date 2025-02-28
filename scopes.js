// Global Scope
let globalVar = "Global Var";

function testFunctionScope() {
    // Function Scope
    var functionVar = "Function-Scoped Var";
    console.log(globalVar); // Accessible inside function
    console.log(functionVar); // Accessible inside function
}

testFunctionScope();

console.log(functionVar);

if (true) {
    // Block Scope
    let blockVar = "I'm a block-scoped variable";
    const blockConst = "I'm also block-scoped";
    console.log(blockVar); // Accessible inside block
    console.log(blockConst); // Accessible inside block
}

console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined

function outerFunction() {
    let outerVar = "Outer Function";
    
    function innerFunction() {
        let innerVar = "Inner Function";
        console.log(globalVar); // Accessible due to scope chain
        console.log(outerVar); 
        console.log(innerVar); // Accessible inside this function
    }
    
    innerFunction();
    console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined
}

outerFunction();
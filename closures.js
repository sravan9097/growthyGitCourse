function createCounter (){
    var count = 0;
    return {
        increment: function() {
            count ++;
            return count;
        },
        decrement: function(){
            count--;
            return count;
        }
    };
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());


// The count variable is private and cannot be accessed directly from outside createCounter().
// Increment Method: Increases count by 1 and returns the updated value.
// Decrement Method: Decreases count by 1 and returns the updated value.
// Object with Methods: The returned object allows interaction with count while keeping it hidden from external access.
// This approach ensures data integrity and proper encapsulation using closures
//Map Function 
const numArray = [1,2,3,4,5,6];

function doubleNumbers(array){
    return array.map(number => { return number*number});
}

console.log(doubleNumbers(numArray));

//Filter Function 

function filterEvenNumbers(array){
    return array.filter(number => { 
        return number % 2 === 0;
    });
}

console.log(filterEvenNumbers(numArray));

//Reduce Function 
function sumNumbers(array){
    return array.reduce((sum,number)=>{
        return sum += number;
    });
}

console.log(sumNumbers(numArray));


// Function to create a custom iterator
function customSequenceGenerator(startNum,endNum,increment){
    return {
        current: startNum, last:endNum, step:increment, next(){
            if(this.current <= this.last) { 
                    let value = this.current;
                    this.current +=this.step;
                    return { value, done:false};
            } else {
                return {done:true};
            }
        }
};
}
// Testing the iterator
const sequence = customSequenceGenerator(1, 100, 5);
let result = sequence.next();
while (!result.done) {
    console.log(result.value);
    result = sequence.next();
}
// Example 1: Using arguments in a Traditional Function
// The arguments object is an array-like object that holds all passed arguments.
function sum() {
let total = 0;
for (let i = 0; i < arguments.length; i++) {
total += arguments[i];
}
return total;
}

console.log(sum(5, 12, 15)); // 32
console.log(sum(1, 2, 3, 4, 5, 6, 7)); // 28

//+++++++++++++++++++++++++++++ Example - 2 +++++++++++++++++++++++++++++++++++++++++++++++++++


// Example 2: Using Rest Parameters (...args)
// The modern approach is to use rest parameters, which collect all extra arguments into an array.


function multiply(...nums) {
return nums.reduce((product, num) => product * num, 1);
}

console.log(multiply(2, 3, 4, 5)); // 120
console.log(multiply(1, 5, 10, 2)); // 100


/*Key Takeaways:
 The arguments object is array-like but not a real array.
 The ...rest parameter is an actual array and can be used with array methods.
 Arrow functions do not have arguments, but they support ...rest.
*/
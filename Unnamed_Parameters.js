function sum() {
    let total = 0;
   for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
    }
    return total;
    }
    
    console.log(sum(1, 2, 3, 4, 5, 6)); // 21




    // Using Rest Parameters (...args)
function multiply(...nums) {
return nums.reduce((product, num) => product * num, 1);
}

console.log(multiply(2, 3, 4, 10)); // 240
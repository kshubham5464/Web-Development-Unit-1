// A function can have default values for parameters, making it more flexible.
// Example: Function that Greets Users
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // &quot;Hello, Guest!&quot;
greet("Shubham"); 

// The function can be called with or without arguments, and it will still work correctly.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 


function calculatePrice(price, taxRate = 0.1) {
return price + price * taxRate;
}
console.log(calculatePrice(100)); // 110 (Default tax 10%)
console.log(calculatePrice(100, 0.2)); // 120 (Custom tax 20%)


 // #Key Takeaways :-- 
//  If a value is not passed to the function, the default value is used.
//  Default values make functions more resilient to missing parameters.
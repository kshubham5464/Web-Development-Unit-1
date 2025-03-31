// �� Use Case: Useful for simple functions.
// �� Example: `fn greet(name: &str) -> &str { format!("Hello, {}", name) }`
// If the function body has only one expression, you can omit {} and return.


const square = (x) => x * x;
console.log(square(15)); // 225
// �� Use Case: A more concise way to write functions.
// �� Example: `fn greet(name: &str) -> &str { name }
// ��          fn greet(name: &str) -> &str { name }`

const greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet("Shubham")); // "Hello, Kaushlendra!"


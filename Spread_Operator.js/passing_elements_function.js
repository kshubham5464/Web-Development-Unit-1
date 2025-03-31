// �� Use Case: Spread values into a function call.
// �� Example: `fn(x, y, z) => x + y + z ` becomes `fn(x, y, z) => x + y + z`.
// �� Note: This is a simple example and does not cover all possible use cases.

function add(a, b, c) {
  return a + b + c;
}
const values = [25, 10, 15];
console.log(add(...values)); // 50

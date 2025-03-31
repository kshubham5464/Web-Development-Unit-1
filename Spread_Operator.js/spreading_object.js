// �� Use Case: Helps in cloning and merging objects.
// �� Example: `clone(obj)` returns a new object with the same properties as `obj
// �� Use Case: Helps in cloning and merging objects.

const person = { name: "Alice", age: 30 };
const updatedPerson = { ...person, city: "New York" };
console.log(JSON.stringify(updatedPerson, null, 2));
/*{
    "name": "Alice",
    "age": 30,
    "city": "New York"
  }
*/

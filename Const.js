// Const Declaration (Immutable Reference, but Mutable Object Properties) 
//  const makes the variable binding immutable, not the object itself.
//  You can modify properties of an object declared with const, but you cannot reassign the object to a new value.


const person = { 
  name: "Alice", 
  age: 30, 
  // Add a comment to explain the purpose of the object
  // This object represents a person with a name and age
};

// Allowed: Modifying properties of an object
person.age = 35;
console.log(person.age); // 35

// Not Allowed: Reassigning the object
// person = { name: &quot;Bob&quot;, age: 40 }; // ❌ TypeError: Assignment to constant variable
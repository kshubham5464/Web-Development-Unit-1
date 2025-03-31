function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
    return `Hello, ${name}!`;
}

const greeting1 = greet();
console.log(greeting1); // "Hello, Guest!"

const greeting2 = greet("Shubham");
console.log(greeting2); // "Hello, Shubham!"
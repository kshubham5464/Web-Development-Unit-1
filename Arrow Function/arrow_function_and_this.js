// �� Key Point: this inside an arrow function refers to the outer function&#39;s this.
// Arrow functions do not have their own this, instead, they inherit this from the surrounding scope.
// �� Key Point: this inside an arrow function refers to the outer function&#39;s this.


const person = {
name: "Shubham",
greet: function() {
setTimeout(() => {
console.log(`Hello, ${this.name}!`);
}, 1000);
}
};
person.greet(); // Hello, Shubham! after 1 second 
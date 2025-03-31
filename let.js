//**Key Takeaways:**
// let is block scoped , so it's not accessible outside the block where it's defined.
// let is also immutable, so you can't reassign a value to a variable declared with let
// let is block scoped, so it's not accessible outside the block where it's defined.



function testLet() {
  let x = 10;
  if (true) {
    let innerX = 20; // This is a new variable, different from the outer `x`
    console.log("Inside block:", innerX); // 20
  }
  console.log("Outside block:", x); // 10
}
  testLet();

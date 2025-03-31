function applyDiscount(price, discount = price * 0.1) {
  return price - discount;
}

console.log(applyDiscount(400)); // 180 (10% discount applied)
console.log(applyDiscount(200, 30)); // 170 (Custom discount of 30)


// #Key Takeaways :-- 
//  You can use another parameter as the default value, making the function more flexible.
//  The function will use the default value if no argument is provided for that parameter.
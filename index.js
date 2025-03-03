function add (

) {
    
}
function subtract () {
    
}
function multiply () {

}
function divide () {

}
function add (a ,b) {
    return (a + b)
    console.log(add(4+5));

}
function subtract (a, b) {
    return (a - b)
    console.log(subtract(10-4));

}
function multiply (a, b) {
    return (a * b)
    console.log(multiply(4*3));
}
function divide (a, b) {
    return (a/b)

    console.log(divide(20/4));
}
function increment (n) {
    return n + 1;
    console.log(increment(288));
}
function decrement (n) {
    return n - 1
    console.log(decrement(289));
}

function makeInt(n) {
    return parseInt(n, 10);
  }
  
  // Example usage:
  console.log(makeInt("42"));       // Output: 42
  console.log(makeInt("3.14"));     // Output: 3 (parseInt ignores decimals)
  console.log(makeInt("100px"));    // Output: 100 (parses until non-numeric characters)
  console.log(makeInt("abc"));      // Output: NaN (Not a Number)

  function preserveDecimal(n) {
    return parseFloat(n);
  }
  
  // Example usage:
  console.log(preserveDecimal("4.56"));  // Output: 4.56
  console.log(preserveDecimal("10.99")); // Output: 10.99
  console.log(preserveDecimal("100"));   // Output: 100 (still works for integers)
  console.log(preserveDecimal("3.14abc")); // Output: 3.14 (parses until non-numeric characters)
  console.log(preserveDecimal("abc"));   // Output: NaN (Not a Number)

  
  
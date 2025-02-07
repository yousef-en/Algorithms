
//Factorial can be written in several ways.


//one
function fact(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  }
  
  // Example usage:
  console.log(fact(5)); // Output: 120



//tow
function factorial(number) {
    let result = 1
    for (let i = 0; i < number; i++) {
        result = result * (number - i)
    }
    return result
}
console.log(factorial(4))//4*3*2*1=   24


//three
//closures
function factorial(number) {
    return number === 0 ? 1 : number * factorial(number - 1)
}
console.log(factorial(4)) //24
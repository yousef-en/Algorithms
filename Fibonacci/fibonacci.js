
// one 
//Recursive

function Fibonacci(n){
    if(n <= 1){
        return n;
    }else{

        return Fibonacci (n - 1) + Fibonacci (n - 2);
    }
}
console.log(Fibonacci(10)); //output = 55



// tow

function Fibonacci(length) {
    let a = 0,
      b = 1,
      sum = 0
    for (let i = 2; i <= length; i++) {
      sum = a + b
      a = b
      b = sum
    }
    return sum
  }
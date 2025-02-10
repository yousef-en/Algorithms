
# one 
# Recursive

def Fibonacci (n):
    if n <= 1:
        return n 
    else:
        return Fibonacci(n - 1) + Fibonacci (n - 2)
    
print(Fibonacci(10))  #output = 55     


# tow
# iterative
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

n = 10 
fib_sequence = list(fibonacci(n))

print(fib_sequence)    #[0, 1, 1, 2, 3, 5, 8, 13, 21, 34].

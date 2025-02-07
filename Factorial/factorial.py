
# simple
"""
    This function calculates the factorial of a given number using recursion.
"""
def factorial(n):
    
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)
    

# Example usage
number = int(input("Enter a number: "))
print(f"The factorial of {number} is {factorial(number)}")



# two

import sys

def factorial(n):
    """
        using recursive function             
    """
    if n == 1:
        return 1
    
    return factorial(n-1) * n


def main():
    n = input("Enter a Number: ")
    try:
        n = int(n)
    except ValueError:
        sys.exit("Input Must be Integer")

    print(f"Factorial Value if {n} is: {factorial(n)}")



if __name__ == '__main__':
    main()



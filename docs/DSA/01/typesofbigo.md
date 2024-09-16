- $O(1)$ Constant - no loops.
- $O(log N)$ Logarithmic - usually searching algorithms have log n if they are sorted (Binary Search).
- $O(n)$ Linear - for loops, while loops through n items.
- $O(n log(n))$ Log Linear - usually sorting operations, where you half the half.
- $O(n^2)$ Quadratic - every element in a collection needs to be compared to every other element. Two nested loops.
- $O(2^n)$ Exponential - recursive algorithms that solves a problem of size N.
- $O(n!)$ Factorial - you are adding a loop for every element.

!!! note
    **Iterating through half a collection is still $O(n)$**

    **Two separate collections is $O(a*b)$**


| Big O       | Name         | Description                        |
| ----------- | ------------ | ---------------------------------- |
| $1$         | Constant     | Statement, one line code           |
| $log(n)$    | Logarithmic  | Divide and conquer (binary search) |
| $n$         | Linear       | Loop                               |
| $n\,log(n)$ | Linearithmic | Effective sorting algorithms       |
| $n^2$       | Quadratic    | Double loop                        |
| $n^3$       | Cubic        | Triple loop                        |
| $2^n$       | Exponential  | Complex full search                |

Remember that $n$ indicates the input size, so what we what to do is to count the inputs we have in your code. 
I'm going to use the most basic examples for time complexity but also I'm going to explain space complexity, because you need to understand the basic ones before jumping to the fancy ones like $2^n$, $n\,log\,(n)$ or $n!$.

!!! Note "4 rules to read Big O more easily:"

    1. Read Worst Case.
    2. Remove Constasts.
    3. Different terms for inputs.
    4. Drop Non Dominats.

---

$Eg:$
=== "$O(1)$"
    ```js
    function sayHi(){
        return `Hi`; // 1 time and space
    }

    ```

    ```sayHi()``` always return ```Hi```, so the space complexity of this function is constant, as it does not create any additional variables or data structures and simply returns a string. The time complexity of this function is also constant, as it always takes the same amount of time to execute regardless of the input size. In other words, the function has a space and time complexity of $O(1)$.

=== "$O(n)$"
    ```js
    function sayHi( n ){
        hiArray = [] // n spaces

        for(let i = 1; n >= i; i++) hiArray.push(`Hi`); // n times

        return hiArray;
    }
    ```
    The time complexity of this function is linear, or $O(n)$, because the for loop iterates a number of times equal to the input value```n```. Each iteration of the loop takes constant time to execute, so the total time complexity is directly proportional to the input size.

    The space complexity of this function is also linear, or $O(n)$, because a new array is created and its length is equal to the input value n. The array requires additional space to store each element that is added to it, so the total space complexity is directly proportional to the input size.

    In summary, the time complexity of this function is $O(n)$ and the space complexity is $O(n)$.

=== "$O(n^2)$"
    ```js
    function GenerateMultiplicationTablesFromOneToNinNTimes( n ){
        result = {} // n spaces 

        for(let i = 1; i <= n; i++){ // n times
            let table = [] // spaces
            for( j = 1; j <= n; j++ ){ // n times
                table.push(j*i)
            }
            result[i] = table;
        } // n times

        return result;
    }
    ```
    The space complexity of this function is $O(n)$, as it creates an object with n keys, as well as n arrays of size ```n```. The time complexity of this function is $O(n^2)$, as the outer for loop runs n times and the inner for loop also runs n times, resulting in $n * n = n^2$ iterations. This means that the overall time complexity of this function is $O(n^2)$.

    ??? Note "When a function doesn't count as $O(n^2)$ in a double loop?"
        === "$E.g\;1$:"
            ```js
            function GenerateMultiplicationTablesFromOneTo10(){
                result = {} // 10 spaces 

                for(let i = 1; i <= 10; i++){ // 10 times
                    let table = [] // 10 spaces 
                    for( j = 1; j <= 10; j++ ){ // 10 times
                        table.push(j*i)
                    }
                    result[i] = table;
                }

                return result;
            }
            ```
            The time it takes to execute the function grows proportionally with the input size. This result in a total of $n * n = n^2$ iterations. In this case, the input size is the upper limit of the for loop, which is 10. So the function has a space and time complexity of $O(n) = O(10) = O(1)$.
        === "$E.g\;2$:"
            ```js
            function GenerateMultiplicationTablesFromOneToN( n ){
                result = {} // n spaces 

                for(let i = 1; i <= n; i++){ // n times
                    let table = [] // 10 spaces
                    for( j = 1; j <= 10; j++ ){ // 10 times
                        table.push(j*i)
                    }
                    result[i] = table;
                }

                return result;
            }
            ```

            The time complexity of this one is $O(n)$ because even if we double loop in time complexity is $O(n * 10) = O(n)$ and in space and time.
=== "$O(n+m)$"
    ```js
    function sum(nArr, mArr) {
        let sum = 0; // 1 space

        for(let i : nArr) { // n times
            sum += i; // 1 space
        }

        for(let i : mArr) { // m times
            sum += i; // 1 space
        }

        return sum;
    }
    ```

    When you write O(m+n) it means that the algorithm will take O(m) time when $m>n$ and $O(n)$ when $m<n$. In any way, $O(m+n) = O(max(m,n))$
    This is because the function performs a fixed number of operations (i.e., adding each element to the sum) for each element in the input arrays. The space complexity is also linear, $O(n)$, because the function stores a sum variable and two pointers (i) for each element in the input arrays. But try to use the third rule written before, to be clear about the time complexity.

=== "$O(n*m)$"
    ```js
    function sum(nArr, mArr) {
        let sum = 0; // 1 space

        for(let i : nArr) { // n times
            for(let j : mArr) { // m times 
                sum += i * j; // 1 space
            }
        }

        return sum;
    }
    ```

    This function has $O(m*n)$ time complexity because it performs a nested loop, with the outer loop iterating over each element in ```nArr``` and the inner loop iterating over each element in ```mArr```. For each element in nArr, the function performs m operations (one for each element in ```mArr```), so the total number of operations is $m * n$. The space complexity of this function is also $O(m*n)$, because it stores the sum variable and two pointers (i and j) for each element in the input arrays.

=== "$O(log(n))$"
    ```js
    function binarySearch(arr, x) {
        let start = 0; // 1 space

        let end = arr.length - 1; // space

        while (start <= end) { // log(n) time, because the search space is halved on each iteration of the loop
            let mid = start + (end - start) / 2; // 1 space
            if (arr[mid] === x) {
                return mid; // n times
            } else if (arr[mid] < x) {
                start = mid + 1; // n times
            } else {
                end = mid - 1; // n times
            }
        }

        return -1;
    }
    ```
    
    Here is a simple implementation of a binary search algorithm, this algorithm works by first setting the start and end indices of the search space to the first and last elements of the array. It then repeatedly divides the search space in half by setting the midpoint as the new start or end index, depending on whether the element being searched for is greater than or less than the element at the midpoint. This process continues until the element is found, or until the search space is empty (in which case the element is not present in the array).

    The time complexity of this algorithm is $O(log(n))$, because the size of the search space is halved on each iteration of the loop, so the number of iterations required to find the element is logarithmic in the size of the array.

    The space complexity of this algorithm is $O(1)$, because it only uses a constant number of variables (start, end, and mid) regardless of the size of the input array. This means that the amount of memory used by the algorithm does not depend on the size of the input, so the space complexity is constant.
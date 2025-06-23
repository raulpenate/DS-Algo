Creating **pointers** or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

**Very** efficient for solving problems with minimal space complexity as well.

This pattern uses for strings, arrays or linkedlist to search a pair a value or to meet a condition.

---
## **sumZero(arr)**
> Write a function called **sumZero**, which accepts a **sorted** array of integers.
The function should find the **first** pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
```js
same([-3,-2,-1,0,1,2,3]) //[-3, 3]
same([-2,0,1,3]) //undefined
same([1,2,3]) //undefined
```
!!! Failure "A Naive solution"

    - Time complexity - $n^2$
    - Space complexity - $1$
    
    ```js
    function sumZero(arr){
        for(let i=0; i<arr.length; i++){
            for(let j=i+1; j<arr.length; j++){
                if(arr[i] + arr[j] === 0){
                    return [arr[i], arr[j]];
                }
            }
        }
    }
    ```
!!! Success "Refactored"

    - Time complexity - $n$
    - Space complexity - $n$
    
    === "JS"

        ```js
        function sumZero(arr){
            let left = 0;
            let right = arr.length - 1;
            while(left < right){
                let sum = arr[left] + arr[right];
                if(sum === 0){
                    return [arr[left], arr[right]]
                }else if(sum > 0){
                    right--;
                }else {
                    left++;
                }
            }
        }
        ```

    === "Java"

        ```java
        public class SumZero {

            public static int[] sumZero(int[] arr) {
                int left = 0;
                int right = arr.length - 1;

                while (left < right) {
                    int sum = arr[left] + arr[right];

                    if (sum == 0) {
                        return new int[]{arr[left], arr[right]};
                    } else if (sum > 0) {
                        right--;
                    } else {
                        left++;
                    }
                }

                return null; // No pair found
            }

            public static void main(String[] args) {
                int[] sortedArray = {-5, -3, -1, 0, 2, 4, 5};
                int[] result = sumZero(sortedArray);

                if (result != null) {
                    System.out.println("Pair: [" + result[0] + ", " + result[1] + "]");
                } else {
                    System.out.println("No pair found.");
                }
            }
        }
        ```

---

## **validAnagram(word1, word2)**

> Implement a function called **countUniqueValues**, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. Bonus: You must do this with constant or O(1) space and O(n) time.
```js
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
```


!!! Success "Solution"

    - Time complexity - $n$
    - Space complexity - $1$

    === "JS"

        ```js
        function validAnagram(word1, word2){
            if( arr.length === 0 ) return 0
            if( arr.length === 1 ) return 1

            let count = 0;
            for( let i=0; i<arr.length; i++)
                if(arr[i] !== arr[i+1]) count++
            
            return count
        }
        ```
    
    === "Java"
        
        ```java
        public class UniqueValueCounter {

            public static int countUniqueValues(int[] arr) {
                if (arr.length == 0) return 0;
                if (arr.length == 1) return 1;

                int count = 0;

                for (int i = 0; i < arr.length - 1; i++) {
                    if (arr[i] != arr[i + 1]) {
                        count++;
                    }
                }

                return count + 1; // +1 to count the last unique value
            }

            public static void main(String[] args) {
                int[] sortedArray = {1, 1, 2, 2, 3, 4, 4, 5};
                System.out.println("Unique values count: " + countUniqueValues(sortedArray)); // ➝ 5
            }
        }

        ```
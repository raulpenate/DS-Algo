This pattern involves creating a **window** which can either be an array or numbers from one position to another.

Depending on a certain condition, the window either increases or closes(and a new window is created).

Very useful for keeping track of a subset of data in an array/string etc.

---
## **maxSubarraySum(arr, num)**
> Write a function called **maxSubarraySum**, which accepts a  array of integers and a number called **num**.
The function should calculate the maximum sum of **num** consecutive elements in the array.
```js
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) //17
maxSubarraySum([4,2,1,6],1) //6
maxSubarraySum([],4) //null
```
!!! Failure "A Naive solution"

    - Time complexity - $n^2$
    - Space complexity - $1$
    
    ```js
    function maxSubrraySum(arr, num){
        if(num > arr.length){
            return null;
        }
        let max = -Infinity;
        for(let i=0; i<arr.length - num + 1; i++){
            temp = 0;
            for(let j=0; j<num; j++){
                temp += arr[i+j];
            }
            if(temp > max){
                max = temp;
            }
        }
        return max;
    }
    ```
!!! Success "Refactored"

    - Time complexity - $n$
    - Space complexity - $1$
    
    === "JS"

        ```js
        function maxSubrraySum(arr, num){
            let maxSum = 0;
            let tempSum =0;

            if(arr.length < num) return null;

            for(let i=0; i<num;i++){
                maxSum+=arr[i];
            }
            
            tempSum=maxSum;

            for(let i=num; i<arr.length; i++){
                tempSum = tempSum - arr[i-num] + arr[i];
                maxSum = Math.max(maxSum,tempSum);
            }

            return maxSum;
        }
        ```

    === "Java"

        ```java
        public class MaxSubarraySum {
            public static Integer maxSubarraySum(int[] arr, int num) {
                if (arr.length < num) return null;

                int maxSum = 0;
                int tempSum = 0;

                // Initial sum of the first `num` elements
                for (int i = 0; i < num; i++) {
                    maxSum += arr[i];
                }

                tempSum = maxSum;

                // Sliding window
                for (int i = num; i < arr.length; i++) {
                    tempSum = tempSum - arr[i - num] + arr[i];
                    maxSum = Math.max(maxSum, tempSum);
                }

                return maxSum;
            }

            public static void main(String[] args) {
                int[] example = {1, 2, 5, 2, 8, 1, 5};
                int num = 4;
                System.out.println("Max sum: " + maxSubarraySum(example, num)); // Output: 17
            }
        }
        ```
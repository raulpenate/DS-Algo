This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

THis pattern can tremendusly **decrease time complexity**.

---
## **search(arr, val)**
> Given a **sorted** array of intergers, write a function called search, that accepts a value and returns the index where the value passed to a the function is located. If the value is not found, return -1.
```js
search([1,2,3,4,5,6],2) //3
search([1,2,3,4,5,6],6) //5
search([1,2,3,4,5,6],11) //-1
```
!!! Failure "A Naive solution"

    - Time complexity - $n$
    - Space complexity - $1$
    
    ```js
    function search(arr, val){
        for(let i=0; i < arr.length; i++){
            if(arr[i] === val) return arr[i];
        }
        return -1;
    }
    ```
!!! Success "Refactored"

    - Time complexity - $log(n)$
    - Space complexity - $1$
    
    === "JS"

        ```js
        function search(arr, val){

            let min = 0;
            let max = arr.length - 1;

            while(min <= max){
                let middle = Math.floor((min + max) / 2);

                if(arr[middle] < val) {
                    min = middle + 1;
                } else if(arr[middle] > val) {
                    max = middle - 1;
                } else {
                    return val;
                }
            }

            return -1;
        }
        ```

    === "Java"

        ```java
        public class BinarySearch {
            public static int search(int[] arr, int val) {
                int min = 0;
                int max = arr.length - 1;

                while (min <= max) {
                    int middle = (min + max) / 2;

                    if (arr[middle] == val) {
                        return middle; // return the index
                    } else if (arr[middle] > val) {
                        max = middle - 1;
                    } else {
                        min = middle + 1;
                    }
                }

                return -1; // not found
            }

            public static void main(String[] args) {
                int[] arr = {1, 3, 5, 7, 9, 11};
                int target = 7;

                int index = search(arr, target);
                if (index != -1) {
                    System.out.println("Found at index: " + index);
                } else {
                    System.out.println("Not found");
                }
            }
        }
        ```
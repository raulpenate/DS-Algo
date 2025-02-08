This pattern uses objects or sets to collect values/frequencies of values.

This can often avoid the need for nested loops or $O(n^2)$ operations with arrays/strings.

---
## **same(arr1, arr2)**
> Write a function called **same**, which accepts two arrays.
The function should return true if every value in the array has it's corresponding value
squared in the second array. The frequency of values must be the same.
```js
same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,9]) //true (must be the same frequency)
```
!!! Failure "A Naive solution"

    - Time complexity - $n^2$
    - Space complexity - $1$
    
    ```js
    function same(arr1, arr2){
        if(arr1.length !== arr2.length){
            return false;
        }
        for(let i=0; i<arr1.length; i++){
            let correctIndex = arr2.indexOf(arr1[i] ** 2)
            if(correctIndex === -1){
                return false;
            }
            arr2.splice(correctIndex,1)
        }
        return true
    }
    ```
!!! Success "Refactored"

    - Time complexity - $n$
    - Space complexity - $n$
    
    === "JS"

        ```js
        function same(arr1, arr2){
            if(arr1.length !== arr2.length){
                return false;
            }
            let frequencyCounter1 = {}
            let frequencyCounter2 = {}
            for(let val of arr1){
                frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
            }
            for(let val of arr2){
                frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
            }
            for(let key in frequencyCounter1){
                if(!(key ** 2 in frequencyCounter2)) return false
                if(!(frequencyCounter2[key ** 2] !== frequencyCounter1[key])) return false
            }
            return true
        }
        ```

    === "Java"

        ```java
        public class Main {
            public static boolean same(int[] arr1, int[] arr2) {
                if (arr1.length != arr2.length) {
                    return false;
                }

                Map<Integer, Integer> frequencyCounter1 = new HashMap<>();
                Map<Integer, Integer> frequencyCounter2 = new HashMap<>();
                for (int val : arr1) {
                    frequencyCounter1.put(val, frequencyCounter1.getOrDefault(val, 0) + 1);
                }
                for (int val : arr2) {
                    frequencyCounter2.put(val, frequencyCounter2.getOrDefault(val, 0) + 1);
                }
                for (int key : frequencyCounter1.keySet()) {
                    if (!frequencyCounter2.containsKey(key * key)) return false;
                    if (!(frequencyCounter2.get(key * key) == frequencyCounter1.get(key))) return false;
                }
                return true;
            }

            public static void main(String[] args) {
                int[] arr1 = {1, 2, 3};
                int[] arr2 = {1, 4, 9};
                System.out.println(same(arr1, arr2)); // true
            }
        }
        ```

---

## **validAnagram(word1, word2)**

> Given two strings, write a function called **validAnagram** to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
```js
validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
```

!!! Success "Solution"

    - Time complexity - $n$
    - Space complexity - $n$

    === "JS"

        ```js
        function validAnagram(word1, word2){
            if(word1.length !== word2.length) return false

            let freqLetters1 = {}

            for(let letter of word1){
                freqLetters1[letter] = (freqLetters1[letter] || 0) + 1
                //Also we can do it with a ternary operator
                //freqLetters1[letter] ? freqLetters1[letter] += 1 : freqLetters1[letter] = 1;
            }

            for(let letter of word2){
                if(!freqLetters1[letter]) return false
                freqLetters1[letter]--;
            }
            return true;
        }
        ```
    
    === "Java"
        
        ```java
        public class Main {
            public static boolean validAnagram(String word1, String word2) {
                if (word1.length() != word2.length()) return false;

                Map<Character, Integer> freqLetters1 = new HashMap<>();

                for (char letter : word1.toCharArray()) {
                    freqLetters1.put(letter, freqLetters1.getOrDefault(letter, 0) + 1);
                }

                for (char letter : word2.toCharArray()) {
                    if (!freqLetters1.containsKey(letter)) return false;
                    freqLetters1.put(letter, freqLetters1.get(letter) - 1);
                }
                return true;
            }

            public static void main(String[] args) {
                System.out.println(validAnagram("listen", "silent"));  // true
                System.out.println(validAnagram('awesome', 'awesom'));  // false
            }
        }
        ```
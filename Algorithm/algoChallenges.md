

#Challenges

1. Array Chunk
 Write a function that takes an array and a chunk size as input.
 The function should return a new array where the original array is split into chunks of the specified size. 

```javascript
const chunk = (array, size) => {

  const chunked = []
  
  let index = 0

  while (index < array.length) {
    const chunk = array.slice(index, index + size)

    console.log("---", chunk)

    chunked.push(chunk)

    index += size
  }

  return chunked
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
```

2. Two Sum
 Imagine you have a list of numbers and a target number. Your job is to finid two numbers in that list that add up to the target number. You also need to tell which positions (or indexes) those two numbers are at in the list

 ```javascript
 function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];

      if (map.has(diff)) {return [map.get(diff), i];}
      
      map.set(nums[i], i);
      
    }
  }
  
  console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
 ```

 3. Reversing a String

 ```javascript
 function reversestring(str) {
    return str.split(' ').reverse().join(' ')
 }

 console.log(reversestring('Men at work'))
```

 4. FizzBuzz
  Print numbers from 1 to n. For multiples of 3, print “Fizz”; for 5, print “Buzz”; for both, print “FizzBuzz”.

  ```javascript
   function fizzBuzz(n) {
   for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
   }
  }

  fizzBuzz(15);
```
```javascript
function fizzBuzz(n) {
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    
    console.log(result);
}

 fizzBuzz(15);
```


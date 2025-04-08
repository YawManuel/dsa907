

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
 
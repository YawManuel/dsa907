Below are examples for each of the common Big O complexities implemented in JavaScript:

---

### **1. O(1) – Constant Time**

A constant time operation does not depend on the input size. For example, accessing the first element of an array is O(1):

```javascript
function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([10, 20, 30])); // Output: 10
```

---

### **2. O(log n) – Logarithmic Time**

Binary search on a sorted array is a classic example of O(log n) time complexity:

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1; // Not found
}

const sortedArray = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(sortedArray, 7)); // Output: 3
```

---

### **3. O(n) – Linear Time**

Traversing an array once (for example, finding the maximum value) is O(n):

```javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([3, 1, 4, 1, 5, 9])); // Output: 9
```

---

### **4. O(n log n) – Linearithmic Time**

Merge sort is a classic O(n log n) algorithm because it divides the array (log n divisions) and merges them in linear time:

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}

const unsortedArray = [5, 3, 8, 4, 2, 7, 1, 6];
console.log(mergeSort(unsortedArray));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

---

### **5. O(n²) – Quadratic Time**

A nested loop where each element is compared with every other element (like bubble sort) is O(n²):

```javascript
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arrayToSort));
// Output: [11, 12, 22, 25, 34, 64, 90]
```

---

### **6. O(n³) – Cubic Time**

Triple nested loops result in cubic time complexity. For example, counting all possible triplets in an array:

```javascript
function countTriplets(arr) {
  let count = 0;
  const n = arr.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        // Process each triplet (arr[i], arr[j], arr[k])
        count++;
      }
    }
  }
  
  return count;
}

console.log(countTriplets([1, 2, 3])); // Output: 27 (3 * 3 * 3)
```

---

### **7. O(2ⁿ) – Exponential Time**

A naive recursive implementation of the Fibonacci sequence demonstrates exponential time complexity:

```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5
// Note: This approach becomes extremely slow as n increases.
```

---

### **8. O(n!) – Factorial Time**

Generating all permutations of an array is an example of an algorithm with factorial time complexity:

```javascript
function permute(arr) {
  if (arr.length === 0) return [[]];
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const remainingPermutations = permute(remaining);
    
    for (let perm of remainingPermutations) {
      result.push([current, ...perm]);
    }
  }
  
  return result;
}

console.log(permute([1, 2, 3]));
// Output: [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]
```

---

Each example above illustrates how the time complexity increases with the size of the input (`n`). Understanding these complexities helps you design more efficient algorithms, especially when dealing with large datasets.

Here are the JavaScript Big O code examples converted to Python:

---

### 1. O(1) – Constant Time

```python
def get_first_element(arr):
    return arr[0]

print(get_first_element([10, 20, 30]))  # Output: 10
```

---

### 2. O(log n) – Logarithmic Time (Binary Search)

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1  # Not found

sorted_array = [1, 3, 5, 7, 9, 11]
print(binary_search(sorted_array, 7))  # Output: 3
```

---

### 3. O(n) – Linear Time

```python
def find_max(arr):
    max_val = arr[0]
    for val in arr[1:]:
        if val > max_val:
            max_val = val
    return max_val

print(find_max([3, 1, 4, 1, 5, 9]))  # Output: 9
```

---

### 4. O(n log n) – Linearithmic Time (Merge Sort)

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

unsorted_array = [5, 3, 8, 4, 2, 7, 1, 6]
print(merge_sort(unsorted_array))  # Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

---

### 5. O(n²) – Quadratic Time (Bubble Sort)

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

array_to_sort = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(array_to_sort))  # Output: [11, 12, 22, 25, 34, 64, 90]
```

---

### 6. O(n³) – Cubic Time

```python
def count_triplets(arr):
    count = 0
    n = len(arr)
    for i in range(n):
        for j in range(n):
            for k in range(n):
                count += 1
    return count

print(count_triplets([1, 2, 3]))  # Output: 27 (3 * 3 * 3)
```

---

### 7. O(2ⁿ) – Exponential Time (Naive Fibonacci)

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(5))  # Output: 5
# Note: This approach becomes extremely slow as n increases.
```

---

### 8. O(n!) – Factorial Time (Generating Permutations)

```python
def permute(arr):
    if len(arr) == 0:
        return [[]]
    result = []
    for i in range(len(arr)):
        current = arr[i]
        remaining = arr[:i] + arr[i+1:]
        for perm in permute(remaining):
            result.append([current] + perm)
    return result

print(permute([1, 2, 3]))
# Output:
# [
#   [1, 2, 3],
#   [1, 3, 2],
#   [2, 1, 3],
#   [2, 3, 1],
#   [3, 1, 2],
#   [3, 2, 1]
# ]
```

Let me know if you want these as a markdown document or need more explanations!
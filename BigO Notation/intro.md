Big O notation is a mathematical concept used to describe the performance or complexity of an algorithm, particularly in terms of time (execution duration) and space (memory usage) as the input size grows. It provides an upper bound on the growth rate of a function, allowing us to classify algorithms based on their efficiency. citeturn0search0

**Key Points:**

- **Purpose:** Big O notation helps in understanding how the runtime or space requirements of an algorithm scale with increasing input sizes, focusing on the worst-case scenario. citeturn0search1

- **Growth Rates:** It characterizes functions according to their growth rates, enabling the comparison of different algorithms' efficiency. citeturn0search0

**Common Big O Classifications:**

1. **O(1) – Constant Time:** The algorithm's performance remains constant, regardless of input size.

2. **O(log n) – Logarithmic Time:** Performance increases logarithmically as input size grows.

3. **O(n) – Linear Time:** Performance scales linearly with input size.

4. **O(n log n) – Linearithmic Time:** A combination of linear and logarithmic growth rates.

5. **O(n²) – Quadratic Time:** Performance scales quadratically with input size.

6. **O(n³) – Cubic Time:** The algorithm's performance scales cubically with the input size.

7. **O(2ⁿ) – Exponential Time:** Performance doubles with each additional input element.

8. **O(n!) – Factorial Time:** Performance grows factorially with input size.

**Example:**

Consider a function that checks if a number exists in an unsorted array:

```javascript
function containsNumber(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false;
}
```

In the worst-case scenario, the function may need to check every element in the array, resulting in a time complexity of O(n), where n is the number of elements in the array.

Understanding Big O notation is crucial for evaluating and comparing the efficiency of algorithms, especially when dealing with large datasets. 
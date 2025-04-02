Definition of Sorting Algorithm
A sorting algorithm is a method used to arrange elements in a list or array in a specific order, typically in ascending or descending order. Sorting is fundamental in computer science because it improves search efficiency, optimizes data retrieval, and organizes data for better processing.

Examples of Sorting Algorithms
1. Bubble Sort (Simple, but inefficient)
Description: Repeatedly swaps adjacent elements if they are in the wrong order.

Time Complexity: O(n²)

Data Structure Used: Arrays

javascript
Copy
Edit
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
2. Selection Sort (Inefficient, but conceptually simple)
Description: Selects the smallest element from an unsorted list and swaps it with the first unsorted element.

Time Complexity: O(n²)

Data Structure Used: Arrays

javascript
Copy
Edit
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
  }
  return arr;
}

console.log(selectionSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
3. Insertion Sort (Efficient for small datasets)
Description: Builds the sorted list one element at a time by inserting each element in its correct position.

Time Complexity: O(n²) worst-case, O(n) best-case for nearly sorted arrays.

Data Structure Used: Arrays, Linked Lists

javascript
Copy
Edit
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
4. Merge Sort (Efficient for large datasets)
Description: Recursively divides the array into halves, sorts each half, and merges them back together.

Time Complexity: O(n log n)

Data Structure Used: Arrays, Linked Lists

javascript
Copy
Edit
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) sortedArr.push(left.shift());
    else sortedArr.push(right.shift());
  }
  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
5. Quick Sort (Fastest in practice)
Description: Selects a pivot, partitions the array into elements smaller and larger than the pivot, then recursively sorts them.

Time Complexity: O(n log n) average, O(n²) worst-case (if pivot is poorly chosen).

Data Structure Used: Arrays

javascript
Copy
Edit
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = arr.filter((el) => el < pivot);
  const right = arr.filter((el) => el > pivot);
  const middle = arr.filter((el) => el === pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
6. Heap Sort (Efficient for priority-based sorting)
Description: Uses a binary heap to sort an array efficiently.

Time Complexity: O(n log n)

Data Structure Used: Heap (Binary Heap)

javascript
Copy
Edit
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    let leftChild, rightChild, smallest = index;
    const length = this.heap.length;
    let leftIndex = 2 * index + 1;
    let rightIndex = 2 * index + 2;

    if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) smallest = leftIndex;
    if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]) smallest = rightIndex;
    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.sinkDown(smallest);
    }
  }
}

function heapSort(arr) {
  const heap = new MinHeap();
  arr.forEach(num => heap.insert(num));

  return arr.map(() => heap.extractMin());
}

console.log(heapSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
Which Data Structures Are Used in Sorting Algorithms?
Sorting Algorithm	Data Structure Used
Bubble Sort	Array
Selection Sort	Array
Insertion Sort	Array, Linked List
Merge Sort	Array, Linked List
Quick Sort	Array
Heap Sort	Binary Heap

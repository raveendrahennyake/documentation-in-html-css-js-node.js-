![My Image](javascript.png)

Spread Operator (...):
The spread operator expands elements of an array, object, or iterable into individual elements.

Purpose: It’s typically used to expand an array into individual elements, merge arrays or objects, or clone them.
Usage:
When creating a new array/object.
When passing arguments to a function.
When combining or cloning arrays/objects.

  const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];  // Expands elements of array1
console.log(array2);  // Output: [1, 2, 3, 4, 5, 6]


slice() Method:
The slice() method returns a shallow copy of a portion of an array, without modifying the original array.

Purpose: Used to extract a part (slice) of an array. It takes two arguments: the start index and the end index (exclusive).
Usage:
To extract a sub-array.
To copy part of an array into a new array.
It does not modify the original array.


  const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(1, 4); // Extract elements from index 1 to 3
console.log(slicedArray);  // Output: [2, 3, 4]
console.log(array);        // Original array remains unchanged: [1, 2, 3, 4, 5]



Example Combining Both:
Here’s an example where both are used together:


const array = [1, 2, 3, 4, 5, 6];
const updatedArray = [...array.slice(0, 2), 99, ...array.slice(3)];
console.log(updatedArray);  // Output: [1, 2, 99, 4, 5, 6]
In this case, the slice() method extracts the parts of the array, and the spread operator spreads those parts into a new array, allowing modification of the middle element.


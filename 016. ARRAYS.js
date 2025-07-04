// JavaScript Arrays - Complete Guide

// 1. What is an Array?
// An array is a special variable in JavaScript that can hold more than one value at a time.
// It is an ordered collection of elements (indexed starting from 0).

// Example:
let fruits = ["Apple", "Banana", "Mango"];

// 2. Creating Arrays
// a. Using array literal:
let numbers = [1, 2, 3, 4, 5];

// b. Using new keyword:
let colors = new Array("Red", "Green", "Blue");

// 3. Accessing Elements
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango

// 4. Modifying Elements
fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Mango"]

// 5. Array Properties
console.log(fruits.length); // 3

// 6. Looping through Arrays
// a. for loop:
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for...of loop:
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach method:
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// 7. Common Array Methods
let arr = [1, 2, 3, 4, 5];

// push - add at end
arr.push(6);

// pop - remove from end
arr.pop();

// unshift - add at start
arr.unshift(0);

// shift - remove from start
arr.shift();

// indexOf - find index of element
console.log(arr.indexOf(3));

// includes - check if element exists
console.log(arr.includes(4));

// slice - returns shallow copy
console.log(arr.slice(1, 3)); // from index 1 to 2

// splice - remove or add elements
arr.splice(2, 1); // removes 1 element at index 2
arr.splice(2, 0, 10); // adds 10 at index 2

// join - convert array to string
console.log(arr.join(", "));

// reverse - reverses the array
arr.reverse();

// sort - sorts the array
arr.sort((a, b) => a - b); // numerical sort

// map - returns new array with modified values
let doubled = arr.map(x => x * 2);

// filter - returns array with filtered values
let evens = arr.filter(x => x % 2 === 0);

// reduce - reduce array to a single value
let sum = arr.reduce((total, current) => total + current, 0);

// 8. Multidimensional Arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]); // 6

// 9. Array Destructuring
let [a, b, c] = fruits;
console.log(a, b, c);

// 10. Spread Operator
let newArr = [...arr, 100, 200];

// 11. Rest Operator in Functions
function sumAll(...args) {
  return args.reduce((a, b) => a + b, 0);
}

// 12. Checking if value is an array
console.log(Array.isArray(fruits)); // true

// 13. Flattening Arrays
let nested = [1, 2, [3, 4], [5, [6]]];
let flat = nested.flat(2);

// 14. Important Notes
// - Arrays in JS are dynamic (can grow or shrink)
// - Arrays can hold any type of data (mixed types allowed)
let mixed = [1, "Hello", true, null];

// End of JS Arrays Guide

let arr = [1,4,6,7];

let value1 = Buffer.from(arr);
console.log(value1);

let str = "ABC";

let value2  = Buffer.from(str);
console.log(value2);

let combinedBuffer = Buffer.concat([value1, value2]);
console.log(combinedBuffer);

console.log(value2.toString()); // ABC

console.log(Array.from(arr));
/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

//const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

//const odds = nums.map((x) => x / 3);

//console.log(odds);



//let x = nums[];

//console.log('Exercise 11 result:', odds);

// divide the numbers in array by 3, if remainder = 0 then push to "odds"

//for (let i = 0; i < 1, i++); {

//const sum = new Function('a', 'b', 'return a + b');

//console.log(sum(2, 6));


//const odds = new Function()


/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];


numList = numArrays[3];

console.log('Exercise 13 result:', numList);

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

const num = numArrays[2][1];

console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

const total = numArrays

let row1 = numArrays[0]
let row2 = numArrays[1]
let row3 = numArrays[2]
let row4 = numArrays[3]

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;


row1.forEach(x => {sum1 += x;});
row2.forEach(x => {sum2 += x;});
row3.forEach(x => {sum3 += x;});
row4.forEach(x => {sum4 += x;});

console.log("row 1 = " + sum1)
console.log("row 2 = " + sum2)
console.log("row 3 = " + sum3)
console.log("row 4 = " + sum4)
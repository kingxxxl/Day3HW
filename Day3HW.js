//Variables
// Calculate area of a rectangle
//
// Store the length of rectangle.
// Store the width of rectangle.
// Calculate the area and print the output "The area of the rectangle is: NN"


let lengthOfRectangle = 4;
let widthOfRectangle = 5;
//A=wl
let areaOfTheRectangle = lengthOfRectangle * widthOfRectangle;

console.log("The area of the rectangle is: "+areaOfTheRectangle);

// The Temperature Converter
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

let celsiusTemperature = 37;
let fahrenheitTemperature = celsiusTemperature *1.8 + 32;

console.log(celsiusTemperature +"°C is "+fahrenheitTemperature.toFixed(1)+"°F")



// For loop
// Numbers' summations
// Loop though this array let Numbers = [23,54,32,87,47] and print the sum of all numbers


let numbers = [23,54,32,87,47];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("The sum is: "+sum)


// Maximum number
// Create an array of the following numbers [16,4,2,0,19,6]
// Loop through the array elements and print the maximum number of this list to the console.


let maximumNumber = [16,4,2,0,19,6];

let maxNumber = Number.MIN_VALUE;

for (let i = 0; i < maximumNumber.length; i++) {
    if (maximumNumber[i] > maxNumber){
        maxNumber = maximumNumber[i];
    }
}
console.log(maxNumber)

// Reverse Array
// Create an array of the following numbers [1,2,3,4,5,6,7,8,9,10]
// print the Array In A Reverse order

let array  = [1,2,3,4,5,6,7,8,9,10];
let arrayInAReverse = new Array();

for (let i = (array.length-1); i >= 0; i--) {
    arrayInAReverse.push(array[i]);
}
console.log(arrayInAReverse)





// Nested for loop
// stars pattern
// Declare a variable and assign a number to it.
// Print a right angle triangle using stars to the console. Example: if the variable is 5, the printed pattern will be as follow:
// *
// **
// ***
// ****
// *****

let v = 5;
let result = ``;
for (let i = 0; i < v; i++) {
    result +="*"
    for (let j = 0; j < i; j++) {
        result +="*"
    }
    result+="\n";
}
console.log(result)
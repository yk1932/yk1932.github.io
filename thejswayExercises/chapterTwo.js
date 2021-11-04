// Program 1: Improved Hello: Write a program that asks the user for his first name
// and his last name. The program then displays them in one sentence.

const firstName = prompt("Enter First Name: ");
const lastName = prompt("Enter Last Name: ");

console.log('Hello' + firstName + ' ' + lastName + '!');

// Program 2: Final Values

2, 10, 102, 30, 40, 10, 10

// Program 3: VAT Calculation | Key point: Use number for raw price

const rawPrice = Number(prompt("Enter raw price: "));
const finalPrice = rawPrice + (rawPrice*0.206);

console.log(finalPrice);

// Program 4: From Celsius to Fahrenheit degrees

const celsiusTemp = Number(prompt("Enter temperature in celsius: "));
const fahrenheitTemp = celsiusTemp * (9/5) + 32;

console.log(fahrenheitTemp + ' fahrenheit');

// Program 5: Variable Swapping

let number1 = 5;
let number2 = 3;

[number1, number2] = [number2, number1];

console.log(number1);
console.log(number2);


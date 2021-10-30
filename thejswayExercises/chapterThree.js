//Program 1: Following Day

// Write a program that accepts a day name from the user. 
// Then shows the name of the following day. 
// Incorrect inputs must be taken into account. 

let inputDay = prompt("Enter a Day of the week (With no caps):");

switch (inputDay) {

    case "monday":
        console.log("tomorrow is tuesday");
        break;

    case "tuesday":
        console.log("tomorrow is wednesday");
        break;

    case "wednesday":
        console.log("tomorrow is thursday");
        break;

    case "thursday":
        console.log("tomorrow is friday");
        break;
            
    case "friday":
        console.log("tomorrow is saturday");
        break;
      
    case "saturday":
        console.log("tomorrow is sunday");
        break;

    case "sunday":
        console.log("tomorrow is monday");
        break;

    default: 
        console.log("Not a valid day of the week!");

}

//Program 2: Number Comparison

    let firstNumber = Number(prompt("Enter the first number: "));
    let secondNumber = Number(prompt("Enter the second number: "));

    if (firstNumber === secondNumber) {
        console.log("Two numbers are equal!");
    }

    else if (firstNumber > secondNumber) {
        console.log("The first number is larger by " + (firstNumber-secondNumber));
    }

    else {
        console.log("The second number is larger by " + (secondNumber-firstNumber));
    }

//Program 3: Number of days in a month

    let chosenMonth = Number(prompt("Enter number form of a month:"));

    if (chosenMonth === (1 || 3 || 5 || 7 || 8 || 10 || 12)){
        console.log("There are 31 days in this month");
    }

    else if (chosenMonth === (4 || 6 || 9 || 11)){
        console.log("There are 30 days in this month");
    }

    else if (chosenMonth === 2){
        console.log("There are 28 days in this month");
    }

    else {
        console.log("Wrong input!");
    }

//Program 4: Following Second

//Write a program that asks for a time under the form of three information
// The program calculates and shows the time one second after.

let chosenHour = Number(prompt("Pick an hour: "));

    while (chosenHour < 0 || chosenHour > 24) {
        console.log("Pick an hour between 0 to 24")
        chosenHour = Number(prompt("Pick an hour: "));
    }

let chosenMinute = Number(prompt("Pick a minute: "));

    while (chosenMinute < 0 || chosenMinute > 60) {
        console.log("Pick a minute value between 0 to 60")
        chosenMinute = Number(prompt("Pick a minute: "));
    }

let chosenSecond = Number(prompt("Pick a second: "));

    while (chosenSecond < 0 || chosenSecond > 60) {
        console.log("Pick a second value between 0 to 60")
        chosenSecond = Number(prompt("Pick a second: "));
    }

//Convert time to seconds

chosenSecond ++;


if (chosenSecond === 60) {
    chosenMinute ++;
    chosenSecond = 0;

    if (chosenMinute === 60){
        chosenHour ++;
        chosenMinute = 0;
    }

        if (chosenHour === 24){
            chosenHour = 0;
        }
}

console.log(chosenHour, chosenMinute, chosenSecond);

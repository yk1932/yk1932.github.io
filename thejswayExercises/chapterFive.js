// Program 1: Improved Hello

function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
}

inputFirstName = prompt("What is your first name: ")
inputLastName = prompt("What is your last name: ")

console.log(sayHello(inputFirstName, inputLastName));

//Program 2: Number Squaring

function square1(x){
    return x*x;
}

const square2 = x => x*x;

console.log(square1(2));
console.log(square2(5));

for (i=1;i<=10;i++) {
    console.log(square2(i));
}

//Program 3: Minimum of Two Numbers

function minimumCalculator(x,y){
    if (x<=y) {
        return `The first variable ${x} is smaller`}
   else {
        return `The second variable ${y} is smaller`;
    }
}

console.log(minimumCalculator(2,9));

//Program 4: Calculator

function calculate(firstNumber,operator,secondNumber) {
    if (operator === "+") {
        return (firstNumber + secondNumber);
    }

    else if (operator === "-") {
        return (firstNumber - secondNumber);
    }

    else if (operator === "*") {
        return (firstNumber * secondNumber);
    }

    else if (operator === "/") {
        return (firstNumber / secondNumber);
    }

    else {
        return "Wrong operator!"
    }
}

console.log(calculate(4,"+",6));
console.log(calculate(4,"-",6));
console.log(calculate(2,"*",0));
console.log(calculate(12,"/",0));

// Program 5: Circumference and area of a circle

function circumferenceCircle(radius) {
    return (2*(Math.PI)*radius);
}

console.log(circumferenceCircle(4));

function areaCircle(radius){
    return (Math.PI)*(radius**2);
}

console.log(areaCircle(4));


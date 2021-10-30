// Program 1: Carousel

    for (let i = 1; i <= 10; i++){
        console.log("turn "+i);
    }

    let turnNumber = Number(prompt("Enter desired turn number: "));

    for (let i =1; i <= turnNumber; i++){
        console.log("turn "+i);
    }

//Program 2: Parity

    for (let i = 1; i<=10; i++){
        if ((i%2)!== 0){
            console.log(`${i} is odd`)
        }
    }

    let startNumber = Number(prompt("Enter initial number: "));
    counter = 0

    for (let i = startNumber; counter <=9; i++){
        if ((i%2)!== 0){
            console.log(counter);
            console.log(`${i} is odd`)
            counter ++;
        }
    }

//Program 3: Input Validation

    let enteredNumber = Number(prompt("Enter a number: "))

    while (enteredNumber > 100) {
        enteredNumber = Number(prompt("Enter a number less than or equal to 100 : "));
    }

    let enteredNumberTwo = Number(prompt("Enter a number: "))


    while (enteredNumberTwo > 50 || 100 < enteredNumberTwo) {
        enteredNumberTwo = Number(prompt("Enter a number between 50 and 100: "));
    }

// Program 4: Multiplication Table

    let userNumber = Number(prompt("Enter a number: "));

    while (userNumber < 2 || 9 < userNumber) {
        userNumber = Number(prompt("Enter a number between 2 to 9: "));
    }

    console.log(userNumber);

    for (let i=1; i <= 10; i++) {
        console.log(userNumber + ' x ' + i + ' = ' + (userNumber * i));
}

// Program 5: Neither yes nor no


    let inputText = prompt("Write something: ");
    console.log(inputText);

    while (inputText !== "yes"){

        if (inputText === "no") {
            console.log("Yay... finally!")
        }
        else {
            inputText = prompt("WRITE something AGAIN!!: ");
        }
    }
    console.log("Yay... finally!")

// Program 6: FizzBuzz

for (let i = 1; i <= 100; i++){

    if (i%3 === 0) {
        console.log("Fizz");
    }

    else if (i%5 === 0) {
        console.log("Buzz");
    }

    else {console.log(i);}
}

// Program 6.5: FizzBuzz Improved

for (let i = 1; i <= 100; i++){

    if (i%15 === 0) {
        console.log("Fizzbuzz");
    }

    else if (i%3 === 0) {
        console.log("Fizz");
    }

    else if (i%3 === 0) {
        console.log("Buzz");
    }

    else {console.log(i);}
}




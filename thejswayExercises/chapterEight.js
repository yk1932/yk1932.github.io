// Word Info

let userWord = prompt("Type a word of choice!: ");

const lengthWord = userWord.length;
console.log(lengthWord);

const lowercaseWord = userWord.toLowerCase();
console.log(lowercaseWord);

const uppercaseWord = userWord.toUpperCase();
console.log(uppercaseWord);

// Vowel Count

numberVowels = 0;

for (i=0;i<lengthWord;i++){
    if (userWord[0] === ("a" || "e" || "i" || "o" || "u")) {
        numberVowels ++;
        console.log(numberVowels);
    } 
    console.log(numberVowels);

}


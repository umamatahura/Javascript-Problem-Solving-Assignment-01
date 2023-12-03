// 1st Problem
const num1 = 30;
const num2 = 20;
const maxNumber = num1 > num2 ? num1 : num2;
console.log(maxNumber);

// 2nd Problem
let number = 20

if (number < 0) console.log('negative')
else if (number > 0) console.log('positive')
else console.log('zero')

// 3rd Problem
let number1 = 40;

number1 % 10 == 0 ? console.log("number is divisible by 10") : console.log("number is not divisible by 10");

// 4th Problem
let number2 = 40;

number2 % 2 == 0 ? console.log("number is even") : console.log("number is odd");

// 5th Problem
let character = "a";
if (character >= "a" && character <= "z" || character >= "A" && character <= "Z") {
    console.log("Alphabet");
} else { console.log("Not Alphabet"); }

// 6th Problem
let temperature = 22;

if (temperature >= 30) {
    console.log("Weather is hot");
}
else if (temperature <= 25) {
    console.log("Weather is cold");
} else {
    console.log("Weather is normal");
}

// 7th Problem
const numA = 30;
const numB = 20;
const numC = 10;
if (numA > numB && numA > numC) {
    console.log("numA is Maximum Number");
} else if (numB > numA && numB > numC) {
    console.log("numB is Maximum Number");
} else {
    console.log("numC is Maximum Number");
}
//8th Problem
let terNumber = 40;
const iseven = terNumber % 2 == 0 ? true : false;
if (iseven) console.log("number is even");
else console.log("number is odd");

// 9th Problem
let numOne = 40;
let numTwo = 50;
if (numOne > 30 && numTwo > 30) {
    console.log("both the number is greater than 30");
} else {
    console.log("both the number is not greater than 30");
}

// 10th Problem
let personAge = 16;
if (personAge >= 13 && personAge <= 19) {
    console.log("Teenager");
} else {
    console.log("Not a teenager");
}
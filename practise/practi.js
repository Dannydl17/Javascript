let ten = 10;
console.log(ten * ten)
let mood = "light";
console.log(mood)
mood = "dark";
console.log(mood)
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt)
let one = 1 , two = 2;
console.log(one + two);
var name = "Danny";
const greeting = "Hello ";
console.log(greeting + name)

prompt("Enter passWord")
console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);
prompt(3)
let theNumber = Number(prompt("Pick a number"))
console.log("Your number is the square root of " +
theNumber * theNumber);

let theNumber1 = Number(prompt("Pick a number"))
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " +
    theNumber * theNumber);
    }
    if (1 + 1 == 2) console.log("It's true");
    Number(prompt(6))
    let theNumber2 = Number(prompt("Pick a number"));
    if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " +
    theNumber * theNumber);
    } else {
    console.log("Hey. Why didn't you give me a number?");
    }

    let num = Number(prompt("Pick a number"));
    if (num < 10) {
console.log("Small");
    } else if (num < 100) {
      console.log("Medium");
    } else {
      console.log("Large");
    }

    let number = 0;
    while (number <= 12) {
      console.log(number);
      number = number + 2;
    }
let result1 = 1;
let counter = 0;
while (counter < 10){
    result1 = result1 * 2;
    counter = counter + 1
}
console.log(result1)

let yourName;
do {
yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

if (false != true) {
    console.log("That makes sense.");
    if (1 < 2) {
    console.log("No surprise there.");
    }
}

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}

let result = 1
for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2; 
}
console.log(result)

for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
    console.log(current);
    break;
    }
}

switch (prompt("What is the weather like?")) {
    case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
    case "sunny":
    console.log("Dress lightly.");
    case "cloudy":
    console.log("Go outside.");
    break;
    default:
    console.log("Unknown weather type!");
    break;
}
console.log(prompt("rainy"))

const square = function(x){
    return x * x
}
console.log(square(12))

const makeNoise = function(){
    console.log("Pling!")
}
makeNoise()
const power2 = function(base, exponent){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *=base
    }
    return result;
};
console.log(power(2, 10));
let x1 = 10;
if(true){
    let y = 20;
    var z = 30;
    console.log(x1 + y + z);
}
console.log(x1 + z);

const halve = function(n){
    return n / 2;
};
let n = 10;
console.log(halve(100));
console.log(n)

const hummus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
}

let launchMissiles = function(){
    missileSystem.launch("now");
};
if(safeMode){
    launchMissiles = function() {/* do nothing */};
}

const power = (base, exponent) =>{
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base
    }
    return result;
};
console.log(power(2, 10));

let x = 1;
let y = "1";
console.log(x==y);
console.log(x===y);

let newArray = [1,2,3,4];
for (const value of newArray) {
    console.log(value)
}

for (const key in newArray) {
    console.log(key)
}

for(let count = 0; count < newArray.length;count++){
    console.log(newArray[count])
}

let arr = [[2,5,3],[7,8,4]]

for(let count = 0; count < arr.length; count++){
    for(let innerCount = 0; innerCount < arr[count].length;innerCount++){
        console.log(arr[count][innerCount])
    }
}

for (const key in arr) {
    for(const value in arr[key]){
        console.log(arr[key][value])
    }
}

for (const value of arr) {
    for (const key of value) {
        console.log(key)
    }   
}

let myArray = [[2,5,8],[5,2],[3,2,7]]

for(let count = 0; count < myArray.length; count++){
    for(let innerCount = 0; innerCount < myArray[count].length;innerCount++){
        console.log(myArray[count][innerCount])
    }
}

for (const key in myArray) {
    for(const value in myArray[key]){
       console.log(myArray[key][value])
    }
}

for (const value of myArray) {
    for (const key of value) {
        console.log(key)
    }
}   

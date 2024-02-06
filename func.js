const humus = function (factor){
    const ingredient = function(amount, unit, name){
      let ingredientAmount = factor * amount;
      if(ingredientAmount > 1){
         unit += "s";
      }
      return(`${ingredientAmount} ${unit} of ${name}`)
    }
    return ingredient(6, "cup", "juice");
}
const showCalculation = humus(2)
console.log(showCalculation)

let birthYears = [2000,1972,1999,2001];
let currentYear = 2024;

const getResultArray = (birthYears, func) =>{
    const result = []

    for(let birthYear of birthYears){
        let value = func(birthYear);
        result.push(value)
    }
    return result;
}

const calculateAge = (birthYear) =>{
    let age = currentYear - birthYear;
    return age;
}

let ages = getResultArray(birthYears,calculateAge);
console.log(ages)

function question(role){
    switch (role){
        case "Manager" :
            return function(name){
                  return `Hi ${name}, What is the core value of the company`;
            };
        case "Native" :
            return function(name1){
                 return `Hi ${name1}, What is your best programming language`;
            }
        case "Elder" :
            return function(name2){
                  return `Hi ${name2}, do you love your job?`;
            }
        default:
            return;
    }
}

let answer = question("Manager");
console.log(answer);
console.log(answer("John"));

let answer1 = question("Native");
console.log(answer1);
console.log(answer1("Danny"));

const square = function(x){
    return x * x
};
console.log(square(12))

const makeNoise = function(){
    console.log("Pling!");
};
makeNoise()

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
         result *= base;
    }
    return result;
};
    console.log(power(2, 10));

let x = 10;
if (true){
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}
console.log(x + z);

const halve = function(n) {
    return n / 2;
};
let n = 10;
console.log(halve(100))
console.log(n)

console.log("The future says:", future());
function future() {
    return "You'll never have flying cars";
}
   
const power1 = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
          result *= base;
    }
    return result;
};
console.log(power1(2,4))

const square1 = (x) => { 
    return x * x; 
};
const square2 = x => x * x;
console.log(square1(4))

const horn = () => {
    console.log("Toot");
};
horn()  
function greet(who) {
    console.log("Hello " + who);
};
greet("Harry")
console.log("Bye");

// function chicken() {
//     return egg();
// }
// function egg() {
//     return chicken();
// }
// console.log(chicken() + " came first.");

function square5(x) { return x * x; }
console.log(square5(4, true, "hedgehog"));

function minus (a, b){
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10))
console.log(minus(10, 5))

function power2(base, exponent = 2){
    let result = 1
    for(let count = 0; count < exponent;count++){
        result*=base;
    }
    return result;
}
console.log(power2(4));
console.log(power2(2, 6));

function wrapValue(n){
    let local = n
    return () => local
}
let wrap1 = wrapValue(1)
let wrap2 = wrapValue(2)
console.log(wrap1())
console.log(wrap2())

function multipler(factor){
    return number => number * factor;
}
let twice = multipler(2);
console.log(twice(5))

function power3(base, exponent){
    if (exponent == 0){
        return 1;
    }else{
        return base * power(base, exponent - 1);
    }
}
console.log(power3(2, 3))

function findSolution(target) {
    function find(current, history) {
    if (current == target) {
    return history;
    } else if (current > target) {
    return null;
    } else {
    return find(current + 5, `(${history} + 5)`) ||
    find(current * 3, `(${history} * 3)`);
    }
    }
    return find(1, "1");
}
console.log(findSolution(16))

// function printFarmInventory(cows, chickens){
//  let cowString = String(cows)
//  while(cowString.length < 3){
//     cowString = "0" + cowString;
//  }
// console.log(`${cowString} Cows`);
// let chickenString = String(chickens)
// while (chickenString.length < 3) {
//     chickenString = "0" + chickenString;
// }
//  console.log(`${chickenString} Chickens`);
// }
// printFarmInventory(7, 11);
  
// function printZeroPaddedWithLabel(number, label){
//     let numberString = String(number);
//     while(numberString.length < 3){
//         numberString = "0" + numberString;
//     }
//     console.log(`${numberString} ${label}`);
// }
// function printFarmInventory(cows, chickens, pigs) {
//     printZeroPaddedWithLabel(cows, "Cows");
//     printZeroPaddedWithLabel(chickens, "Chickens");
//     printZeroPaddedWithLabel(pigs, "Pigs");
// }
// printFarmInventory(7, 11, 3);

function zeroPad(number, width){
    let string = String(number);
    while(string.length < width){
        string = "0" + string;
    }
    return string;
}
function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);
    
    

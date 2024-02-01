var name = "Daniel";
// var name = "Danny";
// console.log(name)

// let newname = "Danny";
// let newname = "DAS";

// var value1 = "sam";
// var value2 = "chi";
// var value3 = "joy";

// var tempo = value1
// value1 = value2
// value2 = value3
// value3 = tempo

// console.log(value1)
// console.log(value2)
// console.log(value3)

// x = 5
// y = 6

// sum = (x + y) * 2
// console.log(sum)

// x = 5
// x1 = x % 10 + x

// console.log(x1)

// x = 5
// n = 4
// result = x + n

// word = "This is the first line\nAnd this is the second"
// console.log(word);

// word1 = "This is the first lines\tAnd this is the second"
// console.log(word1);

// word2 = "A newline character is written like \"\\n\"."
// console.log(word2);

// word3 = "con" + "cat" + "e" + "nate"
// console.log(word3);

// word4 = `half of 100 is ${100 / 2}`
// console.log(word4);

// console.log(typeof 4.5)
// // → number
// console.log(typeof "x")
// // → string

console.log(- (10 - 2))

console.log(3 > 2)

console.log(3 < 2)

console.log("Aardvark" < "Zoroaster")

let number = "1";
let numberOne = 1;
let numberTwo ;
let myArray = null;

let numberOne = Symbol();
let numberTwo = Symbol();


console.log(typeof number)
console.log(typeof numberOne)
console.log(typeof numberTwo)
console.log(myArray)
console.log(typeof null)

let user = {
    firstName: "Danny ",
    lastName: "Ade ",
    age: 23,
}

console.log(user.lastName + user.firstName)
let key = `firstName`;
console.log(user["firstName"], user["lastName"])
console.log(user[`${key}`])

let cohortNumber = 18;
console.log(`This is cohort ${cohortNumber}`)

function user(name, age){
    return {name, age}
}

let userOne = new user("Chinedu", 23);
let userTwo = new user("Ada", 13);

console.log(userOne)
console.log(userTwo)


let user = {
    Id : 3,
    available : true,
    count : 2,
    name : "Danny",
    author : "Joe Don"
}

 console.log(user)
user.name = "Joy";
user.author = "sam";
console.log(user)

let age = 24;
let output = (age > 16)? console.log(true):console.log(false);

if(age > 16){
    console.log(true)
}else{
    console.log(false)
}

let scores = 100;
let output1 = (scores < 50)? console.log("U need to work harder"):
              (scores <= 60)? console.log("Try more harder"):
              (scores <= 70)? console.log("Average score"):
              (scores <= 80)? console.log("Good score"):
              (scores <= 90)? console.log("very Good"):
              console.log("Execellent")

let left_operand = 3;
let right_operand = 5;
let operator = '=';  
let sign = (operator == '+')? console.log(3 + 5):
           (operator == '-')? console.log(3 - 5):
           (operator == '*')? console.log(3 * 5):
           (operator == '/')? console.log(3 / 5):
            console.log(NaN)

task(1);
function task(var1){
    if (var1 <= 10){
        console.log(var1 * var1);
    }else console.log("value is greater than 10");
}


let x = 1;
let y = "1";
console.log(x==y);
console.log(x===y);
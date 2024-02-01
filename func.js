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
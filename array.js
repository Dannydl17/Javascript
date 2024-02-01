let arrayO = new Array()
let arr1 = [];

let myArray6 = [1,2,3,4,5]
myArray6.push(45)

console.log(myArray6)


let myArray1 = [1,2,3,4,5]
myArray1.pop(45)
myArray1.shift(5)
console.log(myArray1)

let myArray2 = [1,2,3,4,5]
myArray2.unshift()
console.log(myArray2)

let myArray3 = [1,2,3,4,5]
myArray3.slice()
console.log(myArray3)

let myArray4 = [1,2,3,4,5]
myArray4.splice(2,2)
console.log(myArray4)

let array =[["Car", 2000], ["Truck", 500], ["Bike", 6500]]
arr.push(["Scooter", 1500]);
arr[0].push(["Toyota", "Nissan"])
arr[1].push(["Ford"])
arr[2].push(["Honda"])
console.log(array)

let arr10 = [[200,50,300,5],[10,25,7,100],[25,20,70,45],[500,170,11,35]]
let newCount1 = arr10[1].splice(0,3)
// let newCount = arr1[1].slice(0,3)
console.log(newCount1)

let user1 = {
    firstName : "Precious",
    lastName : "Obika",
    age : 23
};

for (const value in user1) {
    let result = user1[value];
    console.log(result)
}

let user2 = {
    firstName : "Precious",
    population : 23,
    temp : 23,
    currency : "Pound",
};

let user3 = {
    firstName : "Chidi",
    population : 24,
    temp : 5,
    currency : "Dollar",
};

let user4 = {
    firstName : "James",
    population : 25,
    temp : 21,
    currency : "France",
};

let user5 = {
    firstName : "Dami",
    population : 26,
    temp : 20,
    currency : "France",
};

let user6 = {
    firstName : "Junior",
    population : 27,
    temp : 21,
    currency : "Naira",
};

let user7 = {
    firstName : "John",
    population : 28,
    temp : 5,
    currency : "France",
};

let user8 = {
    firstName : "Dave",
    population : 29,
    temp : 30,
    currency : "Dollar",
};

let user9 = {
    firstName : "Joy",
    population : 25,
    temp : 21,
    currency : "Pound",
};

let user10 = {
    firstName : "Jane",
    population : 30,
    temp : 10,
    currency : "France",
};
let myArray = [[null, user2 , user3, user4],
               [user5,user6,user7,null],
               [user8, null,user9,user10]]
let sum = 0;

for(let count = 0; count < myArray.length; count++){
    for(let innerCount = 0; innerCount < myArray[count].length; innerCount++){
        if(myArray[count][innerCount]!= null){
            if(myArray[count][innerCount].temp <= 10){
                sum+=myArray[count][innerCount].population

            }
        }
        
    }
}
console.log(sum)

var obj = [
    {row:0,col:0,value:"x"},
    {row:0,col:1,value:"x"},
    {row:0,col:2,value:"o"},
    {row:1,col:0,value:"o"},
    {row:1,col:1,value:" "},
    {row:1,col:2,value:"x"},
    {row:2,col:0,value:"x"},
    {row:2,col:1,value:"o"},
    {row:2,col:2,value:"o"},
]
var length = 3;
var width = 3;
// console.log(obj)

let result1 = [[" "," "," "],
              [" ", " ", " "], 
              [" ", " ", " "]]

const gameBoard = (result1) =>{
    for(let count of obj){
        result1[count.row][count.col] = count.value; 
    }
     return result1;
}     

let answer = gameBoard(result1);
console.log(answer);


const arr = [1,3,4,5];
const newArray = [];


arr.forEach((x)=> {
    if(x % 2 === 0){
        console.log(x);
    }
})

arr.forEach((x)=> {
    let ans = x * 3;
    newArray.push(ans)
})

console.log(newArray);

const words = ["spray", "elite", "exuberant", "destruction", "present"]
const result = words.filter((word) => word.length > 6)
console.log(result);

const array1 = [1,4,9,16];

const map1 = array1.map((x) => x * 2);
console.log(map1);

let array2 = [2,3,5,6,7,2,2];
let number = array2.find((x) => x > 2);

console.log(number);

let numbers = array.findIndex((x) => x > 2);
console.log(numbers);

const studentScores = [95,78,85,60,45,92];

const map2 = studentScores.map((studentScore) => {
    if (studentScore >= 90 && studentScore <= 100){
         return "A"
    }
    if (studentScore >= 80 && studentScore <= 89){
        return "B"
   }
   if (studentScore >= 70 && studentScore <= 79){
        return "C"
   }
   if (studentScore >= 60 && studentScore <= 69){
         return "D"
    }
    if (studentScore < 69){
        return "F"
   }
    
});
console.log(map2)

const shoppingList = [
    {name : "Apples",category:"Fruits",isHealthy : true},
    {name : "Potato chips",category:"Snacks",isHealthy : false},
    {name : "Carrots",category:"Vegetables",isHealthy : true},
    {name : "Chocolate Bar",category:"Sweets",isHealthy : false},
    {name : "Greek Yogurt",category:"Dairy",isHealthy : true},
    {name : "Soda",category:"Beverages",isHealthy : false},

]
const results = shoppingList.filter((shoppingLists) => shoppingLists.isHealthy);

console.log(results)

healtyItems = [];
healtyItems.push(results);

healtyItems.forEach((result1)=> {
    for (const key of result1) {
        console.log(key.name)
    }  
})



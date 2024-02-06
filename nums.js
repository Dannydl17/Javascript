let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

 const answer = array.filter((nums) => nums % 2 == 0);

 console.log(answer);

array.forEach((nums) =>{
     let ans = nums * 2;
    console.log(ans)
})

const map1 = array.map((num1)=>{
    let ans1 = num1 * num1
    console.log(ans1)
})

let user1 = {
    firstName : "Precious ",
    lastName : "Obika ",
    cohort : 18,
    sex : " female",
    bestColour : " black",
    location : " yaba"
};
// console.log(user1.firstName + user1.lastName + user1.cohort + user1.sex + user1.bestColour + user1.location)
console.log(user1["firstName"], user1["lastName"], user1["cohort"], user1["sex"], user1["bestColour"],  user1["location"])

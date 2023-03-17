//is a reusable block of code

function add(a, b){
    let result = a + b;
    return result;
}
console.log(add(2, 8))
// arrow func
const mult = (t, x) =>  t * x;

console.log(mult(4, 3))
//method func 
console.log("*********object function************")
const obj = {
    checkLength(str){
        console.log(str.length)
    }
}

obj.checkLength('Kamau')




//test

//write a function to print all even numbers greater than 30 and below 50
console.log("*********even number function below************")
function even(x, y) {
    x++
    for(let i = x; i < y ; i++){
        if(i%2 == 0){
            console.log(i)
        }
    }
}
even(30, 50)
console.log("*************arrow function below *************")
const nukes = (n1, n2) => {
    n1++
 for(n1; n1 < n2; n1++) {
    if(n1 % 2 == 0){
        console.log(n1)
    }
}
}
nukes(10, 30)

//write a function that takes an array of numbers as an argument and returns the sum 
//of the numbers in the array. then call the function and print the result to the console
console.log("********Array addition func below**********")

let arr = [3, 4, 5, 6]
function addArray(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}
addArray(arr)


//write function that takes an array of numbers as an argument and returns the average of those numbers

const averageArr = (arr) => {
    let num = arr.length
    let sum = 0
    for(let i =0 ; i < num ; i++){
        sum += arr[i]
    }
    let average = sum / num
    console.log(average)
}
averageArr(arr)


//write a function that takes a string as an argument and returns the string with all vowels removed

function vowelRemover(str) {
    const vowels = ["a", "e", "i", "o", "u"];//defining vowels in an array
    const strArr = str.toLowerCase().split("");//incase string has capitals and split for separating the characters
    //going through the new string with a function to detect vowels
    const newString = strArr.filter(function(char) {
        return !vowels.includes(char); 
    });
    return newString.join("");
}
let song = "mamio mamiondoko"
let remover = vowelRemover(song);
console.log("original " + song + ": removed " + remover);
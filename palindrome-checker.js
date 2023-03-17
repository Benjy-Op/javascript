//Palindrome checker: 
//Write a function that takes a string as an argument and 
//returns a boolean indicating whether the string is a palindrome 
//(a word or phrase that reads the same forwards and backwards). 
//You can use string methods such as split(), reverse(), and join() 
//to accomplish this task.

function paliChecker (str) {
    str = str.toLowerCase()
    let newStr = str.split("").reverse().join("")
    if (str == newStr) {
        return true;
    }
    else{
        return false;
    }
}
console.log(paliChecker("2002"))

//Reverse string: Write a function that takes a 
//string as an argument and returns the string reversed. 
//You can use string methods such as split(), reverse(), 
//and join() to accomplish this task.

const revString = (name) => {
    name = name.toLowerCase()
    let revName = name.split("").reverse().join("")
    console.log(revName)
}
revString("benjamin")

// Longest word in a string: Write a function that takes a string as 
// an argument and returns the longest word in the string. You can use string methods 
// such as split(), sort(), and length to accomplish this task.
console.log("##############################")
const longStr = (stmnt) => {
    let zero = stmnt.replace(/[0-9.]/g, "");
    console.log(zero)
    let word = zero.toLowerCase().split(" ")
  
    let longest = '';
    for (let i = 0; i < word.length ; i++) {
        if(word[i].length > longest.length){
            longest = word[i].length
        }
    }
    return longest;
}

console.log(longStr("my names  are999 benj99amin."))
 

//ksdkf
console.log("****************")

// Array flattening: Write a function that takes a nested array 
// as an argument and returns a flattened array. You can use array
//  methods such as concat(), reduce(), and flat() to accomplish this task.

let arr = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7,[6,7,8], 8, 9],
    [10, 11, 12, 13, 14, 15]
];

const fllat = (arrAy) => {
    
    console.log(arrAy.flat(2))
}
fllat(arr)
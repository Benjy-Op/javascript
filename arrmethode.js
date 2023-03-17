//push pop shift unshift
const vowels = ["a", "e", "i", "o", "u"];

//push adds at the end of array
//pop removes at the end of array
//shift remove first element
//unshift adds element at the beggining
//non mutating methods
//slice takes 2 values start and end and the return is stored  and it doesnt give the last index

//splice mutates the array has 3 arguments start end and replacement

//charAt() returns a character at given argument

//write a function to count the number of occurence of a character in a string

let ourTarget = "n"
let userName = "congradulatiaons"
function findIndex (char) {
    let newChar = char.split("a").length - 1
   console.log(newChar)
}
findIndex(userName)

let userName = prompt("Enter Your name")
let age = prompt("Enter age ")

function callUser (){
   return document.getElementById("name").innerHTML ="My name is "  + userName + "i am " + age + " years old";
}
callUser()
alert(age)

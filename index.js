var readlineSync = require('readline-sync')

// input
var userName = readlineSync.question("Enter your name ")
console.log("Welcome " + userName)


var num = "Enter your date here "
function checkPrime(num){

  var userInput = readlineSync.question(num)
  console.log(userInput)


  

  if (userInput < 2){


    return ("not prime");

  }

  for(var i = 2 ; i < userInput; i++){
    if(userInput % i === 0){
      return ("not prime");
    }
  }

  return ("it is prime");


  
}

checkPrime(num)

// output


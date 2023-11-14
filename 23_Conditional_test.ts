/* Conditional Tests: Write a series of conditional tests. Print a statement describing
 each test and your prediction for the results of each test.

 Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to
True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests 
evaluate to False. */

// Test 1 

let guest0 : string = "Mughees";

let result:boolean = guest0 === "Mughees" ? true : false;

console.log(result); // result = true


// Test 2
// If user are 18+. Then he is eligible for vote.
let age1 : number = 20;

let eligibleForVote : boolean = age1 >= 18 ? true : false;

console.log(eligibleForVote) // eligibleForVote = true.


// Test 3
// If user are adult. Then he is able to entre the vanue.

let age2 : number = 16;

let eligible : boolean = age2 >= 18 ? true : false;

console.log(eligible); // eligible = false.

//Test 4
// Checking Iphone User.

let userPhone : string = "Iphone";

if (userPhone == "Iphone"){
    console.log("Current user is Iphone user", true)  // true
}

else{
    console.log("Given user is not Iphone user", false)
}


// Test 5
// Checking Random Number between 0 to 100.

let randomNumber : number = 40;

if(randomNumber > 50 ){
    
    console.log(true);
}

else(false)  // false



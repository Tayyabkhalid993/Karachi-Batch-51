"use strict";
/* 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of
 these animals in a list, and then use a for loop to print out the name of each animal.
 • Modify your program to print a statement about each animal, such as A dog would make a great pet.
 • Add a line at the end of your program stating what these animals have in common. You could print a sentence
 such as Any of these animals would make a great pet! */
const animal = ["Lion", "Tiger", "Monkey"];
for (let i = 0; i < animal.length; i++) {
    if (animal[i] == "Lion") {
        console.log(`${animal[i]} is King of Jungle. `);
    }
    else if (animal[i] == "Tiger") {
        console.log(`${animal[i]} is the fatest runner.`);
    }
    else {
        console.log(`${animal[i]} is mastest animal.`);
    }
}
console.log("All of these are wild animals.");

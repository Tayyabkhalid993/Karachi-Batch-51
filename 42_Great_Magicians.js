"use strict";
/* 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
 to see that the list has actually been modified. */
let magician1 = ["John", "Olive", "Jasmine"];
function show_magicians1(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}
//  console.log(show_magicians1(magician1));
function make_great(array) {
    array.forEach((element) => {
        console.log(`${element} is a great magician.`);
    });
}
console.log(make_great(magician1));

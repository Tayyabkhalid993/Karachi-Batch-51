"use strict";
/* 39. City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:
"Lahore, Pakistan".
Call your function with at least three city-country pairs, and print the value that’s returned. */
function city_name(city, county) {
    return `"${city}, ${county}"`;
}
console.log(city_name("Multan", "Pakistan"));
console.log(city_name("Paris", "France"));
console.log(city_name("Tokyo", "Japan"));

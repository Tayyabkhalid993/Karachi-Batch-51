"use strict";
/* 22. Intentional Error: If you haven’t received an array index error in one of your programs yet,
 try to make one happen. */
let sum = 0;
for (let i = 1; i < 10; i++) {
    if (i >= 8) {
        throw console.error("You got error while calculation.");
    }
    else {
        sum += i;
        console.log(i + sum);
    }
}

/* 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
 I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with
 a different message. */


 
 function make_shirt (size:string){
    if(size == "Large"){
        console.log('Print message on shirt "I love TypeScript."');
    }

    else if(size == "Extra Large"){
        console.log('Print message on shirt "I am master of TypeScript."');
    }
    else if(size == "Medium"){
        console.log('Print message on shirt "I learner of TypeScript."');
    }
    else {
        console.log('Print message on shirt "I am beginner."')
    }

 }

let callFun = make_shirt("Large");


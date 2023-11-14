/* 21. They think of something you could store in a TypeScript Object. Write a program that creates
 Objects containing these items. */


 interface mobileType {
    companyName : string,
    model : any,
    RAM : any,
    ROM : any,
    price : number
 }

 const mobile : mobileType ={
    companyName : "Iphone",
    model : "Pro Max",
    RAM : "16 GB",
    ROM : "256 GB",
    price : 120000
 }

 console.log(mobile);

 
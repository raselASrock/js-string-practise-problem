const result = Math.pow(4, 6);
console.log(result);

// -***************------MATH----*************

const num1 = 25;
const num2 = 75;
const gap = Math.abs(num1-num2);
console.log(gap);
if( gap< 5){
    console.log("You guys can be friends.");
}
else{
    console.log("Please stay apart")
}

// *********Math Round**********

const number = 236.212589652;
const fullNumber = Math.round(number)
console.log(fullNumber);

// **----------*********Math ceiling-****************

const num = 2365.14562232;
const realNumber = Math.ceil(num);
console.log(realNumber);

// **********-------Math Floor***********----

const numbe = 234.985698;
const floorNumber = Math.floor(numbe);
console.log(floorNumber);


// *******------------Math Random********-----------

console.log(Math.random()*5);

// console.log(Math.round(Math.random()*100));


for( let i = 0; i < 20; i++){
    console.log(Math.round(Math.random()*5));
}

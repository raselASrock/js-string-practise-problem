let first = 5;
let second = 7;
console.log(first, second);
//*************** */ This is wrong Approch*************
/*first = second;
second = first*/ 
// *****************Approch:1************
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// ***********Approch: 2***********
// Destructing
[first , second ] = [second, first];
console.log(first, second);

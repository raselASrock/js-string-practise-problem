// const jim = 84;
// const dela = 75;
// if( jim > dela){
//     console.log("Jim will get the cake.");
// }
// else{
//     console.log("Dela will get the cake.");
// }
// const jim = 69;
// const dela = 97;
// if( jim > dela){
//     console.log("Jim will get the cake.");
// }
// else{
//     console.log("Dela will get the cake.");
// }
// const jim = 84;
// const dela = 99;
// const cinku = 77;

// if( jim > dela && jim > cinku){
//     console.log("Jim will get the cake.");
// }
// else if( dela > jim && dela > cinku){
//     console.log("Dela will get the cake.");
// }
// else{
//     console.log("Cinku will get the cake.");
// }

function maxInArrey (numbers){
    let largest = numbers[0];
    for( let i = 0; i < numbers.length ; i++){
        const index = i;
        const element = numbers[index];
        // console.log(index, element);
        if( element > largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137, 275];
const tallest = maxInArrey(heights);
console.log(tallest);
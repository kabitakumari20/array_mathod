const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log("allOver18=======>>", allOver18)

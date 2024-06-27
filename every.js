const numbers = [45, 24, 29, 26, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log("allOver18=======>>", allOver18)



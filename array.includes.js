const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.includes("Mango")); // is true
// console.log("citrus=========>>", fruits)



const numbers = [4, 9, 16, 19, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log("first=======>>", first)
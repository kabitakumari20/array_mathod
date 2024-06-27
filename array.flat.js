const myArr = [[1, 2], [3, 4], [5, 6]];
// const newArr = myArr.flat();
// console.log("newArr=========>>", newArr)
let newArr = []
for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr[i].length; j++) {
        newArr.push(j[i])
    }
}
console.log("newArr==========>..", newArr);
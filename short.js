// let n = arr.length;
// let i = 0
// console.log("ll========>>", n - i - 1)
// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         console.log(",,,,,,,,>>", arr[j])
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log(arr); 


let arr = [233, 12, 6, 89, 34, 56];

let bubblesort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let swap = false
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //swap
                arr[j] = arr[j] + arr[j + 1]
                arr[j + 1] = arr[j] - arr[j + 1]
                arr[j] = arr[j] - arr[j + 1]
                swap = true
            }
        }
        if (swap == false) break;
    }
    return arr;
}
bubblesort(arr)
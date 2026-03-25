//rotate every elements of array to left by 1

// let arr = [1,2,3,4,5]
// let temp = arr[0]

// for (let i = 1; i<arr.length; i++){
// arr[i-1] = arr[i];

// }
// arr[arr.length-1] = temp
// console.log(arr)

//right rotation by 1

// let arr = [1,2,3,4,5];
// let temp = arr[arr.length-1]
// for (let i = arr.length-2; i>=0; i--){
// arr[i+1] = arr[i]
// }
// arr[0]= temp
// console.log(arr)

//left rotation by k element

// let arr = [1,2,3,4,5]

// let k = 4

// for( let j = 1; j<=k; j++){
//     let temp = arr[0]
//         for(let i = 1; i<arr.length; i++){
//             arr[i-1] = arr[i]
//         }
//         arr[arr.length-1] = temp
//     }
//     console.log(arr)

//print the subarrays of an array whose sum is equal to target

let arr = [1,2,3,7,5]
let target = 12;

let count = 0;
for (let i = 0; i< arr.length; i++){
    let sum = 0;
    for(let j = i; j<arr.length; j++){
        sum = sum + arr[j];
        if(sum == target){
            count++;
        }
    }
}
console.log(count)

//sum of elements of array
// let arr = [5,7,9,11,13];
// let sum = 0;
// for (let i = 0; i< arr.length; i++){
//     sum = sum+ arr[i]
   
// }
// console.log(sum)

// maximum number of an array
//second max
// let arr = [65,89,36,56,79]

// let max = arr[0];
// for(let i = 1; i < arr.length; i++){
// if(max<arr[i]){
//     max = arr[i]
// }
// }
// console.log(max)

// let max = Math.max(arr[0], arr[1]);
// let sMax = Math.min(arr[0], arr[1]);

// for(let i = 2; i < arr.length; i++){
//     if(arr[i]>max){
//         sMax = max;
//         max = arr[i]
//     } else if(arr[i]>sMax && arr[i] !== max){
//         sMax = arr[i]
//     }
// }
// console.log(max)
// console.log(sMax)

//Reverse the array
// let arr2 = new Array(arr.length)
// let i =  arr.length-1

// for (let j = 0; j< arr2.length; j++){
//     arr2[j] = arr[i];
//     i--;
// }
// console.log(arr2)

//reverse array withot extra space

// let arr = [65,89,36,56,79]

// let i = 0;

// let j = arr.length - 1
// while(i<j){
//     let temp = arr[i];
    
//     arr[i] = arr[j] 
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr)

//all zeroes in the left and all one in thevright

// const arr = [0,0,1,0,1,1,0,1]
// let j = 0;

// for(let i = 0; i< arr.length; i++){
//     if(arr[i] === 0){
//         let temp = arr[i];
// arr[i] = arr[j];
// arr[j] = temp
// j++
//     }
// }
// console.log(arr)

//all negative in left posituive in right

const arr = [65,-85,-98,52,66,-71];

let j = 0;
let i = 0;

while(i< arr.length){
    if(arr[i] < 0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++
}

console.log(arr)


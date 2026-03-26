//Searching the targeted no using binary search

let prompt = require('prompt-sync')()

let arr = [2,5,8,19,45,67,78,88,94];

let target = Number(prompt("Enter a number: "))

let start = 0;
let end = arr.length-1

let idx = 0;

while(start<=end){
    let mid = Math.floor((start+end)/2)
    if(arr[mid] == target){
        idx = mid;
        break
    } else if(arr[mid]< target){
        start = mid+1
    }else{
        end = mid-1
    }
    // start++
}
console.log(idx)
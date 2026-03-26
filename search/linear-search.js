//search untill the target and print the index

let arr = [5,9,54,65,25,67,48,89]
let target = 67

for (let i = 0; i<arr.length;i++){
    if(arr[i] === target){
        console.log(`the index of the target is ${i}`)
        break;
    }
}